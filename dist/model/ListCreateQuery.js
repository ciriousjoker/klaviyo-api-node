"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _ListCreateQueryAsSubResource = require("./ListCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The ListCreateQuery model module.
 * @module model/ListCreateQuery
 * @version 2022-10-17
 */
var ListCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListCreateQuery</code>.
   * @alias module:model/ListCreateQuery
   * @class
   * @param data {module:model/ListCreateQueryAsSubResource} 
   */
  function ListCreateQuery(data) {
    _classCallCheck(this, ListCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>ListCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListCreateQuery} obj Optional instance to populate.
   * @return {module:model/ListCreateQuery} The populated <code>ListCreateQuery</code> instance.
   */
  _createClass(ListCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _ListCreateQueryAsSubResource.ListCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return ListCreateQuery;
}();
/**
 * @member {module:model/ListCreateQueryAsSubResource} data
 */
exports.ListCreateQuery = ListCreateQuery;
ListCreateQuery.prototype.data = undefined;