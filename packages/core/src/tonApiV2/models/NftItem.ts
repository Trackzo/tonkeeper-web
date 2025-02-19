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
import type { ImagePreview } from './ImagePreview';
import {
    ImagePreviewFromJSON,
    ImagePreviewFromJSONTyped,
    ImagePreviewToJSON,
} from './ImagePreview';
import type { NftItemCollection } from './NftItemCollection';
import {
    NftItemCollectionFromJSON,
    NftItemCollectionFromJSONTyped,
    NftItemCollectionToJSON,
} from './NftItemCollection';
import type { Sale } from './Sale';
import {
    SaleFromJSON,
    SaleFromJSONTyped,
    SaleToJSON,
} from './Sale';

/**
 * 
 * @export
 * @interface NftItem
 */
export interface NftItem {
    /**
     * 
     * @type {string}
     * @memberof NftItem
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof NftItem
     */
    index: number;
    /**
     * 
     * @type {AccountAddress}
     * @memberof NftItem
     */
    owner?: AccountAddress;
    /**
     * 
     * @type {NftItemCollection}
     * @memberof NftItem
     */
    collection?: NftItemCollection;
    /**
     * 
     * @type {boolean}
     * @memberof NftItem
     */
    verified: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof NftItem
     */
    metadata: { [key: string]: any; };
    /**
     * 
     * @type {Sale}
     * @memberof NftItem
     */
    sale?: Sale;
    /**
     * 
     * @type {Array<ImagePreview>}
     * @memberof NftItem
     */
    previews?: Array<ImagePreview>;
    /**
     * 
     * @type {string}
     * @memberof NftItem
     */
    dns?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NftItem
     */
    approvedBy: Array<NftItemApprovedByEnum>;
}


/**
 * @export
 */
export const NftItemApprovedByEnum = {
    Getgems: 'getgems',
    Tonkeeper: 'tonkeeper',
    TonDiamonds: 'ton.diamonds'
} as const;
export type NftItemApprovedByEnum = typeof NftItemApprovedByEnum[keyof typeof NftItemApprovedByEnum];


/**
 * Check if a given object implements the NftItem interface.
 */
export function instanceOfNftItem(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "index" in value;
    isInstance = isInstance && "verified" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "approvedBy" in value;

    return isInstance;
}

export function NftItemFromJSON(json: any): NftItem {
    return NftItemFromJSONTyped(json, false);
}

export function NftItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'index': json['index'],
        'owner': !exists(json, 'owner') ? undefined : AccountAddressFromJSON(json['owner']),
        'collection': !exists(json, 'collection') ? undefined : NftItemCollectionFromJSON(json['collection']),
        'verified': json['verified'],
        'metadata': json['metadata'],
        'sale': !exists(json, 'sale') ? undefined : SaleFromJSON(json['sale']),
        'previews': !exists(json, 'previews') ? undefined : ((json['previews'] as Array<any>).map(ImagePreviewFromJSON)),
        'dns': !exists(json, 'dns') ? undefined : json['dns'],
        'approvedBy': json['approved_by'],
    };
}

export function NftItemToJSON(value?: NftItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'index': value.index,
        'owner': AccountAddressToJSON(value.owner),
        'collection': NftItemCollectionToJSON(value.collection),
        'verified': value.verified,
        'metadata': value.metadata,
        'sale': SaleToJSON(value.sale),
        'previews': value.previews === undefined ? undefined : ((value.previews as Array<any>).map(ImagePreviewToJSON)),
        'dns': value.dns,
        'approved_by': value.approvedBy,
    };
}

