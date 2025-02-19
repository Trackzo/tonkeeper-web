import BigNumber from 'bignumber.js';
import {
    Address,
    beginCell,
    Cell,
    comment,
    external,
    internal,
    storeMessage,
    toNano
} from 'ton-core';
import { mnemonicToPrivateKey } from 'ton-crypto';
import { WalletContractV3R1 } from 'ton/dist/wallets/WalletContractV3R1';
import { WalletContractV3R2 } from 'ton/dist/wallets/WalletContractV3R2';
import { WalletContractV4 } from 'ton/dist/wallets/WalletContractV4';
import nacl from 'tweetnacl';
import { APIConfig } from '../../entries/apis';
import { WalletState } from '../../entries/wallet';
import {
    Account,
    AccountsApi,
    LiteServerApi,
    MessageConsequences,
    WalletApi
} from '../../tonApiV2';
import { walletContractFromState } from '../wallet/contractService';

export enum SendMode {
    CARRY_ALL_REMAINING_BALANCE = 128,
    CARRY_ALL_REMAINING_INCOMING_VALUE = 64,
    DESTROY_ACCOUNT_IF_ZERO = 32,
    PAY_GAS_SEPARATELY = 1,
    IGNORE_ERRORS = 2,
    NONE = 0
}

export const externalMessage = (
    contract: WalletContractV3R1 | WalletContractV3R2 | WalletContractV4,
    seqno: number,
    body: Cell
) => {
    return beginCell()
        .storeWritable(
            storeMessage(
                external({
                    to: contract.address,
                    init: seqno === 0 ? contract.init : undefined,
                    body: body
                })
            )
        )
        .endCell();
};

export const forwardPayloadComment = (commentValue: string) => {
    if (!commentValue) beginCell();
    return comment(commentValue).asBuilder();
};

export const seeIfBalanceError = (e: unknown): e is Error => {
    return e instanceof Error && e.message.startsWith('Not enough account');
};

export const checkWalletBalanceOrDie = (total: BigNumber, wallet: Account) => {
    if (total.isGreaterThanOrEqualTo(wallet.balance)) {
        throw new Error(
            `Not enough account "${wallet.address}" amount: "${
                wallet.balance
            }", transaction total: ${total.toString()}`
        );
    }
};

export const checkWalletPositiveBalanceOrDie = (wallet: Account) => {
    if (new BigNumber(wallet.balance).isLessThan(toNano('0.01').toString())) {
        throw new Error(`Not enough account "${wallet.address}" amount: "${wallet.balance}"`);
    }
};

export const getWalletSeqNo = async (api: APIConfig, accountId: string) => {
    const { seqno } = await new WalletApi(api.tonApiV2)
        .getAccountSeqno({
            accountId
        })
        .catch(() => ({
            seqno: 0
        }));

    return seqno;
};

export const getWalletBalance = async (api: APIConfig, walletState: WalletState) => {
    const wallet = await new AccountsApi(api.tonApiV2).getAccount({
        accountId: walletState.active.rawAddress
    });
    const seqno = await getWalletSeqNo(api, walletState.active.rawAddress);

    return [wallet, seqno] as const;
};

export const seeIfServiceTimeSync = async (api: APIConfig) => {
    const { time } = await new LiteServerApi(api.tonApiV2).getRawTime();
    const isSynced = Math.abs(Date.now() - time * 1000) <= 7000;
    return isSynced;
};

export const seeIfTimeError = (e: unknown): e is Error => {
    return e instanceof Error && e.message.startsWith('Time and date are incorrect');
};

export const checkServiceTimeOrDie = async (api: APIConfig) => {
    const isSynced = await seeIfServiceTimeSync(api);
    if (!isSynced) {
        throw new Error('Time and date are incorrect');
    }
};

export const createTransferMessage = (
    wallet: {
        seqno: number;
        state: WalletState;
        secretKey: Buffer;
    },
    transaction: {
        to: string;
        value: string | bigint | BigNumber;
        body?: string | Cell | null;
    }
) => {
    const value =
        transaction.value instanceof BigNumber ? transaction.value.toFixed(0) : transaction.value;
    const contract = walletContractFromState(wallet.state);
    const transfer = contract.createTransfer({
        seqno: wallet.seqno,
        secretKey: wallet.secretKey,
        timeout: getTTL(),
        sendMode: SendMode.PAY_GAS_SEPARATELY + SendMode.IGNORE_ERRORS,
        messages: [
            internal({
                to: Address.parse(transaction.to),
                bounce: true,
                value: BigInt(value),
                body: transaction.body
            })
        ]
    });

    return externalMessage(contract, wallet.seqno, transfer).toBoc();
};

export async function getKeyPairAndSeqno(options: {
    api: APIConfig;
    walletState: WalletState;
    fee: MessageConsequences;
    mnemonic: string[];
    amount: BigNumber;
}) {
    await checkServiceTimeOrDie(options.api);
    const keyPair = await mnemonicToPrivateKey(options.mnemonic);

    const total = options.amount.plus(options.fee.event.extra * -1);

    const [wallet, seqno] = await getWalletBalance(options.api, options.walletState);
    checkWalletBalanceOrDie(total, wallet);
    return { seqno, keyPair };
}

export const getTTL = () => {
    return Math.floor(Date.now() / 1e3) + 300; // 5min
};

export const getTonkeeperQueryId = () => {
    return beginCell()
        .storeUint(0x546de4ef, 32) //crc32("tonkeeper")
        .storeBuffer(Buffer.from(nacl.randomBytes(4))) //random 32 bits
        .asSlice()
        .loadIntBig(64);
};
