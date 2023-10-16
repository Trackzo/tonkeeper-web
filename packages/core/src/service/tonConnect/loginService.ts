import { ConnectItem, DAppManifest } from '../../entries/tonConnect';
import { getManifestResponse } from './connectService';
import { TonConnectParams } from './connectionService';
import { SessionCrypto } from './protocol';

export const seeIfTonLogin = (url: string) => {
    return url.startsWith('https://app.tonkeeper.com/ton-login');
};

interface LoginPayload {
    protocol: 'ton-auth';
    v1: {
        callback_url: string;
        image_url: string;
        items: { type: 'ton-ownership'; required: true }[];
        session: string;
        session_payload: string;
    };
}
export const loadingLoginPayload = async (url: string): Promise<TonConnectParams> => {
    const payloadUrl = `https://${url.slice(36)}`;

    const response = await getManifestResponse(payloadUrl);
    if (response.status != 200) {
        throw new Error(`Failed to load Manifest: ${response.status}`);
    }

    const payload: LoginPayload = await response.json();

    const sessionCrypto = new SessionCrypto();

    const items: ConnectItem[] = [{ name: 'ton_addr' }];
    if (payload.v1.items.some(item => item.type === 'ton-ownership' && item.required)) {
        items.push({
            name: 'ton_proof',
            payload: payload.v1.session_payload
        });
    }

    const dappUrl = new URL(payload.v1.callback_url).host;

    const manifestData: DAppManifest = {
        url: dappUrl,
        name: dappUrl,
        iconUrl: payload.v1.image_url
    };

    return {
        protocolVersion: 1,
        request: { manifestUrl: payloadUrl, manifestData, items },
        clientSessionId: payload.v1.session,
        sessionKeyPair: sessionCrypto.stringifyKeypair()
    };
};
