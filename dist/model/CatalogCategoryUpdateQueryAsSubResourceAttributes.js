"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogCategoryUpdateQueryAsSubResourceAttributes = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The CatalogCategoryUpdateQueryAsSubResourceAttributes model module.
 * @module model/CatalogCategoryUpdateQueryAsSubResourceAttributes
 * @version 2022-10-17
 */
var CatalogCategoryUpdateQueryAsSubResourceAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CatalogCategoryUpdateQueryAsSubResourceAttributes</code>.
   * @alias module:model/CatalogCategoryUpdateQueryAsSubResourceAttributes
   * @class
   */
  function CatalogCategoryUpdateQueryAsSubResourceAttributes() {
    _classCallCheck(this, CatalogCategoryUpdateQueryAsSubResourceAttributes);
  }

  /**
   * Constructs a <code>CatalogCategoryUpdateQueryAsSubResourceAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CatalogCategoryUpdateQueryAsSubResourceAttributes} obj Optional instance to populate.
   * @return {module:model/CatalogCategoryUpdateQueryAsSubResourceAttributes} The populated <code>CatalogCategoryUpdateQueryAsSubResourceAttributes</code> instance.
   */
  _createClass(CatalogCategoryUpdateQueryAsSubResourceAttributes, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CatalogCategoryUpdateQueryAsSubResourceAttributes();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
      }
      return obj;
    }
  }]);
  return CatalogCategoryUpdateQueryAsSubResourceAttributes;
}();
/**
 * @member {String} name
 */
exports.CatalogCategoryUpdateQueryAsSubResourceAttributes = CatalogCategoryUpdateQueryAsSubResourceAttributes;
CatalogCategoryUpdateQueryAsSubResourceAttributes.prototype.name = undefined;