"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _infoController = require("../controllers/infoController");

var router = (0, _express.Router)();
router.get('/', _infoController.infoProcess);
var _default = router;
exports["default"] = _default;