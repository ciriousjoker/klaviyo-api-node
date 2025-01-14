"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse4XXSource = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The InlineResponse4XXSource model module.
 * @module model/InlineResponse4XXSource
 * @version 2022-10-17
 */
var InlineResponse4XXSource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse4XXSource</code>.
   * @alias module:model/InlineResponse4XXSource
   * @class
   */
  function InlineResponse4XXSource() {
    _classCallCheck(this, InlineResponse4XXSource);
  }

  /**
   * Constructs a <code>InlineResponse4XXSource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4XXSource} obj Optional instance to populate.
   * @return {module:model/InlineResponse4XXSource} The populated <code>InlineResponse4XXSource</code> instance.
   */
  _createClass(InlineResponse4XXSource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse4XXSource();
        if (data.hasOwnProperty('pointer')) obj.pointer = _ApiClient.ApiClient.convertToType(data['pointer'], 'String');
        if (data.hasOwnProperty('parameter')) obj.parameter = _ApiClient.ApiClient.convertToType(data['parameter'], 'String');
      }
      return obj;
    }
  }]);
  return InlineResponse4XXSource;
}();
/**
 * @member {String} pointer
 */
exports.InlineResponse4XXSource = InlineResponse4XXSource;
InlineResponse4XXSource.prototype.pointer = undefined;

/**
 * @member {String} parameter
 */
InlineResponse4XXSource.prototype.parameter = undefined;