"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var UserModel = function UserModel(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateBirth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    historySearch: {
      type: DataTypes.STRING,
      allowNull: false
    },
    identificacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.CHAR,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'User',
    // Especifica el nombre de la tabla existente
    timestamps: false // Si no quieres createdAt y updatedAt
  });
  return User;
};
var _default = exports["default"] = UserModel;