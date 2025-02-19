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
import type { BlockRaw } from './BlockRaw';
import {
    BlockRawFromJSON,
    BlockRawFromJSONTyped,
    BlockRawToJSON,
} from './BlockRaw';
import type { GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignatures } from './GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignatures';
import {
    GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesFromJSON,
    GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesFromJSONTyped,
    GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesToJSON,
} from './GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignatures';

/**
 * 
 * @export
 * @interface GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward
 */
export interface GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward {
    /**
     * 
     * @type {boolean}
     * @memberof GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward
     */
    toKeyBlock: boolean;
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward
     */
    from: BlockRaw;
    /**
     * 
     * @type {BlockRaw}
     * @memberof GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward
     */
    to: BlockRaw;
    /**
     * 
     * @type {string}
     * @memberof GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward
     */
    destProof: string;
    /**
     * 
     * @type {string}
     * @memberof GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward
     */
    configProof: string;
    /**
     * 
     * @type {GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignatures}
     * @memberof GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward
     */
    signatures: GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignatures;
}

/**
 * Check if a given object implements the GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward interface.
 */
export function instanceOfGetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "toKeyBlock" in value;
    isInstance = isInstance && "from" in value;
    isInstance = isInstance && "to" in value;
    isInstance = isInstance && "destProof" in value;
    isInstance = isInstance && "configProof" in value;
    isInstance = isInstance && "signatures" in value;

    return isInstance;
}

export function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardFromJSON(json: any): GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward {
    return GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardFromJSONTyped(json, false);
}

export function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'toKeyBlock': json['to_key_block'],
        'from': BlockRawFromJSON(json['from']),
        'to': BlockRawFromJSON(json['to']),
        'destProof': json['dest_proof'],
        'configProof': json['config_proof'],
        'signatures': GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesFromJSON(json['signatures']),
    };
}

export function GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardToJSON(value?: GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForward | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'to_key_block': value.toKeyBlock,
        'from': BlockRawToJSON(value.from),
        'to': BlockRawToJSON(value.to),
        'dest_proof': value.destProof,
        'config_proof': value.configProof,
        'signatures': GetRawBlockProof200ResponseStepsInnerLiteServerBlockLinkForwardSignaturesToJSON(value.signatures),
    };
}

