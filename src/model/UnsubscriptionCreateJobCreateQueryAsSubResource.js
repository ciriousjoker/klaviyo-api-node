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
import {UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes} from './UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes.js';

/**
 * The UnsubscriptionCreateJobCreateQueryAsSubResource model module.
 * @module model/UnsubscriptionCreateJobCreateQueryAsSubResource
 * @version 2022-10-17
 */
export class UnsubscriptionCreateJobCreateQueryAsSubResource {
  /**
   * Constructs a new <code>UnsubscriptionCreateJobCreateQueryAsSubResource</code>.
   * @alias module:model/UnsubscriptionCreateJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/UnsubscriptionCreateJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>UnsubscriptionCreateJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsubscriptionCreateJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/UnsubscriptionCreateJobCreateQueryAsSubResource} The populated <code>UnsubscriptionCreateJobCreateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UnsubscriptionCreateJobCreateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
UnsubscriptionCreateJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "profile-unsubscription-bulk-create-job"
   * @const
   */
  profileUnsubscriptionBulkCreateJob: "profile-unsubscription-bulk-create-job"
};
/**
 * @member {module:model/UnsubscriptionCreateJobCreateQueryAsSubResource.TypeEnum} type
 */
UnsubscriptionCreateJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/UnsubscriptionCreateJobCreateQueryAsSubResourceAttributes} attributes
 */
UnsubscriptionCreateJobCreateQueryAsSubResource.prototype.attributes = undefined;
