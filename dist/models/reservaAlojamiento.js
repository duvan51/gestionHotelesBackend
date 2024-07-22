"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var ReservaAlojamientoModel = function ReservaAlojamientoModel(sequelize, DataTypes) {
  var ReservaAlojamiento = sequelize.define('reservaAlojamiento', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    reservaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "reserva",
        key: 'id'
      }
    },
    id_habitacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "typeOfHabitacion",
        key: 'id'
      }
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    daysReserva: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    alojamientoId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'reservaAlojamiento' // Especifica el nombre de la tabla existente
  });
  //ReservaAlojamiento.sync({ force: true });

  return ReservaAlojamiento;
};
var _default = exports["default"] = ReservaAlojamientoModel;