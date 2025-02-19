import { Address } from 'ton-core';
import { AppKey } from '../../Keys';
import { IStorage } from '../../Storage';
import { AccountState } from '../../entries/account';
import { TonConnectError } from '../../entries/exception';
import { Network } from '../../entries/network';
import { CONNECT_EVENT_ERROR_CODES } from '../../entries/tonConnect';
import { WalletState } from '../../entries/wallet';

export const getWalletState = async (storage: IStorage, publicKey: string) => {
    const state = await storage.get<WalletState>(`${AppKey.WALLET}_${publicKey}`);

    if (state) {
        state.active.friendlyAddress = Address.parse(state.active.friendlyAddress).toString({
            testOnly: state.network === Network.TESTNET
        });
    }

    return state;
};

export const setWalletState = (storage: IStorage, state: WalletState) => {
    return storage.set(`${AppKey.WALLET}_${state.publicKey}`, state);
};

export const getCurrentWallet = async (storage: IStorage) => {
    const state = await storage.get<AccountState>(AppKey.ACCOUNT);

    if (!state || !state.activePublicKey) {
        throw new TonConnectError(
            'Missing active wallet',
            CONNECT_EVENT_ERROR_CODES.UNKNOWN_APP_ERROR
        );
    }

    const wallet = await getWalletState(storage, state.activePublicKey);

    if (!wallet) {
        throw new TonConnectError(
            'Missing wallet state',
            CONNECT_EVENT_ERROR_CODES.UNKNOWN_APP_ERROR
        );
    }

    return wallet;
};
