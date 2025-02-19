import { useQuery, useQueryClient } from '@tanstack/react-query';
import { CryptoCurrency } from '@tonkeeper/core/dist/entries/crypto';
import { FiatCurrencies } from '@tonkeeper/core/dist/entries/fiat';
import { RatesApi, TokenRates } from '@tonkeeper/core/dist/tonApiV2';
import BigNumber from 'bignumber.js';
import { useMemo } from 'react';
import { useAppContext } from '../hooks/appContext';
import { formatFiatCurrency } from '../hooks/balance';
import { QueryKey } from '../libs/queryKey';

export interface TokenRate {
    diff7d: string;
    diff24h: string;
    prices: number;
}

export const toTokenRate = (rate: TokenRates, fiat: FiatCurrencies): TokenRate => {
    return Object.entries(rate).reduce((acc, [key, value]) => {
        acc[key] = value[fiat];
        return acc;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {} as Record<string, any>) as TokenRate;
};

export const usePreFetchRates = () => {
    const {
        api: { tonApiV2 }
    } = useAppContext();
    const { fiat } = useAppContext();
    const client = useQueryClient();

    return useQuery(
        [QueryKey.rate],
        async () => {
            const value = await new RatesApi(tonApiV2).getRates({
                tokens: [CryptoCurrency.TON, CryptoCurrency.USDT].join(','),
                currencies: fiat
            });

            if (!value || !value.rates) {
                throw new Error('Missing price for tokens');
            }

            for (const [token, rate] of Object.entries<TokenRates>(value.rates)) {
                try {
                    const tokenRate = toTokenRate(rate, fiat);
                    if (tokenRate) {
                        client.setQueryData(getRateKey(fiat, token), tokenRate);
                    }
                } catch (e) {
                    console.error(e);
                }
            }
            setTimeout(() => client.invalidateQueries([QueryKey.total]));
            return 'ok';
        },
        { retry: 0 }
    );
};

export const getRateKey = (fiat: FiatCurrencies, token: string) => [QueryKey.rate, fiat, token];

export const useRate = (token: string) => {
    const {
        api: { tonApiV2 }
    } = useAppContext();
    const { fiat } = useAppContext();
    const client = useQueryClient();
    return useQuery<TokenRate, Error>(
        getRateKey(fiat, token),
        async () => {
            const value = await new RatesApi(tonApiV2).getRates({
                tokens: token,
                currencies: fiat
            });

            try {
                const tokenRate = toTokenRate(value.rates[token], fiat);
                if (!tokenRate || !tokenRate.prices) {
                    throw new Error(`Missing price for token: ${token}`);
                }
                setTimeout(() => client.invalidateQueries([QueryKey.total]));
                return tokenRate;
            } catch (e) {
                throw e;
            }
        },
        { retry: 0 }
    );
};

export const useFormatFiat = (rate: TokenRate | undefined, tokenAmount: BigNumber.Value) => {
    const { fiat } = useAppContext();

    const [fiatPrice, fiatAmount] = useMemo(() => {
        if (!rate) return [undefined, undefined] as const;
        return [
            formatFiatCurrency(fiat, rate.prices),
            formatFiatCurrency(fiat, new BigNumber(rate.prices).multipliedBy(tokenAmount))
        ] as const;
    }, [rate, fiat, tokenAmount]);
    return {
        fiatPrice,
        fiatAmount
    };
};
