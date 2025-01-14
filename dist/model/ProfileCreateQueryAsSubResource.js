"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCreateQueryAsSubResource = void 0;
var _ApiClient = require("../ApiClient.js");
var _ProfileCreateQueryAsSubResourceAttributes = require("./ProfileCreateQueryAsSubResourceAttributes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProfileCreateQueryAsSubResource model module.
 * @module model/ProfileCreateQueryAsSubResource
 * @version 2022-10-17
 */
var ProfileCreateQueryAsSubResource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProfileCreateQueryAsSubResource</code>.
   * @alias module:model/ProfileCreateQueryAsSubResource
   * @class
   * @param type {module:model/ProfileCreateQueryAsSubResource.TypeEnum} 
   * @param attributes {module:model/ProfileCreateQueryAsSubResourceAttributes} 
   */
  function ProfileCreateQueryAsSubResource(type, attributes) {
    _classCallCheck(this, ProfileCreateQueryAsSubResource);
    this.type = type;
    this.attributes = attributes;
  }

  /**
   * Constructs a <code>ProfileCreateQueryAsSubResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileCreateQueryAsSubResource} obj Optional instance to populate.
   * @return {module:model/ProfileCreateQueryAsSubResource} The populated <code>ProfileCreateQueryAsSubResource</code> instance.
   */
  _createClass(ProfileCreateQueryAsSubResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProfileCreateQueryAsSubResource();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('attributes')) obj.attributes = _ProfileCreateQueryAsSubResourceAttributes.ProfileCreateQueryAsSubResourceAttributes.constructFromObject(data['attributes']);
      }
      return obj;
    }
  }]);
  return ProfileCreateQueryAsSubResource;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.ProfileCreateQueryAsSubResource = ProfileCreateQueryAsSubResource;
ProfileCreateQueryAsSubResource.TypeEnum = {
  /**
   * value: "profile"
   * @const
   */
  profile: "profile"
};
/**
 * @member {module:model/ProfileCreateQueryAsSubResource.TypeEnum} type
 */
ProfileCreateQueryAsSubResource.prototype.type = undefined;

/**
 * @member {module:model/ProfileCreateQueryAsSubResourceAttributes} attributes
 */
ProfileCreateQueryAsSubResource.prototype.attributes = undefined;