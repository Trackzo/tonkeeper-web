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
/**
 * suspended accounts
 * @export
 * @interface BlockchainConfig44
 */
export interface BlockchainConfig44 {
    /**
     * 
     * @type {Array<string>}
     * @memberof BlockchainConfig44
     */
    accounts: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof BlockchainConfig44
     */
    suspendedUntil: number;
}

/**
 * Check if a given object implements the BlockchainConfig44 interface.
 */
export function instanceOfBlockchainConfig44(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accounts" in value;
    isInstance = isInstance && "suspendedUntil" in value;

    return isInstance;
}

export function BlockchainConfig44FromJSON(json: any): BlockchainConfig44 {
    return BlockchainConfig44FromJSONTyped(json, false);
}

export function BlockchainConfig44FromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig44 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounts': json['accounts'],
        'suspendedUntil': json['suspended_until'],
    };
}

export function BlockchainConfig44ToJSON(value?: BlockchainConfig44 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounts': value.accounts,
        'suspended_until': value.suspendedUntil,
    };
}

