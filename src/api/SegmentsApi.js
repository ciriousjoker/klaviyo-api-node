/*
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * OpenAPI spec version: 2022-10-17
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient.js";

/**
* Segments service.
* @module api/SegmentsApi
* @version 2022-10-17
*/
export class SegmentsApi {
    apiClient

    /**
    * Constructs a new SegmentsApi. 
    * @alias module:api/SegmentsApi
    * @class
    * @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Get Segment
     * Get a segment with the given segment ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Segments Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsSegment For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getSegment = async (id, opts) => {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSegment");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'fields[segment]': this.apiClient.buildCollectionParam(opts['fieldsSegment'], 'csv')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Klaviyo-API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/segments/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Segment Profiles
     * Get all profiles within the given segment ID. Filter to request a subset of all profiles. Profiles can be filtered by &#x60;email&#x60;, &#x60;phone_number&#x60;, and &#x60;push_token&#x60; fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Profiles Read&#x60; &#x60;Segments Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} segmentId 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
     * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;email&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;phone_number&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;push_token&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;_kx&#x60;: &#x60;equals&#x60;
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#pagination
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getSegmentProfiles = async (segmentId, opts) => {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'segmentId' is set
      if (segmentId === undefined || segmentId === null) {
        throw new Error("Missing the required parameter 'segmentId' when calling getSegmentProfiles");
      }

      let pathParams = {
        'segment_id': segmentId
      };
      let queryParams = {
        'fields[profile]': this.apiClient.buildCollectionParam(opts['fieldsProfile'], 'csv'),'filter': opts['filter'],'page[cursor]': opts['pageCursor']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Klaviyo-API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/segments/{segment_id}/profiles/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Segment Relationships
     * Get all profile membership [relationships](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#relationships) for the given segment ID. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Profiles Read&#x60; &#x60;Segments Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {<&vendorExtensions.x-jsdoc-type>} relatedResource 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#pagination
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getSegmentRelationships = async (id, relatedResource, opts) => {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSegmentRelationships");
      }
      // verify the required parameter 'relatedResource' is set
      if (relatedResource === undefined || relatedResource === null) {
        throw new Error("Missing the required parameter 'relatedResource' when calling getSegmentRelationships");
      }

      let pathParams = {
        'id': id,'related_resource': relatedResource
      };
      let queryParams = {
        'page[cursor]': opts['pageCursor']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Klaviyo-API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/segments/{id}/relationships/{related_resource}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Segments
     * Get all segments in an account. Filter to request a subset of all segments. Segments can be filtered by &#x60;name&#x60;, &#x60;created&#x60;, and &#x60;updated&#x60; fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Segments Read&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsSegment For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
     * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;name&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;created&#x60;: &#x60;greater-than&#x60;&lt;br&gt;&#x60;updated&#x60;: &#x60;greater-than&#x60;
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#pagination
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getSegments = async (opts) => {

    opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'fields[segment]': this.apiClient.buildCollectionParam(opts['fieldsSegment'], 'csv'),'filter': opts['filter'],'page[cursor]': opts['pageCursor']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Klaviyo-API-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/segments/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Update Segment
     * Update the name of a segment with the given segment ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;Segments Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateSegment = async (body, id) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateSegment");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSegment");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['Klaviyo-API-Key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/segments/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

}