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
 * 
 * @export
 * @interface Oracle
 */
export interface Oracle {
    /**
     * 
     * @type {string}
     * @memberof Oracle
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof Oracle
     */
    secpPubkey: string;
}

/**
 * Check if a given object implements the Oracle interface.
 */
export function instanceOfOracle(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "secpPubkey" in value;

    return isInstance;
}

export function OracleFromJSON(json: any): Oracle {
    return OracleFromJSONTyped(json, false);
}

export function OracleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Oracle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'secpPubkey': json['secp_pubkey'],
    };
}

export function OracleToJSON(value?: Oracle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'secp_pubkey': value.secpPubkey,
    };
}

