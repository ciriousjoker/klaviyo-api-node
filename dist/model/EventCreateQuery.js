"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventCreateQuery = void 0;
var _ApiClient = require("../ApiClient.js");
var _EventCreateQueryAsSubResource = require("./EventCreateQueryAsSubResource.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * The EventCreateQuery model module.
 * @module model/EventCreateQuery
 * @version 2022-10-17
 */
var EventCreateQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventCreateQuery</code>.
   * @alias module:model/EventCreateQuery
   * @class
   * @param data {module:model/EventCreateQueryAsSubResource} 
   */
  function EventCreateQuery(data) {
    _classCallCheck(this, EventCreateQuery);
    this.data = data;
  }

  /**
   * Constructs a <code>EventCreateQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventCreateQuery} obj Optional instance to populate.
   * @return {module:model/EventCreateQuery} The populated <code>EventCreateQuery</code> instance.
   */
  _createClass(EventCreateQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventCreateQuery();
        if (data.hasOwnProperty('data')) obj.data = _EventCreateQueryAsSubResource.EventCreateQueryAsSubResource.constructFromObject(data['data']);
      }
      return obj;
    }
  }]);
  return EventCreateQuery;
}();
/**
 * @member {module:model/EventCreateQueryAsSubResource} data
 */
exports.EventCreateQuery = EventCreateQuery;
EventCreateQuery.prototype.data = undefined;