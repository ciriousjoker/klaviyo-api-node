"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogItemUpdateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogItemUpdateQueryAsSubResource = require("./CatalogItemUpdateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogItemUpdateQuery model module.
 * @module model/CatalogItemUpdateQuery
 * @version 2022-10-17
 */
var CatalogItemUpdateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogItemUpdateQuery</code>.
   * @alias module:model/CatalogItemUpdateQuery
   * @class
   * @param data {module:model/CatalogItemUpdateQueryAsSubResource} 
   */
  function CatalogItemUpdateQuery(data) {
    _classCallCheck(this, CatalogItemUpdateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogItemUpdateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogItemUpdateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogItemUpdateQuery} The populated <code>CatalogItemUpdateQuery</code> instance.
   */
  _createClass(CatalogItemUpdateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogItemUpdateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogItemUpdateQueryAsSubResource.CatalogItemUpdateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogItemUpdateQuery;
}();
/**
 * @member {module:model/CatalogItemUpdateQueryAsSubResource} data
 */
exports.CatalogItemUpdateQuery = CatalogItemUpdateQuery;
CatalogItemUpdateQuery.prototype.data = undefined;