"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var typeOfHabitacionModel = function typeOfHabitacionModel(sequelize, DataTypes) {
  var TypeOfHabitacion = sequelize.define('TypeOfHabitacion', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    numberHabitacions: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nameOfHabitacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numbersCama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alojamientoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Alojamientos",
        key: 'id'
      }
    }
  }, {
    timestamps: false,
    tableName: 'typeOfHabitacion' // Especifica el nombre de la tabla existente
  });
  return TypeOfHabitacion;
};
var _default = exports["default"] = typeOfHabitacionModel;