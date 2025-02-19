/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MsgForwardPrices } from './MsgForwardPrices';
import {
    MsgForwardPricesFromJSON,
    MsgForwardPricesFromJSONTyped,
    MsgForwardPricesToJSON,
} from './MsgForwardPrices';

/**
 * The cost of sending messages in the basechains of the TON blockchain.
 * @export
 * @interface BlockchainConfig25
 */
export interface BlockchainConfig25 {
    /**
     * 
     * @type {MsgForwardPrices}
     * @memberof BlockchainConfig25
     */
    msgForwardPrices: MsgForwardPrices;
}

/**
 * Check if a given object implements the BlockchainConfig25 interface.
 */
export function instanceOfBlockchainConfig25(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "msgForwardPrices" in value;

    return isInstance;
}

export function BlockchainConfig25FromJSON(json: any): BlockchainConfig25 {
    return BlockchainConfig25FromJSONTyped(json, false);
}

export function BlockchainConfig25FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig25 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'msgForwardPrices': MsgForwardPricesFromJSON(json['msg_forward_prices']),
    };
}

export function BlockchainConfig25ToJSON(value?: BlockchainConfig25 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'msg_forward_prices': MsgForwardPricesToJSON(value.msgForwardPrices),
    };
}

