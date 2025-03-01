"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The MetricCreateQuery model module.
 * @module model/MetricCreateQuery
 * @version 2022-10-17
 */
var MetricCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricCreateQuery</code>.
   * @alias module:model/MetricCreateQuery
   * @class
   * @param name {String} 
   */
  function MetricCreateQuery(name) {
    _classCallCheck(this, MetricCreateQuery);
    this.name = name;
  }

  /**
   * Constructs a <code>MetricCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricCreateQuery} obj Optional instance to populate.
   * @return {module:model/MetricCreateQuery} The populated <code>MetricCreateQuery</code> instance.
   */
  _createClass(MetricCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricCreateQuery();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('service')) obj.service = _ApiClient.ApiClient.convertToType(data['service'], 'String');
      }
      return obj;
    }
  }]);
  return MetricCreateQuery;
}();
/**
 * @member {String} name
 */
exports.MetricCreateQuery = MetricCreateQuery;
MetricCreateQuery.prototype.name = undefined;

/**
 * @member {String} service
 */
MetricCreateQuery.prototype.service = undefined;