import { IAppSdk } from '@tonkeeper/core/dist/AppSdk';
import { AuthState } from '@tonkeeper/core/dist/entries/password';
import { Signer } from '@tonkeeper/core/dist/entries/signer';
import { getWalletMnemonic } from '@tonkeeper/core/dist/service/mnemonicService';
import { signByMnemonicOver } from '@tonkeeper/core/dist/service/transfer/common';
import { getWalletAuthState } from '@tonkeeper/core/dist/service/walletService';

export const getSigner = async (sdk: IAppSdk, publicKey: string): Promise<Signer> => {
    const auth = await getWalletAuthState(sdk.storage, publicKey);

    switch (auth.kind) {
        case 'signer': {
            return async (buffer: Buffer) => {
                // TODO: Open signer notification
                return buffer;
            };
        }
        default: {
            const mnemonic = await getMnemonic(sdk, publicKey);
            return signByMnemonicOver(mnemonic);
        }
    }
};

export const getMnemonic = async (sdk: IAppSdk, publicKey: string): Promise<string[]> => {
    const auth = await getWalletAuthState(sdk.storage, publicKey);

    switch (auth.kind) {
        case 'none': {
            return await getWalletMnemonic(sdk.storage, publicKey, auth.kind);
        }
        case 'password': {
            const password = await getPasswordByNotification(sdk, auth);
            return await getWalletMnemonic(sdk.storage, publicKey, password);
        }
        case 'keychain': {
            if (!sdk.keychain) {
                throw Error('Keychain is undefined');
            }
            const mnemonic = await sdk.keychain.getPassword(publicKey);
            return mnemonic.split(' ');
        }
        default:
            throw new Error('Unexpected auth method');
    }
};

export const getPasswordByNotification = async (sdk: IAppSdk, auth: AuthState): Promise<string> => {
    const id = Date.now();
    return new Promise<string>((resolve, reject) => {
        sdk.uiEvents.emit('getPassword', {
            method: 'getPassword',
            id,
            params: { auth }
        });

        const onCallback = (message: {
            method: 'response';
            id?: number | undefined;
            params: string | Error;
        }) => {
            if (message.id === id) {
                const { params } = message;
                sdk.uiEvents.off('response', onCallback);

                if (typeof params === 'string') {
                    resolve(params);
                } else {
                    reject(params);
                }
            }
        };

        sdk.uiEvents.on('response', onCallback);
    });
};
