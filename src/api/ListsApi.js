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
* Lists service.
* @module api/ListsApi
* @version 2022-10-17
*/
export class ListsApi {
    apiClient

    /**
    * Constructs a new ListsApi. 
    * @alias module:api/ListsApi
    * @class
    * @param {ApiClient#instance} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Create List
     * Create a new list.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createList = async (body) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createList");
      }

      let pathParams = {
        
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
        '/api/lists/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Add Profile to List
     * Add a profile to a list with the given list ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60; &#x60;Profiles Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {<&vendorExtensions.x-jsdoc-type>} relatedResource 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createListRelationships = async (body, id, relatedResource) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createListRelationships");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createListRelationships");
      }
      // verify the required parameter 'relatedResource' is set
      if (relatedResource === undefined || relatedResource === null) {
        throw new Error("Missing the required parameter 'relatedResource' when calling createListRelationships");
      }

      let pathParams = {
        'id': id,'related_resource': relatedResource
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
        '/api/lists/{id}/relationships/{related_resource}/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Delete List
     * Delete a list with the given list ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteList = async (id) => {

    
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteList");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/api/lists/{id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Remove Profile from List
     * Remove a profile from a list with the given list ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60; &#x60;Profiles Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {<&vendorExtensions.x-jsdoc-type>} relatedResource 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteListRelationships = async (body, id, relatedResource) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteListRelationships");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteListRelationships");
      }
      // verify the required parameter 'relatedResource' is set
      if (relatedResource === undefined || relatedResource === null) {
        throw new Error("Missing the required parameter 'relatedResource' when calling deleteListRelationships");
      }

      let pathParams = {
        'id': id,'related_resource': relatedResource
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
        '/api/lists/{id}/relationships/{related_resource}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get List
     * Get a list with the given list ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsList For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getList = async (id, opts) => {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getList");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'fields[list]': this.apiClient.buildCollectionParam(opts['fieldsList'], 'csv')
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
        '/api/lists/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get List Profiles
     * Get all profiles within a list with the given list ID. Filter to request a subset of all profiles. Profiles can be filtered by &#x60;email&#x60;, &#x60;phone_number&#x60;, and &#x60;push_token&#x60; fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Read&#x60; &#x60;Profiles Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
     * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;email&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;phone_number&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;push_token&#x60;: &#x60;any&#x60;&lt;br&gt;&#x60;_kx&#x60;: &#x60;equals&#x60;
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#pagination
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getListProfiles = async (listId, opts) => {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getListProfiles");
      }

      let pathParams = {
        'list_id': listId
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
        '/api/lists/{list_id}/profiles/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get List Profile Relationships
     * Get profile membership [relationships](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#relationships) for a list with the given list ID. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Read&#x60; &#x60;Profiles Read&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @param {<&vendorExtensions.x-jsdoc-type>} relatedResource 
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#pagination
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getListRelationships = async (id, relatedResource, opts) => {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getListRelationships");
      }
      // verify the required parameter 'relatedResource' is set
      if (relatedResource === undefined || relatedResource === null) {
        throw new Error("Missing the required parameter 'relatedResource' when calling getListRelationships");
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
        '/api/lists/{id}/relationships/{related_resource}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Lists
     * Get all lists in an account. Filter to request a subset of all lists. Lists can be filtered by &#x60;id&#x60;, &#x60;name&#x60;, &#x60;created&#x60;, and &#x60;updated&#x60; fields. Returns a maximum of 10 results per page, which can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/v2022-10-17/reference/api_overview#pagination).&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Read&#x60;
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.fieldsList For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#sparse-fieldsets
     * @param {String} opts.filter For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;name&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;created&#x60;: &#x60;greater-than&#x60;&lt;br&gt;&#x60;updated&#x60;: &#x60;greater-than&#x60;
     * @param {String} opts.pageCursor For more information please visit https://developers.klaviyo.com/en/v2022-10-17/reference/api-overview#pagination
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    getLists = async (opts) => {

    opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'fields[list]': this.apiClient.buildCollectionParam(opts['fieldsList'], 'csv'),'filter': opts['filter'],'page[cursor]': opts['pageCursor']
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
        '/api/lists/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Update List
     * Update the name of a list with the given list ID.&lt;br&gt;&lt;br&gt;*Rate limits*:&lt;br&gt;Burst: &#x60;10/s&#x60;&lt;br&gt;Steady: &#x60;150/m&#x60;  **Scopes:** &#x60;List Write&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} body 
     * @param {<&vendorExtensions.x-jsdoc-type>} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateList = async (body, id) => {

    
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateList");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateList");
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
        '/api/lists/{id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

}