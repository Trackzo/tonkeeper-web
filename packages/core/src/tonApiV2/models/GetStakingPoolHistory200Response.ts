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
import type { ApyHistory } from './ApyHistory';
import {
    ApyHistoryFromJSON,
    ApyHistoryFromJSONTyped,
    ApyHistoryToJSON,
} from './ApyHistory';

/**
 * 
 * @export
 * @interface GetStakingPoolHistory200Response
 */
export interface GetStakingPoolHistory200Response {
    /**
     * 
     * @type {Array<ApyHistory>}
     * @memberof GetStakingPoolHistory200Response
     */
    apy: Array<ApyHistory>;
}

/**
 * Check if a given object implements the GetStakingPoolHistory200Response interface.
 */
export function instanceOfGetStakingPoolHistory200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "apy" in value;

    return isInstance;
}

export function GetStakingPoolHistory200ResponseFromJSON(json: any): GetStakingPoolHistory200Response {
    return GetStakingPoolHistory200ResponseFromJSONTyped(json, false);
}

export function GetStakingPoolHistory200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStakingPoolHistory200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apy': ((json['apy'] as Array<any>).map(ApyHistoryFromJSON)),
    };
}

export function GetStakingPoolHistory200ResponseToJSON(value?: GetStakingPoolHistory200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apy': ((value.apy as Array<any>).map(ApyHistoryToJSON)),
    };
}

