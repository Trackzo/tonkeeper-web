import { FiatCurrencies } from './fiat';
import { Language } from './language';
import { Network } from './network';
import { WalletProxy } from './proxy';

export enum WalletVersion {
    V3R1 = 0,
    V3R2 = 1,
    V4R1 = 2,
    V4R2 = 3
}

export const WalletVersions = [WalletVersion.V3R1, WalletVersion.V3R2, WalletVersion.V4R2];

export const walletVersionText = (version: WalletVersion) => {
    switch (version) {
        case WalletVersion.V3R1:
            return 'v3R1';
        case WalletVersion.V3R2:
            return 'v3R2';
        case WalletVersion.V4R2:
            return 'v4R2';
        default:
            return String(version);
    }
};

export interface WalletAddress {
    friendlyAddress: string;
    rawAddress: string;
    version: WalletVersion;
}

export interface WalletVoucher {
    secretKey: string;
    publicKey: string;
    sharedKey: string;
    voucher: string;
}

export interface WalletState {
    publicKey: string;
    active: WalletAddress;

    name?: string;

    revision: number;

    network?: Network;

    hiddenJettons?: string[];
    shownJettons?: string[];
    orderJettons?: string[];

    lang?: Language;
    fiat?: FiatCurrencies;
    theme?: string;

    proxy?: WalletProxy;

    tron?: TronWalletStorage;
}

export interface TronWalletStorage {
    ownerWalletAddress: string;
    walletByChain: Record<string, string>;
}

export interface TronWalletState {
    ownerWalletAddress: string;
    chainId: string;
    walletAddress: string;
}
