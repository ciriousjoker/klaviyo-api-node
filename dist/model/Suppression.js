"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Suppression = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The Suppression model module.
 * @module model/Suppression
 * @version 2022-10-17
 */
var Suppression = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Suppression</code>.
   * @alias module:model/Suppression
   * @class
   * @param email {String} 
   */
  function Suppression(email) {
    _classCallCheck(this, Suppression);
    this.email = email;
  }

  /**
   * Constructs a <code>Suppression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Suppression} obj Optional instance to populate.
   * @return {module:model/Suppression} The populated <code>Suppression</code> instance.
   */
  _createClass(Suppression, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Suppression();
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
      }
      return obj;
    }
  }]);
  return Suppression;
}();
/**
 * @member {String} email
 */
exports.Suppression = Suppression;
Suppression.prototype.email = undefined;