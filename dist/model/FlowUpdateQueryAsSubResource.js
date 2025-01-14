"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlowUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _FlowUpdateQueryAsSubResourceAttributes = require("./FlowUpdateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The FlowUpdateQueryAsSubResource model module.
 * @module model/FlowUpdateQueryAsSubResource
 * @version 2022-10-17
 */
var FlowUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FlowUpdateQueryAsSubResource</code>.
   * @alias module:model/FlowUpdateQueryAsSubResource
   * @class
   * @param type {module:model/FlowUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/FlowUpdateQueryAsSubResourceAttributes} 
   */
  function FlowUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, FlowUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>FlowUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlowUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/FlowUpdateQueryAsSubResource} The populated <code>FlowUpdateQueryAsSubResource</code> instance.
   */
  _createClass(FlowUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FlowUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _FlowUpdateQueryAsSubResourceAttributes.FlowUpdateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return FlowUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.FlowUpdateQueryAsSubResource = FlowUpdateQueryAsSubResource;
FlowUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "flow"
   * @const
   */
  flow: "flow"
};
/**
 * @member {module:model/FlowUpdateQueryAsSubResource.TypeEnum} type
 */
FlowUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
FlowUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/FlowUpdateQueryAsSubResourceAttributes} attributes
 */
FlowUpdateQueryAsSubResource.prototype.attributes = undefined;