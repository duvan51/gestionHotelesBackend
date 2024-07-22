"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var sequelize = new _sequelize.Sequelize('gestionHotels', 'root', 'duvan1234789149', {
  host: 'localhost',
  port: 33060,
  dialect: 'mysql',
  logging: console.log
});
var _default = exports["default"] = sequelize;