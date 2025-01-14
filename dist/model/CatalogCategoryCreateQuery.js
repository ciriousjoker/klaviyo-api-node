"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _CatalogCategoryCreateQueryAsSubResource = require("./CatalogCategoryCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogCategoryCreateQuery model module.
 * @module model/CatalogCategoryCreateQuery
 * @version 2022-10-17
 */
var CatalogCategoryCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryCreateQuery</code>.
   * @alias module:model/CatalogCategoryCreateQuery
   * @class
   * @param data {module:model/CatalogCategoryCreateQueryAsSubResource} 
   */
  function CatalogCategoryCreateQuery(data) {
    _classCallCheck(this, CatalogCategoryCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>CatalogCategoryCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryCreateQuery} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryCreateQuery} The populated <code>CatalogCategoryCreateQuery</code> instance.
   */
  _createClass(CatalogCategoryCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _CatalogCategoryCreateQueryAsSubResource.CatalogCategoryCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return CatalogCategoryCreateQuery;
}();
/**
 * @member {module:model/CatalogCategoryCreateQueryAsSubResource} data
 */
exports.CatalogCategoryCreateQuery = CatalogCategoryCreateQuery;
CatalogCategoryCreateQuery.prototype.data = undefined;