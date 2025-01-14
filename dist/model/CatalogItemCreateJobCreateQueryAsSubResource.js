"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemCreateJobCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemCreateJobCreateQueryAsSubResourceAttributes = require("./CatalogItemCreateJobCreateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogItemCreateJobCreateQueryAsSubResource model module.
 * @module model/CatalogItemCreateJobCreateQueryAsSubResource
 * @version 2022-10-17
 */
var CatalogItemCreateJobCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemCreateJobCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogItemCreateJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogItemCreateJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogItemCreateJobCreateQueryAsSubResourceAttributes} 
   */
  function CatalogItemCreateJobCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, CatalogItemCreateJobCreateQueryAsSubResource);
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
  _createClass(CatalogItemCreateJobCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemCreateJobCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogItemCreateJobCreateQueryAsSubResourceAttributes.CatalogItemCreateJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CatalogItemCreateJobCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CatalogItemCreateJobCreateQueryAsSubResource = CatalogItemCreateJobCreateQueryAsSubResource;
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