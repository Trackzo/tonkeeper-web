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
import type { PoolImplementationType } from './PoolImplementationType';
import {
    PoolImplementationTypeFromJSON,
    PoolImplementationTypeFromJSONTyped,
    PoolImplementationTypeToJSON,
} from './PoolImplementationType';

/**
 * validator's participation in elections
 * @export
 * @interface WithdrawStakeAction
 */
export interface WithdrawStakeAction {
    /**
     * 
     * @type {number}
     * @memberof WithdrawStakeAction
     */
    amount: number;
    /**
     * 
     * @type {AccountAddress}
     * @memberof WithdrawStakeAction
     */
    staker: AccountAddress;
    /**
     * 
     * @type {AccountAddress}
     * @memberof WithdrawStakeAction
     */
    pool: AccountAddress;
    /**
     * 
     * @type {PoolImplementationType}
     * @memberof WithdrawStakeAction
     */
    implementation: PoolImplementationType;
}

/**
 * Check if a given object implements the WithdrawStakeAction interface.
 */
export function instanceOfWithdrawStakeAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "staker" in value;
    isInstance = isInstance && "pool" in value;
    isInstance = isInstance && "implementation" in value;

    return isInstance;
}

export function WithdrawStakeActionFromJSON(json: any): WithdrawStakeAction {
    return WithdrawStakeActionFromJSONTyped(json, false);
}

export function WithdrawStakeActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): WithdrawStakeAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'staker': AccountAddressFromJSON(json['staker']),
        'pool': AccountAddressFromJSON(json['pool']),
        'implementation': PoolImplementationTypeFromJSON(json['implementation']),
    };
}

export function WithdrawStakeActionToJSON(value?: WithdrawStakeAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'staker': AccountAddressToJSON(value.staker),
        'pool': AccountAddressToJSON(value.pool),
        'implementation': PoolImplementationTypeToJSON(value.implementation),
    };
}

