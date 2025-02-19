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
import type { BlockchainConfig10 } from './BlockchainConfig10';
import {
    BlockchainConfig10FromJSON,
    BlockchainConfig10FromJSONTyped,
    BlockchainConfig10ToJSON,
} from './BlockchainConfig10';
import type { BlockchainConfig11 } from './BlockchainConfig11';
import {
    BlockchainConfig11FromJSON,
    BlockchainConfig11FromJSONTyped,
    BlockchainConfig11ToJSON,
} from './BlockchainConfig11';
import type { BlockchainConfig12 } from './BlockchainConfig12';
import {
    BlockchainConfig12FromJSON,
    BlockchainConfig12FromJSONTyped,
    BlockchainConfig12ToJSON,
} from './BlockchainConfig12';
import type { BlockchainConfig13 } from './BlockchainConfig13';
import {
    BlockchainConfig13FromJSON,
    BlockchainConfig13FromJSONTyped,
    BlockchainConfig13ToJSON,
} from './BlockchainConfig13';
import type { BlockchainConfig14 } from './BlockchainConfig14';
import {
    BlockchainConfig14FromJSON,
    BlockchainConfig14FromJSONTyped,
    BlockchainConfig14ToJSON,
} from './BlockchainConfig14';
import type { BlockchainConfig15 } from './BlockchainConfig15';
import {
    BlockchainConfig15FromJSON,
    BlockchainConfig15FromJSONTyped,
    BlockchainConfig15ToJSON,
} from './BlockchainConfig15';
import type { BlockchainConfig16 } from './BlockchainConfig16';
import {
    BlockchainConfig16FromJSON,
    BlockchainConfig16FromJSONTyped,
    BlockchainConfig16ToJSON,
} from './BlockchainConfig16';
import type { BlockchainConfig17 } from './BlockchainConfig17';
import {
    BlockchainConfig17FromJSON,
    BlockchainConfig17FromJSONTyped,
    BlockchainConfig17ToJSON,
} from './BlockchainConfig17';
import type { BlockchainConfig18 } from './BlockchainConfig18';
import {
    BlockchainConfig18FromJSON,
    BlockchainConfig18FromJSONTyped,
    BlockchainConfig18ToJSON,
} from './BlockchainConfig18';
import type { BlockchainConfig20 } from './BlockchainConfig20';
import {
    BlockchainConfig20FromJSON,
    BlockchainConfig20FromJSONTyped,
    BlockchainConfig20ToJSON,
} from './BlockchainConfig20';
import type { BlockchainConfig21 } from './BlockchainConfig21';
import {
    BlockchainConfig21FromJSON,
    BlockchainConfig21FromJSONTyped,
    BlockchainConfig21ToJSON,
} from './BlockchainConfig21';
import type { BlockchainConfig22 } from './BlockchainConfig22';
import {
    BlockchainConfig22FromJSON,
    BlockchainConfig22FromJSONTyped,
    BlockchainConfig22ToJSON,
} from './BlockchainConfig22';
import type { BlockchainConfig23 } from './BlockchainConfig23';
import {
    BlockchainConfig23FromJSON,
    BlockchainConfig23FromJSONTyped,
    BlockchainConfig23ToJSON,
} from './BlockchainConfig23';
import type { BlockchainConfig24 } from './BlockchainConfig24';
import {
    BlockchainConfig24FromJSON,
    BlockchainConfig24FromJSONTyped,
    BlockchainConfig24ToJSON,
} from './BlockchainConfig24';
import type { BlockchainConfig25 } from './BlockchainConfig25';
import {
    BlockchainConfig25FromJSON,
    BlockchainConfig25FromJSONTyped,
    BlockchainConfig25ToJSON,
} from './BlockchainConfig25';
import type { BlockchainConfig28 } from './BlockchainConfig28';
import {
    BlockchainConfig28FromJSON,
    BlockchainConfig28FromJSONTyped,
    BlockchainConfig28ToJSON,
} from './BlockchainConfig28';
import type { BlockchainConfig29 } from './BlockchainConfig29';
import {
    BlockchainConfig29FromJSON,
    BlockchainConfig29FromJSONTyped,
    BlockchainConfig29ToJSON,
} from './BlockchainConfig29';
import type { BlockchainConfig31 } from './BlockchainConfig31';
import {
    BlockchainConfig31FromJSON,
    BlockchainConfig31FromJSONTyped,
    BlockchainConfig31ToJSON,
} from './BlockchainConfig31';
import type { BlockchainConfig40 } from './BlockchainConfig40';
import {
    BlockchainConfig40FromJSON,
    BlockchainConfig40FromJSONTyped,
    BlockchainConfig40ToJSON,
} from './BlockchainConfig40';
import type { BlockchainConfig43 } from './BlockchainConfig43';
import {
    BlockchainConfig43FromJSON,
    BlockchainConfig43FromJSONTyped,
    BlockchainConfig43ToJSON,
} from './BlockchainConfig43';
import type { BlockchainConfig44 } from './BlockchainConfig44';
import {
    BlockchainConfig44FromJSON,
    BlockchainConfig44FromJSONTyped,
    BlockchainConfig44ToJSON,
} from './BlockchainConfig44';
import type { BlockchainConfig5 } from './BlockchainConfig5';
import {
    BlockchainConfig5FromJSON,
    BlockchainConfig5FromJSONTyped,
    BlockchainConfig5ToJSON,
} from './BlockchainConfig5';
import type { BlockchainConfig6 } from './BlockchainConfig6';
import {
    BlockchainConfig6FromJSON,
    BlockchainConfig6FromJSONTyped,
    BlockchainConfig6ToJSON,
} from './BlockchainConfig6';
import type { BlockchainConfig7 } from './BlockchainConfig7';
import {
    BlockchainConfig7FromJSON,
    BlockchainConfig7FromJSONTyped,
    BlockchainConfig7ToJSON,
} from './BlockchainConfig7';
import type { BlockchainConfig71 } from './BlockchainConfig71';
import {
    BlockchainConfig71FromJSON,
    BlockchainConfig71FromJSONTyped,
    BlockchainConfig71ToJSON,
} from './BlockchainConfig71';
import type { BlockchainConfig79 } from './BlockchainConfig79';
import {
    BlockchainConfig79FromJSON,
    BlockchainConfig79FromJSONTyped,
    BlockchainConfig79ToJSON,
} from './BlockchainConfig79';
import type { BlockchainConfig8 } from './BlockchainConfig8';
import {
    BlockchainConfig8FromJSON,
    BlockchainConfig8FromJSONTyped,
    BlockchainConfig8ToJSON,
} from './BlockchainConfig8';
import type { BlockchainConfig9 } from './BlockchainConfig9';
import {
    BlockchainConfig9FromJSON,
    BlockchainConfig9FromJSONTyped,
    BlockchainConfig9ToJSON,
} from './BlockchainConfig9';
import type { ValidatorsSet } from './ValidatorsSet';
import {
    ValidatorsSetFromJSON,
    ValidatorsSetFromJSONTyped,
    ValidatorsSetToJSON,
} from './ValidatorsSet';

/**
 * 
 * @export
 * @interface BlockchainConfig
 */
export interface BlockchainConfig {
    /**
     * config boc in base64 format
     * @type {string}
     * @memberof BlockchainConfig
     */
    raw: string;
    /**
     * config address
     * @type {string}
     * @memberof BlockchainConfig
     */
    _0: string;
    /**
     * elector address
     * @type {string}
     * @memberof BlockchainConfig
     */
    _1: string;
    /**
     * minter address
     * @type {string}
     * @memberof BlockchainConfig
     */
    _2: string;
    /**
     * The address of the transaction fee collector.
     * @type {string}
     * @memberof BlockchainConfig
     */
    _3?: string;
    /**
     * dns root address
     * @type {string}
     * @memberof BlockchainConfig
     */
    _4: string;
    /**
     * 
     * @type {BlockchainConfig5}
     * @memberof BlockchainConfig
     */
    _5?: BlockchainConfig5;
    /**
     * 
     * @type {BlockchainConfig6}
     * @memberof BlockchainConfig
     */
    _6?: BlockchainConfig6;
    /**
     * 
     * @type {BlockchainConfig7}
     * @memberof BlockchainConfig
     */
    _7?: BlockchainConfig7;
    /**
     * 
     * @type {BlockchainConfig8}
     * @memberof BlockchainConfig
     */
    _8?: BlockchainConfig8;
    /**
     * 
     * @type {BlockchainConfig9}
     * @memberof BlockchainConfig
     */
    _9?: BlockchainConfig9;
    /**
     * 
     * @type {BlockchainConfig10}
     * @memberof BlockchainConfig
     */
    _10?: BlockchainConfig10;
    /**
     * 
     * @type {BlockchainConfig11}
     * @memberof BlockchainConfig
     */
    _11?: BlockchainConfig11;
    /**
     * 
     * @type {BlockchainConfig12}
     * @memberof BlockchainConfig
     */
    _12?: BlockchainConfig12;
    /**
     * 
     * @type {BlockchainConfig13}
     * @memberof BlockchainConfig
     */
    _13?: BlockchainConfig13;
    /**
     * 
     * @type {BlockchainConfig14}
     * @memberof BlockchainConfig
     */
    _14?: BlockchainConfig14;
    /**
     * 
     * @type {BlockchainConfig15}
     * @memberof BlockchainConfig
     */
    _15?: BlockchainConfig15;
    /**
     * 
     * @type {BlockchainConfig16}
     * @memberof BlockchainConfig
     */
    _16?: BlockchainConfig16;
    /**
     * 
     * @type {BlockchainConfig17}
     * @memberof BlockchainConfig
     */
    _17?: BlockchainConfig17;
    /**
     * 
     * @type {BlockchainConfig18}
     * @memberof BlockchainConfig
     */
    _18?: BlockchainConfig18;
    /**
     * 
     * @type {BlockchainConfig20}
     * @memberof BlockchainConfig
     */
    _20?: BlockchainConfig20;
    /**
     * 
     * @type {BlockchainConfig21}
     * @memberof BlockchainConfig
     */
    _21?: BlockchainConfig21;
    /**
     * 
     * @type {BlockchainConfig22}
     * @memberof BlockchainConfig
     */
    _22?: BlockchainConfig22;
    /**
     * 
     * @type {BlockchainConfig23}
     * @memberof BlockchainConfig
     */
    _23?: BlockchainConfig23;
    /**
     * 
     * @type {BlockchainConfig24}
     * @memberof BlockchainConfig
     */
    _24?: BlockchainConfig24;
    /**
     * 
     * @type {BlockchainConfig25}
     * @memberof BlockchainConfig
     */
    _25?: BlockchainConfig25;
    /**
     * 
     * @type {BlockchainConfig28}
     * @memberof BlockchainConfig
     */
    _28?: BlockchainConfig28;
    /**
     * 
     * @type {BlockchainConfig29}
     * @memberof BlockchainConfig
     */
    _29?: BlockchainConfig29;
    /**
     * 
     * @type {BlockchainConfig31}
     * @memberof BlockchainConfig
     */
    _31?: BlockchainConfig31;
    /**
     * 
     * @type {ValidatorsSet}
     * @memberof BlockchainConfig
     */
    _32?: ValidatorsSet;
    /**
     * 
     * @type {ValidatorsSet}
     * @memberof BlockchainConfig
     */
    _33?: ValidatorsSet;
    /**
     * 
     * @type {ValidatorsSet}
     * @memberof BlockchainConfig
     */
    _34?: ValidatorsSet;
    /**
     * 
     * @type {ValidatorsSet}
     * @memberof BlockchainConfig
     */
    _35?: ValidatorsSet;
    /**
     * 
     * @type {ValidatorsSet}
     * @memberof BlockchainConfig
     */
    _36?: ValidatorsSet;
    /**
     * 
     * @type {ValidatorsSet}
     * @memberof BlockchainConfig
     */
    _37?: ValidatorsSet;
    /**
     * 
     * @type {BlockchainConfig40}
     * @memberof BlockchainConfig
     */
    _40?: BlockchainConfig40;
    /**
     * 
     * @type {BlockchainConfig43}
     * @memberof BlockchainConfig
     */
    _43?: BlockchainConfig43;
    /**
     * 
     * @type {BlockchainConfig44}
     * @memberof BlockchainConfig
     */
    _44: BlockchainConfig44;
    /**
     * 
     * @type {BlockchainConfig71}
     * @memberof BlockchainConfig
     */
    _71?: BlockchainConfig71;
    /**
     * 
     * @type {BlockchainConfig71}
     * @memberof BlockchainConfig
     */
    _72?: BlockchainConfig71;
    /**
     * 
     * @type {BlockchainConfig71}
     * @memberof BlockchainConfig
     */
    _73?: BlockchainConfig71;
    /**
     * 
     * @type {BlockchainConfig79}
     * @memberof BlockchainConfig
     */
    _79?: BlockchainConfig79;
    /**
     * 
     * @type {BlockchainConfig79}
     * @memberof BlockchainConfig
     */
    _81?: BlockchainConfig79;
    /**
     * 
     * @type {BlockchainConfig79}
     * @memberof BlockchainConfig
     */
    _82?: BlockchainConfig79;
}

/**
 * Check if a given object implements the BlockchainConfig interface.
 */
export function instanceOfBlockchainConfig(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "raw" in value;
    isInstance = isInstance && "_0" in value;
    isInstance = isInstance && "_1" in value;
    isInstance = isInstance && "_2" in value;
    isInstance = isInstance && "_4" in value;
    isInstance = isInstance && "_44" in value;

    return isInstance;
}

export function BlockchainConfigFromJSON(json: any): BlockchainConfig {
    return BlockchainConfigFromJSONTyped(json, false);
}

export function BlockchainConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockchainConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'raw': json['raw'],
        '_0': json['0'],
        '_1': json['1'],
        '_2': json['2'],
        '_3': !exists(json, '3') ? undefined : json['3'],
        '_4': json['4'],
        '_5': !exists(json, '5') ? undefined : BlockchainConfig5FromJSON(json['5']),
        '_6': !exists(json, '6') ? undefined : BlockchainConfig6FromJSON(json['6']),
        '_7': !exists(json, '7') ? undefined : BlockchainConfig7FromJSON(json['7']),
        '_8': !exists(json, '8') ? undefined : BlockchainConfig8FromJSON(json['8']),
        '_9': !exists(json, '9') ? undefined : BlockchainConfig9FromJSON(json['9']),
        '_10': !exists(json, '10') ? undefined : BlockchainConfig10FromJSON(json['10']),
        '_11': !exists(json, '11') ? undefined : BlockchainConfig11FromJSON(json['11']),
        '_12': !exists(json, '12') ? undefined : BlockchainConfig12FromJSON(json['12']),
        '_13': !exists(json, '13') ? undefined : BlockchainConfig13FromJSON(json['13']),
        '_14': !exists(json, '14') ? undefined : BlockchainConfig14FromJSON(json['14']),
        '_15': !exists(json, '15') ? undefined : BlockchainConfig15FromJSON(json['15']),
        '_16': !exists(json, '16') ? undefined : BlockchainConfig16FromJSON(json['16']),
        '_17': !exists(json, '17') ? undefined : BlockchainConfig17FromJSON(json['17']),
        '_18': !exists(json, '18') ? undefined : BlockchainConfig18FromJSON(json['18']),
        '_20': !exists(json, '20') ? undefined : BlockchainConfig20FromJSON(json['20']),
        '_21': !exists(json, '21') ? undefined : BlockchainConfig21FromJSON(json['21']),
        '_22': !exists(json, '22') ? undefined : BlockchainConfig22FromJSON(json['22']),
        '_23': !exists(json, '23') ? undefined : BlockchainConfig23FromJSON(json['23']),
        '_24': !exists(json, '24') ? undefined : BlockchainConfig24FromJSON(json['24']),
        '_25': !exists(json, '25') ? undefined : BlockchainConfig25FromJSON(json['25']),
        '_28': !exists(json, '28') ? undefined : BlockchainConfig28FromJSON(json['28']),
        '_29': !exists(json, '29') ? undefined : BlockchainConfig29FromJSON(json['29']),
        '_31': !exists(json, '31') ? undefined : BlockchainConfig31FromJSON(json['31']),
        '_32': !exists(json, '32') ? undefined : ValidatorsSetFromJSON(json['32']),
        '_33': !exists(json, '33') ? undefined : ValidatorsSetFromJSON(json['33']),
        '_34': !exists(json, '34') ? undefined : ValidatorsSetFromJSON(json['34']),
        '_35': !exists(json, '35') ? undefined : ValidatorsSetFromJSON(json['35']),
        '_36': !exists(json, '36') ? undefined : ValidatorsSetFromJSON(json['36']),
        '_37': !exists(json, '37') ? undefined : ValidatorsSetFromJSON(json['37']),
        '_40': !exists(json, '40') ? undefined : BlockchainConfig40FromJSON(json['40']),
        '_43': !exists(json, '43') ? undefined : BlockchainConfig43FromJSON(json['43']),
        '_44': BlockchainConfig44FromJSON(json['44']),
        '_71': !exists(json, '71') ? undefined : BlockchainConfig71FromJSON(json['71']),
        '_72': !exists(json, '72') ? undefined : BlockchainConfig71FromJSON(json['72']),
        '_73': !exists(json, '73') ? undefined : BlockchainConfig71FromJSON(json['73']),
        '_79': !exists(json, '79') ? undefined : BlockchainConfig79FromJSON(json['79']),
        '_81': !exists(json, '81') ? undefined : BlockchainConfig79FromJSON(json['81']),
        '_82': !exists(json, '82') ? undefined : BlockchainConfig79FromJSON(json['82']),
    };
}

export function BlockchainConfigToJSON(value?: BlockchainConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'raw': value.raw,
        '0': value._0,
        '1': value._1,
        '2': value._2,
        '3': value._3,
        '4': value._4,
        '5': BlockchainConfig5ToJSON(value._5),
        '6': BlockchainConfig6ToJSON(value._6),
        '7': BlockchainConfig7ToJSON(value._7),
        '8': BlockchainConfig8ToJSON(value._8),
        '9': BlockchainConfig9ToJSON(value._9),
        '10': BlockchainConfig10ToJSON(value._10),
        '11': BlockchainConfig11ToJSON(value._11),
        '12': BlockchainConfig12ToJSON(value._12),
        '13': BlockchainConfig13ToJSON(value._13),
        '14': BlockchainConfig14ToJSON(value._14),
        '15': BlockchainConfig15ToJSON(value._15),
        '16': BlockchainConfig16ToJSON(value._16),
        '17': BlockchainConfig17ToJSON(value._17),
        '18': BlockchainConfig18ToJSON(value._18),
        '20': BlockchainConfig20ToJSON(value._20),
        '21': BlockchainConfig21ToJSON(value._21),
        '22': BlockchainConfig22ToJSON(value._22),
        '23': BlockchainConfig23ToJSON(value._23),
        '24': BlockchainConfig24ToJSON(value._24),
        '25': BlockchainConfig25ToJSON(value._25),
        '28': BlockchainConfig28ToJSON(value._28),
        '29': BlockchainConfig29ToJSON(value._29),
        '31': BlockchainConfig31ToJSON(value._31),
        '32': ValidatorsSetToJSON(value._32),
        '33': ValidatorsSetToJSON(value._33),
        '34': ValidatorsSetToJSON(value._34),
        '35': ValidatorsSetToJSON(value._35),
        '36': ValidatorsSetToJSON(value._36),
        '37': ValidatorsSetToJSON(value._37),
        '40': BlockchainConfig40ToJSON(value._40),
        '43': BlockchainConfig43ToJSON(value._43),
        '44': BlockchainConfig44ToJSON(value._44),
        '71': BlockchainConfig71ToJSON(value._71),
        '72': BlockchainConfig71ToJSON(value._72),
        '73': BlockchainConfig71ToJSON(value._73),
        '79': BlockchainConfig79ToJSON(value._79),
        '81': BlockchainConfig79ToJSON(value._81),
        '82': BlockchainConfig79ToJSON(value._82),
    };
}

