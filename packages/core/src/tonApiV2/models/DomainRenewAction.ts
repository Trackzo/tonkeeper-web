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
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';

/**
 * 
 * @export
 * @interface DomainRenewAction
 */
export interface DomainRenewAction {
    /**
     * 
     * @type {string}
     * @memberof DomainRenewAction
     */
    domain: string;
    /**
     * 
     * @type {string}
     * @memberof DomainRenewAction
     */
    contractAddress: string;
    /**
     * 
     * @type {AccountAddress}
     * @memberof DomainRenewAction
     */
    renewer: AccountAddress;
}

/**
 * Check if a given object implements the DomainRenewAction interface.
 */
export function instanceOfDomainRenewAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "domain" in value;
    isInstance = isInstance && "contractAddress" in value;
    isInstance = isInstance && "renewer" in value;

    return isInstance;
}

export function DomainRenewActionFromJSON(json: any): DomainRenewAction {
    return DomainRenewActionFromJSONTyped(json, false);
}

export function DomainRenewActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainRenewAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domain': json['domain'],
        'contractAddress': json['contract_address'],
        'renewer': AccountAddressFromJSON(json['renewer']),
    };
}

export function DomainRenewActionToJSON(value?: DomainRenewAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domain': value.domain,
        'contract_address': value.contractAddress,
        'renewer': AccountAddressToJSON(value.renewer),
    };
}

