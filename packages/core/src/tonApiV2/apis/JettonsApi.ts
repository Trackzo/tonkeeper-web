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


import * as runtime from '../runtime';
import type {
  Event,
  GetBlockchainBlockDefaultResponse,
  JettonHolders,
  JettonInfo,
  Jettons,
} from '../models/index';
import {
    EventFromJSON,
    EventToJSON,
    GetBlockchainBlockDefaultResponseFromJSON,
    GetBlockchainBlockDefaultResponseToJSON,
    JettonHoldersFromJSON,
    JettonHoldersToJSON,
    JettonInfoFromJSON,
    JettonInfoToJSON,
    JettonsFromJSON,
    JettonsToJSON,
} from '../models/index';

export interface GetJettonHoldersRequest {
    accountId: string;
    limit?: number;
    offset?: number;
}

export interface GetJettonInfoRequest {
    accountId: string;
}

export interface GetJettonsRequest {
    limit?: number;
    offset?: number;
}

export interface GetJettonsEventsRequest {
    eventId: string;
    acceptLanguage?: string;
}

/**
 * JettonsApi - interface
 * 
 * @export
 * @interface JettonsApiInterface
 */
export interface JettonsApiInterface {
    /**
     * Get jetton\'s holders
     * @param {string} accountId account ID
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonsApiInterface
     */
    getJettonHoldersRaw(requestParameters: GetJettonHoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonHolders>>;

    /**
     * Get jetton\'s holders
     */
    getJettonHolders(requestParameters: GetJettonHoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonHolders>;

    /**
     * Get jetton metadata by jetton master address
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonsApiInterface
     */
    getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>>;

    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo>;

    /**
     * Get a list of all indexed jetton masters in the blockchain.
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonsApiInterface
     */
    getJettonsRaw(requestParameters: GetJettonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Jettons>>;

    /**
     * Get a list of all indexed jetton masters in the blockchain.
     */
    getJettons(requestParameters: GetJettonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Jettons>;

    /**
     * Get only jetton transfers in the event
     * @param {string} eventId event ID or transaction hash in hex (without 0x) or base64url format
     * @param {string} [acceptLanguage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonsApiInterface
     */
    getJettonsEventsRaw(requestParameters: GetJettonsEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>>;

    /**
     * Get only jetton transfers in the event
     */
    getJettonsEvents(requestParameters: GetJettonsEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event>;

}

/**
 * 
 */
export class JettonsApi extends runtime.BaseAPI implements JettonsApiInterface {

    /**
     * Get jetton\'s holders
     */
    async getJettonHoldersRaw(requestParameters: GetJettonHoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonHolders>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getJettonHolders.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/jettons/{account_id}/holders`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JettonHoldersFromJSON(jsonValue));
    }

    /**
     * Get jetton\'s holders
     */
    async getJettonHolders(requestParameters: GetJettonHoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonHolders> {
        const response = await this.getJettonHoldersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get jetton metadata by jetton master address
     */
    async getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getJettonInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/jettons/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JettonInfoFromJSON(jsonValue));
    }

    /**
     * Get jetton metadata by jetton master address
     */
    async getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo> {
        const response = await this.getJettonInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of all indexed jetton masters in the blockchain.
     */
    async getJettonsRaw(requestParameters: GetJettonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Jettons>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/jettons`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JettonsFromJSON(jsonValue));
    }

    /**
     * Get a list of all indexed jetton masters in the blockchain.
     */
    async getJettons(requestParameters: GetJettonsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Jettons> {
        const response = await this.getJettonsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get only jetton transfers in the event
     */
    async getJettonsEventsRaw(requestParameters: GetJettonsEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling getJettonsEvents.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/v2/events/{event_id}/jettons`.replace(`{${"event_id"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EventFromJSON(jsonValue));
    }

    /**
     * Get only jetton transfers in the event
     */
    async getJettonsEvents(requestParameters: GetJettonsEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event> {
        const response = await this.getJettonsEventsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
