"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricAggregateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _MetricAggregateQueryAsSubResource = require("./MetricAggregateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The MetricAggregateQuery model module.
 * @module model/MetricAggregateQuery
 * @version 2022-10-17
 */
var MetricAggregateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricAggregateQuery</code>.
   * @alias module:model/MetricAggregateQuery
   * @class
   * @param data {module:model/MetricAggregateQueryAsSubResource} 
   */
  function MetricAggregateQuery(data) {
    _classCallCheck(this, MetricAggregateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>MetricAggregateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricAggregateQuery} obj Optional instance to populate.
   * @return {module:model/MetricAggregateQuery} The populated <code>MetricAggregateQuery</code> instance.
   */
  _createClass(MetricAggregateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricAggregateQuery();
        if (data.hasOwnProperty('data')) obj.data = _MetricAggregateQueryAsSubResource.MetricAggregateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return MetricAggregateQuery;
}();
/**
 * @member {module:model/MetricAggregateQueryAsSubResource} data
 */
exports.MetricAggregateQuery = MetricAggregateQuery;
MetricAggregateQuery.prototype.data = undefined;