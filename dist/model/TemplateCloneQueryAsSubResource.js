"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateCloneQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _TemplateCloneQueryAsSubResourceAttributes = require("./TemplateCloneQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The TemplateCloneQueryAsSubResource model module.
 * @module model/TemplateCloneQueryAsSubResource
 * @version 2022-10-17
 */
var TemplateCloneQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateCloneQueryAsSubResource</code>.
   * @alias module:model/TemplateCloneQueryAsSubResource
   * @class
   * @param type {module:model/TemplateCloneQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/TemplateCloneQueryAsSubResourceAttributes} 
   */
  function TemplateCloneQueryAsSubResource(type, attributes) {
    _classCallCheck(this, TemplateCloneQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>TemplateCloneQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateCloneQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/TemplateCloneQueryAsSubResource} The populated <code>TemplateCloneQueryAsSubResource</code> instance.
   */
  _createClass(TemplateCloneQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateCloneQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _TemplateCloneQueryAsSubResourceAttributes.TemplateCloneQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return TemplateCloneQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.TemplateCloneQueryAsSubResource = TemplateCloneQueryAsSubResource;
TemplateCloneQueryAsSubResource.TypeEnum = {
  /**
   * value: "template"
   * @const
   */
  template: "template"
};
/**
 * @member {module:model/TemplateCloneQueryAsSubResource.TypeEnum} type
 */
TemplateCloneQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/TemplateCloneQueryAsSubResourceAttributes} attributes
 */
TemplateCloneQueryAsSubResource.prototype.attributes = undefined;