"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogVariantCreateJobCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogVariantCreateJobCreateQueryAsSubResourceAttributes = require("./CatalogVariantCreateJobCreateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogVariantCreateJobCreateQueryAsSubResource model module.
 * @module model/CatalogVariantCreateJobCreateQueryAsSubResource
 * @version 2022-10-17
 */
var CatalogVariantCreateJobCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogVariantCreateJobCreateQueryAsSubResource</code>.
   * @alias module:model/CatalogVariantCreateJobCreateQueryAsSubResource
   * @class
   * @param type {module:model/CatalogVariantCreateJobCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/CatalogVariantCreateJobCreateQueryAsSubResourceAttributes} 
   */
  function CatalogVariantCreateJobCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, CatalogVariantCreateJobCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>CatalogVariantCreateJobCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogVariantCreateJobCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/CatalogVariantCreateJobCreateQueryAsSubResource} The populated <code>CatalogVariantCreateJobCreateQueryAsSubResource</code> instance.
   */
  _createClass(CatalogVariantCreateJobCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogVariantCreateJobCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _CatalogVariantCreateJobCreateQueryAsSubResourceAttributes.CatalogVariantCreateJobCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return CatalogVariantCreateJobCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CatalogVariantCreateJobCreateQueryAsSubResource = CatalogVariantCreateJobCreateQueryAsSubResource;
CatalogVariantCreateJobCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "catalog-variant-bulk-create-job"
   * @const
   */
  catalogVariantBulkCreateJob: "catalog-variant-bulk-create-job"
};
/**
 * @member {module:model/CatalogVariantCreateJobCreateQueryAsSubResource.TypeEnum} type
 */
CatalogVariantCreateJobCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/CatalogVariantCreateJobCreateQueryAsSubResourceAttributes} attributes
 */
CatalogVariantCreateJobCreateQueryAsSubResource.prototype.attributes = undefined;