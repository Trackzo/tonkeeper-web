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
import type { ActionSimplePreview } from './ActionSimplePreview';
import {
    ActionSimplePreviewFromJSON,
    ActionSimplePreviewFromJSONTyped,
    ActionSimplePreviewToJSON,
} from './ActionSimplePreview';
import type { AuctionBidAction } from './AuctionBidAction';
import {
    AuctionBidActionFromJSON,
    AuctionBidActionFromJSONTyped,
    AuctionBidActionToJSON,
} from './AuctionBidAction';
import type { ContractDeployAction } from './ContractDeployAction';
import {
    ContractDeployActionFromJSON,
    ContractDeployActionFromJSONTyped,
    ContractDeployActionToJSON,
} from './ContractDeployAction';
import type { DepositStakeAction } from './DepositStakeAction';
import {
    DepositStakeActionFromJSON,
    DepositStakeActionFromJSONTyped,
    DepositStakeActionToJSON,
} from './DepositStakeAction';
import type { DomainRenewAction } from './DomainRenewAction';
import {
    DomainRenewActionFromJSON,
    DomainRenewActionFromJSONTyped,
    DomainRenewActionToJSON,
} from './DomainRenewAction';
import type { ElectionsDepositStakeAction } from './ElectionsDepositStakeAction';
import {
    ElectionsDepositStakeActionFromJSON,
    ElectionsDepositStakeActionFromJSONTyped,
    ElectionsDepositStakeActionToJSON,
} from './ElectionsDepositStakeAction';
import type { ElectionsRecoverStakeAction } from './ElectionsRecoverStakeAction';
import {
    ElectionsRecoverStakeActionFromJSON,
    ElectionsRecoverStakeActionFromJSONTyped,
    ElectionsRecoverStakeActionToJSON,
} from './ElectionsRecoverStakeAction';
import type { InscriptionMintAction } from './InscriptionMintAction';
import {
    InscriptionMintActionFromJSON,
    InscriptionMintActionFromJSONTyped,
    InscriptionMintActionToJSON,
} from './InscriptionMintAction';
import type { InscriptionTransferAction } from './InscriptionTransferAction';
import {
    InscriptionTransferActionFromJSON,
    InscriptionTransferActionFromJSONTyped,
    InscriptionTransferActionToJSON,
} from './InscriptionTransferAction';
import type { JettonBurnAction } from './JettonBurnAction';
import {
    JettonBurnActionFromJSON,
    JettonBurnActionFromJSONTyped,
    JettonBurnActionToJSON,
} from './JettonBurnAction';
import type { JettonMintAction } from './JettonMintAction';
import {
    JettonMintActionFromJSON,
    JettonMintActionFromJSONTyped,
    JettonMintActionToJSON,
} from './JettonMintAction';
import type { JettonSwapAction } from './JettonSwapAction';
import {
    JettonSwapActionFromJSON,
    JettonSwapActionFromJSONTyped,
    JettonSwapActionToJSON,
} from './JettonSwapAction';
import type { JettonTransferAction } from './JettonTransferAction';
import {
    JettonTransferActionFromJSON,
    JettonTransferActionFromJSONTyped,
    JettonTransferActionToJSON,
} from './JettonTransferAction';
import type { NftItemTransferAction } from './NftItemTransferAction';
import {
    NftItemTransferActionFromJSON,
    NftItemTransferActionFromJSONTyped,
    NftItemTransferActionToJSON,
} from './NftItemTransferAction';
import type { NftPurchaseAction } from './NftPurchaseAction';
import {
    NftPurchaseActionFromJSON,
    NftPurchaseActionFromJSONTyped,
    NftPurchaseActionToJSON,
} from './NftPurchaseAction';
import type { SmartContractAction } from './SmartContractAction';
import {
    SmartContractActionFromJSON,
    SmartContractActionFromJSONTyped,
    SmartContractActionToJSON,
} from './SmartContractAction';
import type { SubscriptionAction } from './SubscriptionAction';
import {
    SubscriptionActionFromJSON,
    SubscriptionActionFromJSONTyped,
    SubscriptionActionToJSON,
} from './SubscriptionAction';
import type { TonTransferAction } from './TonTransferAction';
import {
    TonTransferActionFromJSON,
    TonTransferActionFromJSONTyped,
    TonTransferActionToJSON,
} from './TonTransferAction';
import type { UnSubscriptionAction } from './UnSubscriptionAction';
import {
    UnSubscriptionActionFromJSON,
    UnSubscriptionActionFromJSONTyped,
    UnSubscriptionActionToJSON,
} from './UnSubscriptionAction';
import type { WithdrawStakeAction } from './WithdrawStakeAction';
import {
    WithdrawStakeActionFromJSON,
    WithdrawStakeActionFromJSONTyped,
    WithdrawStakeActionToJSON,
} from './WithdrawStakeAction';
import type { WithdrawStakeRequestAction } from './WithdrawStakeRequestAction';
import {
    WithdrawStakeRequestActionFromJSON,
    WithdrawStakeRequestActionFromJSONTyped,
    WithdrawStakeRequestActionToJSON,
} from './WithdrawStakeRequestAction';

/**
 * 
 * @export
 * @interface Action
 */
export interface Action {
    /**
     * 
     * @type {string}
     * @memberof Action
     */
    type: ActionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Action
     */
    status: ActionStatusEnum;
    /**
     * 
     * @type {TonTransferAction}
     * @memberof Action
     */
    tonTransfer?: TonTransferAction;
    /**
     * 
     * @type {ContractDeployAction}
     * @memberof Action
     */
    contractDeploy?: ContractDeployAction;
    /**
     * 
     * @type {JettonTransferAction}
     * @memberof Action
     */
    jettonTransfer?: JettonTransferAction;
    /**
     * 
     * @type {JettonBurnAction}
     * @memberof Action
     */
    jettonBurn?: JettonBurnAction;
    /**
     * 
     * @type {JettonMintAction}
     * @memberof Action
     */
    jettonMint?: JettonMintAction;
    /**
     * 
     * @type {NftItemTransferAction}
     * @memberof Action
     */
    nftItemTransfer?: NftItemTransferAction;
    /**
     * 
     * @type {SubscriptionAction}
     * @memberof Action
     */
    subscribe?: SubscriptionAction;
    /**
     * 
     * @type {UnSubscriptionAction}
     * @memberof Action
     */
    unSubscribe?: UnSubscriptionAction;
    /**
     * 
     * @type {AuctionBidAction}
     * @memberof Action
     */
    auctionBid?: AuctionBidAction;
    /**
     * 
     * @type {NftPurchaseAction}
     * @memberof Action
     */
    nftPurchase?: NftPurchaseAction;
    /**
     * 
     * @type {DepositStakeAction}
     * @memberof Action
     */
    depositStake?: DepositStakeAction;
    /**
     * 
     * @type {WithdrawStakeAction}
     * @memberof Action
     */
    withdrawStake?: WithdrawStakeAction;
    /**
     * 
     * @type {WithdrawStakeRequestAction}
     * @memberof Action
     */
    withdrawStakeRequest?: WithdrawStakeRequestAction;
    /**
     * 
     * @type {ElectionsDepositStakeAction}
     * @memberof Action
     */
    electionsDepositStake?: ElectionsDepositStakeAction;
    /**
     * 
     * @type {ElectionsRecoverStakeAction}
     * @memberof Action
     */
    electionsRecoverStake?: ElectionsRecoverStakeAction;
    /**
     * 
     * @type {JettonSwapAction}
     * @memberof Action
     */
    jettonSwap?: JettonSwapAction;
    /**
     * 
     * @type {SmartContractAction}
     * @memberof Action
     */
    smartContractExec?: SmartContractAction;
    /**
     * 
     * @type {DomainRenewAction}
     * @memberof Action
     */
    domainRenew?: DomainRenewAction;
    /**
     * 
     * @type {InscriptionTransferAction}
     * @memberof Action
     */
    inscriptionTransfer?: InscriptionTransferAction;
    /**
     * 
     * @type {InscriptionMintAction}
     * @memberof Action
     */
    inscriptionMint?: InscriptionMintAction;
    /**
     * 
     * @type {ActionSimplePreview}
     * @memberof Action
     */
    simplePreview: ActionSimplePreview;
}


/**
 * @export
 */
export const ActionTypeEnum = {
    TonTransfer: 'TonTransfer',
    JettonTransfer: 'JettonTransfer',
    JettonBurn: 'JettonBurn',
    JettonMint: 'JettonMint',
    NftItemTransfer: 'NftItemTransfer',
    ContractDeploy: 'ContractDeploy',
    Subscribe: 'Subscribe',
    UnSubscribe: 'UnSubscribe',
    AuctionBid: 'AuctionBid',
    NftPurchase: 'NftPurchase',
    DepositStake: 'DepositStake',
    WithdrawStake: 'WithdrawStake',
    WithdrawStakeRequest: 'WithdrawStakeRequest',
    JettonSwap: 'JettonSwap',
    SmartContractExec: 'SmartContractExec',
    ElectionsRecoverStake: 'ElectionsRecoverStake',
    ElectionsDepositStake: 'ElectionsDepositStake',
    DomainRenew: 'DomainRenew',
    InscriptionTransfer: 'InscriptionTransfer',
    InscriptionMint: 'InscriptionMint',
    Unknown: 'Unknown'
} as const;
export type ActionTypeEnum = typeof ActionTypeEnum[keyof typeof ActionTypeEnum];

/**
 * @export
 */
export const ActionStatusEnum = {
    Ok: 'ok',
    Failed: 'failed'
} as const;
export type ActionStatusEnum = typeof ActionStatusEnum[keyof typeof ActionStatusEnum];


/**
 * Check if a given object implements the Action interface.
 */
export function instanceOfAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "simplePreview" in value;

    return isInstance;
}

export function ActionFromJSON(json: any): Action {
    return ActionFromJSONTyped(json, false);
}

export function ActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Action {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'status': json['status'],
        'tonTransfer': !exists(json, 'TonTransfer') ? undefined : TonTransferActionFromJSON(json['TonTransfer']),
        'contractDeploy': !exists(json, 'ContractDeploy') ? undefined : ContractDeployActionFromJSON(json['ContractDeploy']),
        'jettonTransfer': !exists(json, 'JettonTransfer') ? undefined : JettonTransferActionFromJSON(json['JettonTransfer']),
        'jettonBurn': !exists(json, 'JettonBurn') ? undefined : JettonBurnActionFromJSON(json['JettonBurn']),
        'jettonMint': !exists(json, 'JettonMint') ? undefined : JettonMintActionFromJSON(json['JettonMint']),
        'nftItemTransfer': !exists(json, 'NftItemTransfer') ? undefined : NftItemTransferActionFromJSON(json['NftItemTransfer']),
        'subscribe': !exists(json, 'Subscribe') ? undefined : SubscriptionActionFromJSON(json['Subscribe']),
        'unSubscribe': !exists(json, 'UnSubscribe') ? undefined : UnSubscriptionActionFromJSON(json['UnSubscribe']),
        'auctionBid': !exists(json, 'AuctionBid') ? undefined : AuctionBidActionFromJSON(json['AuctionBid']),
        'nftPurchase': !exists(json, 'NftPurchase') ? undefined : NftPurchaseActionFromJSON(json['NftPurchase']),
        'depositStake': !exists(json, 'DepositStake') ? undefined : DepositStakeActionFromJSON(json['DepositStake']),
        'withdrawStake': !exists(json, 'WithdrawStake') ? undefined : WithdrawStakeActionFromJSON(json['WithdrawStake']),
        'withdrawStakeRequest': !exists(json, 'WithdrawStakeRequest') ? undefined : WithdrawStakeRequestActionFromJSON(json['WithdrawStakeRequest']),
        'electionsDepositStake': !exists(json, 'ElectionsDepositStake') ? undefined : ElectionsDepositStakeActionFromJSON(json['ElectionsDepositStake']),
        'electionsRecoverStake': !exists(json, 'ElectionsRecoverStake') ? undefined : ElectionsRecoverStakeActionFromJSON(json['ElectionsRecoverStake']),
        'jettonSwap': !exists(json, 'JettonSwap') ? undefined : JettonSwapActionFromJSON(json['JettonSwap']),
        'smartContractExec': !exists(json, 'SmartContractExec') ? undefined : SmartContractActionFromJSON(json['SmartContractExec']),
        'domainRenew': !exists(json, 'DomainRenew') ? undefined : DomainRenewActionFromJSON(json['DomainRenew']),
        'inscriptionTransfer': !exists(json, 'InscriptionTransfer') ? undefined : InscriptionTransferActionFromJSON(json['InscriptionTransfer']),
        'inscriptionMint': !exists(json, 'InscriptionMint') ? undefined : InscriptionMintActionFromJSON(json['InscriptionMint']),
        'simplePreview': ActionSimplePreviewFromJSON(json['simple_preview']),
    };
}

export function ActionToJSON(value?: Action | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'status': value.status,
        'TonTransfer': TonTransferActionToJSON(value.tonTransfer),
        'ContractDeploy': ContractDeployActionToJSON(value.contractDeploy),
        'JettonTransfer': JettonTransferActionToJSON(value.jettonTransfer),
        'JettonBurn': JettonBurnActionToJSON(value.jettonBurn),
        'JettonMint': JettonMintActionToJSON(value.jettonMint),
        'NftItemTransfer': NftItemTransferActionToJSON(value.nftItemTransfer),
        'Subscribe': SubscriptionActionToJSON(value.subscribe),
        'UnSubscribe': UnSubscriptionActionToJSON(value.unSubscribe),
        'AuctionBid': AuctionBidActionToJSON(value.auctionBid),
        'NftPurchase': NftPurchaseActionToJSON(value.nftPurchase),
        'DepositStake': DepositStakeActionToJSON(value.depositStake),
        'WithdrawStake': WithdrawStakeActionToJSON(value.withdrawStake),
        'WithdrawStakeRequest': WithdrawStakeRequestActionToJSON(value.withdrawStakeRequest),
        'ElectionsDepositStake': ElectionsDepositStakeActionToJSON(value.electionsDepositStake),
        'ElectionsRecoverStake': ElectionsRecoverStakeActionToJSON(value.electionsRecoverStake),
        'JettonSwap': JettonSwapActionToJSON(value.jettonSwap),
        'SmartContractExec': SmartContractActionToJSON(value.smartContractExec),
        'DomainRenew': DomainRenewActionToJSON(value.domainRenew),
        'InscriptionTransfer': InscriptionTransferActionToJSON(value.inscriptionTransfer),
        'InscriptionMint': InscriptionMintActionToJSON(value.inscriptionMint),
        'simple_preview': ActionSimplePreviewToJSON(value.simplePreview),
    };
}

