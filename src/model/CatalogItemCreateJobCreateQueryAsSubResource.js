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
import {CatalogItemCreateJobCreateQueryAsSubResourceAttributes} from './CatalogItemCreateJobCreateQueryAsSubResourceAttributes.js';

/**
 * The CatalogItemCreateJobCreateQueryAsSubResource model module.
 * @module model/CatalogItemCreateJobCreateQueryAsSubResource
 * @version 2022-10-17
 */
export class CatalogItemCreateJobCreateQueryAsSubResource {
  /**
   * Constructs a new <code>CatalogItemCreateJobCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogItemCreateJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogItemCreateJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogItemCreateJobCreateQueryAsSubResourceAttributes} 
   */
  constructor(type, attributes) {
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogItemCreateJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateJobCreateQueryAsSubResource} The populated <code>CatalogItemCreateJobCreateQueryAsSubResource</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CatalogItemCreateJobCreateQueryAsSubResource();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('attributes'))
        obj.attributes = CatalogItemCreateJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CatalogItemCreateJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-item-bulk-create-job"
   * @const
   */
  catalogItemBulkCreateJob: "catalog-item-bulk-create-job"
};
/**
 * @member {module:model/CatalogItemCreateJobCreateQueryAsSubResource.TypeEnum} type
 */
CatalogItemCreateJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogItemCreateJobCreateQueryAsSubResourceAttributes} attributes
 */
CatalogItemCreateJobCreateQueryAsSubResource.prototype.attributes = undefined;
