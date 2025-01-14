"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _TemplateUpdateQueryAsSubResourceAttributes = require("./TemplateUpdateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TemplateUpdateQueryAsSubResource model module.
 * @module model/TemplateUpdateQueryAsSubResource
 * @version 2022-10-17
 */
var TemplateUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateUpdateQueryAsSubResource</code>.
   * @alias module:model/TemplateUpdateQueryAsSubResource
   * @class
   * @param type {module:model/TemplateUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/TemplateUpdateQueryAsSubResourceAttributes} 
   */
  function TemplateUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, TemplateUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TemplateUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TemplateUpdateQueryAsSubResource} The populated <code>TemplateUpdateQueryAsSubResource</code> instance.
   */
  _createClass(TemplateUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _TemplateUpdateQueryAsSubResourceAttributes.TemplateUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return TemplateUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.TemplateUpdateQueryAsSubResource = TemplateUpdateQueryAsSubResource;
TemplateUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "template"
   * @const
   */
  template: "template"
};
/**
 * @member {module:model/TemplateUpdateQueryAsSubResource.TypeEnum} type
 */
TemplateUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
TemplateUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/TemplateUpdateQueryAsSubResourceAttributes} attributes
 */
TemplateUpdateQueryAsSubResource.prototype.attributes = undefined;