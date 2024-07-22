"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
require("dotenv/config");
/*

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

*/
var DB_USERNAME = "wrk34ej9wmxp1260";
var DB_PASSWORD = "w4gq2u9p5jwpsga8";
var DB_HOST = "blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
var DB_PORT = "3306";
var DB_NAME = "reb1qzvrgkogm15p";
var sequelize = new _sequelize.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  logging: console.log,
  dialectOptions: {
    connectTimeout: 60000 // Aumenta el tiempo de espera de conexión si es necesario
  }
});
sequelize.authenticate().then(function () {
  console.log('Conexión establecida exitosamente.');
})["catch"](function (err) {
  console.error('Error al conectar a la base de datos:', err);
});
var _default = exports["default"] = sequelize;