"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemCategoryOp = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData = require("./CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogItemCategoryOp model module.
 * @module model/CatalogItemCategoryOp
 * @version 2022-10-17
 */
var CatalogItemCategoryOp = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemCategoryOp</code>.
   * @alias module:model/CatalogItemCategoryOp
   * @class
   * @param data {Array.<module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData>} 
   */
  function CatalogItemCategoryOp(data) {
    _classCallCheck(this, CatalogItemCategoryOp);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogItemCategoryOp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemCategoryOp} obj Optional instance to populate.
   * @return {module:model/CatalogItemCategoryOp} The populated <code>CatalogItemCategoryOp</code> instance.
   */
  _createClass(CatalogItemCategoryOp, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemCategoryOp();
        if (data.hasOwnProperty('data')) obj.data = _ApiClient.ApiClient.convertToType(data['data'], [_CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData.CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData]);
      }
      return obj;
    }
  }]);
  return CatalogItemCategoryOp;
}();
/**
 * @member {Array.<module:model/CatalogItemCreateQueryAsSubResourceRelationshipsCategoriesData>} data
 */
exports.CatalogItemCategoryOp = CatalogItemCategoryOp;
CatalogItemCategoryOp.prototype.data = undefined;