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
import {ApiClient} from '../ApiClient.js';
import {OnsiteSubscriptionCreateQueryAsSubResource} from './OnsiteSubscriptionCreateQueryAsSubResource.js';

/**
 * The OnsiteSubscriptionCreateQuery model module.
 * @module model/OnsiteSubscriptionCreateQuery
 * @version 2022-10-17
 */
export class OnsiteSubscriptionCreateQuery {
  /**
   * Constructs a new <code>OnsiteSubscriptionCreateQuery</code>.
   * @alias module:model/OnsiteSubscriptionCreateQuery
   * @class
   * @param data {module:model/OnsiteSubscriptionCreateQueryAsSubResource} 
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Constructs a <code>OnsiteSubscriptionCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteSubscriptionCreateQuery} obj Optional instance to populate.
   * @return {module:model/OnsiteSubscriptionCreateQuery} The populated <code>OnsiteSubscriptionCreateQuery</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnsiteSubscriptionCreateQuery();
      if (data.hasOwnProperty('data'))
        obj.data = OnsiteSubscriptionCreateQueryAsSubResource.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OnsiteSubscriptionCreateQueryAsSubResource} data
 */
OnsiteSubscriptionCreateQuery.prototype.data = undefined;
