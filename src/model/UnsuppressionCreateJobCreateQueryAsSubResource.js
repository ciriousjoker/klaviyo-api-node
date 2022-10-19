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
import {SuppressionCreateJobCreateQueryAsSubResourceAttributes} from './SuppressionCreateJobCreateQueryAsSubResourceAttributes.js';

/**
 * The UnsuppressionCreateJobCreateQueryAsSubResource model module.
 * @module model/UnsuppressionCreateJobCreateQueryAsSubResource
 * @version 2022-10-17
 */
export class UnsuppressionCreateJobCreateQueryAsSubResource {
  /**
   * Constructs a new <code>UnsuppressionCreateJobCreateQueryAsSubResource</code>.
   * @alias module:model/UnsuppressionCreateJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/UnsuppressionCreateJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>UnsuppressionCreateJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnsuppressionCreateJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/UnsuppressionCreateJobCreateQueryAsSubResource} The populated <code>UnsuppressionCreateJobCreateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UnsuppressionCreateJobCreateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = SuppressionCreateJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
UnsuppressionCreateJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "profile-unsuppression-bulk-create-job"
   * @const
   */
  profileUnsuppressionBulkCreateJob: "profile-unsuppression-bulk-create-job"
};
/**
 * @member {module:model/UnsuppressionCreateJobCreateQueryAsSubResource.TypeEnum} type
 */
UnsuppressionCreateJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/SuppressionCreateJobCreateQueryAsSubResourceAttributes} attributes
 */
UnsuppressionCreateJobCreateQueryAsSubResource.prototype.attributes = undefined;
