"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberRandoms = void 0;

var numberRandoms = function numberRandoms(c) {
  // console.log('en random');
  var salida = [];

  for (var i = 0; i < cantidad; i++) {
    salida.push(Math.random());
  }

  res.json({
    msg: "ok"
  });
};

exports.numberRandoms = numberRandoms;
process.on('message', function (cantidad) {
  if (!cantidad) numberRandoms();else numberRandoms(cantidad);
});