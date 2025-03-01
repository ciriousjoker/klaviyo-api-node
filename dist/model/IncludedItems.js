"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncludedItems = void 0;
var _ApiClient = require("../ApiClient.js");
var _IncludedItemsAttributes = require("./IncludedItemsAttributes.js");
var _IncludedVariantsLinks = require("./IncludedVariantsLinks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The IncludedItems model module.
 * @module model/IncludedItems
 * @version 2022-10-17
 */
var IncludedItems = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IncludedItems</code>.
   * @alias module:model/IncludedItems
   * @class
   * @param type {module:model/IncludedItems.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/IncludedItemsAttributes} 
   * @param links {module:model/IncludedVariantsLinks} 
   */
  function IncludedItems(type, id, attributes, links) {
    _classCallCheck(this, IncludedItems);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
    this.links = links;
  }

  /**
   * Constructs a <code>IncludedItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IncludedItems} obj Optional instance to populate.
   * @return {module:model/IncludedItems} The populated <code>IncludedItems</code> instance.
   */
  _createClass(IncludedItems, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IncludedItems();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _IncludedItemsAttributes.IncludedItemsAttributes.constructFromObject(data['attributes']);
        if (data.hasOwnProperty('links')) obj.links = _IncludedVariantsLinks.IncludedVariantsLinks.constructFromObject(data['links']);
      }
      return obj;
    }
  }]);
  return IncludedItems;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.IncludedItems = IncludedItems;
IncludedItems.TypeEnum = {
  /**
   * value: "catalog-item"
   * @const
   */
  catalogItem: "catalog-item"
};
/**
 * @member {module:model/IncludedItems.TypeEnum} type
 */
IncludedItems.prototype.type = undefined;

/**
 * @member {String} id
 */
IncludedItems.prototype.id = undefined;

/**
 * @member {module:model/IncludedItemsAttributes} attributes
 */
IncludedItems.prototype.attributes = undefined;

/**
 * @member {module:model/IncludedVariantsLinks} links
 */
IncludedItems.prototype.links = undefined;