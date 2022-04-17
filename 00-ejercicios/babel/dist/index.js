"use strict";

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

for (var i = 0; i < 200; i++) {
  var miColor = new _colors["default"]();
  console.log("Pedido ".concat(i, ": ").concat(JSON.stringify(miColor.color)));
}