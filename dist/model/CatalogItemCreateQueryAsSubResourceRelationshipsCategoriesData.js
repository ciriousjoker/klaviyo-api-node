"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData model module.
 * @module model/CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData
 * @version 2022-10-17
 */
var CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData</code>.
   * @alias module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData
   * @class
   * @param type {module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData.TypeEnum} 
   * @param id {String} 
   */
  function CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData(type, id) {
    _classCallCheck(this, CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData);
    this.type = type;
    this.id = id;
  }

  /**
   * Constructs a <code>CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData} obj Optional instance to populate.
   * @return {module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData} The populated <code>CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData</code> instance.
   */
  _createClass(CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
      }
      return obj;
    }
  }]);
  return CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData = CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData;
CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData.TypeEnum = {
  /**
   * value: "catalog-category"
   * @const
   */
  catalogCategory: "catalog-category"
};
/**
 * @member {module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData.TypeEnum} type
 */
CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData.prototype.type = undefined;

/**
 * @member {String} id
 */
CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData.prototype.id = undefined;