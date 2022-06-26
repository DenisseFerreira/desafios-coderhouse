"use strict";

require("dotenv/config");

var _server = _interopRequireDefault(require("./services/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var puerto = process.env.PORT || 8080;

_server["default"].listen(puerto, function () {
  return console.log("SERVER UP ON PORT ".concat(puerto));
});