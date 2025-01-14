"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnsiteProfileMeta = void 0;
var _ApiClient = require("../ApiClient.js");
var _OnsiteProfileMetaIdentifiers = require("./OnsiteProfileMetaIdentifiers.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The OnsiteProfileMeta model module.
 * @module model/OnsiteProfileMeta
 * @version 2022-10-17
 */
var OnsiteProfileMeta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnsiteProfileMeta</code>.
   * @alias module:model/OnsiteProfileMeta
   * @class
   * @param identifiers {module:model/OnsiteProfileMetaIdentifiers} 
   */
  function OnsiteProfileMeta(identifiers) {
    _classCallCheck(this, OnsiteProfileMeta);
    this.identifiers = identifiers;
  }

  /**
   * Constructs a <code>OnsiteProfileMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnsiteProfileMeta} obj Optional instance to populate.
   * @return {module:model/OnsiteProfileMeta} The populated <code>OnsiteProfileMeta</code> instance.
   */
  _createClass(OnsiteProfileMeta, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnsiteProfileMeta();
        if (data.hasOwnProperty('identifiers')) obj.identifiers = _OnsiteProfileMetaIdentifiers.OnsiteProfileMetaIdentifiers.constructFromObject(data['identifiers']);
      }
      return obj;
    }
  }]);
  return OnsiteProfileMeta;
}();
/**
 * @member {module:model/OnsiteProfileMetaIdentifiers} identifiers
 */
exports.OnsiteProfileMeta = OnsiteProfileMeta;
OnsiteProfileMeta.prototype.identifiers = undefined;