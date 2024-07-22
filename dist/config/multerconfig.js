"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// config/multerConfig.js

var uploadDirectory = _path["default"].resolve(__dirname, '../../uploads');
_fsExtra["default"].ensureDirSync(uploadDirectory);

// Configuración de Multer
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, uploadDirectory); // Directorio donde se almacenarán los archivos subidos
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + _path["default"].extname(file.originalname)); // Nombre del archivo con la fecha actual como prefijo
  }
});
console.log(storage.getDestination);
var upload = (0, _multer["default"])({
  storage: storage
});
var _default = exports["default"] = upload;