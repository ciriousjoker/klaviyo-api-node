"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilePartialUpdateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _ProfileCreateQueryAsSubResourceAttributes = require("./ProfileCreateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProfilePartialUpdateQueryAsSubResource model module.
 * @module model/ProfilePartialUpdateQueryAsSubResource
 * @version 2022-10-17
 */
var ProfilePartialUpdateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProfilePartialUpdateQueryAsSubResource</code>.
   * @alias module:model/ProfilePartialUpdateQueryAsSubResource
   * @class
   * @param type {module:model/ProfilePartialUpdateQueryAsSubResource.TypeEnum} 
   * @param id {String} 
   * @param attributes {module:model/ProfileCreateQueryAsSubResourceAttributes} 
   */
  function ProfilePartialUpdateQueryAsSubResource(type, id, attributes) {
    _classCallCheck(this, ProfilePartialUpdateQueryAsSubResource);
    this.type = type;
    this.id = id;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>ProfilePartialUpdateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfilePartialUpdateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/ProfilePartialUpdateQueryAsSubResource} The populated <code>ProfilePartialUpdateQueryAsSubResource</code> instance.
   */
  _createClass(ProfilePartialUpdateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProfilePartialUpdateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _ProfileCreateQueryAsSubResourceAttributes.ProfileCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return ProfilePartialUpdateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.ProfilePartialUpdateQueryAsSubResource = ProfilePartialUpdateQueryAsSubResource;
ProfilePartialUpdateQueryAsSubResource.TypeEnum = {
  /**
   * value: "profile"
   * @const
   */
  profile: "profile"
};
/**
 * @member {module:model/ProfilePartialUpdateQueryAsSubResource.TypeEnum} type
 */
ProfilePartialUpdateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {String} id
 */
ProfilePartialUpdateQueryAsSubResource.prototype.id = undefined;

/**
 * @member {module:model/ProfileCreateQueryAsSubResourceAttributes} attributes
 */
ProfilePartialUpdateQueryAsSubResource.prototype.attributes = undefined;