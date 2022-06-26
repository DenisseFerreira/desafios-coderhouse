"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _infoRouter = _interopRequireDefault(require("./infoRouter"));

var _randomsRouter = _interopRequireDefault(require("./randomsRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use('/info', _infoRouter["default"]);
router.use('/randoms', _randomsRouter["default"]);
var _default = router;
exports["default"] = _default;