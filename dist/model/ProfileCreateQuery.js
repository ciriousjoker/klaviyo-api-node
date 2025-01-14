"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _ProfileCreateQueryAsSubResource = require("./ProfileCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ProfileCreateQuery model module.
 * @module model/ProfileCreateQuery
 * @version 2022-10-17
 */
var ProfileCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProfileCreateQuery</code>.
   * @alias module:model/ProfileCreateQuery
   * @class
   * @param data {module:model/ProfileCreateQueryAsSubResource} 
   */
  function ProfileCreateQuery(data) {
    _classCallCheck(this, ProfileCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>ProfileCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProfileCreateQuery} obj Optional instance to populate.
   * @return {module:model/ProfileCreateQuery} The populated <code>ProfileCreateQuery</code> instance.
   */
  _createClass(ProfileCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProfileCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _ProfileCreateQueryAsSubResource.ProfileCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return ProfileCreateQuery;
}();
/**
 * @member {module:model/ProfileCreateQueryAsSubResource} data
 */
exports.ProfileCreateQuery = ProfileCreateQuery;
ProfileCreateQuery.prototype.data = undefined;