import Sequelize, { ForeignKeyConstraintError } from 'sequelize';
import sequelize from "../config/database";


import UserModel from './user.js';
import AlojamientosModel from './alojamientos.js';
import TypeOfHabitacionModel from './habitacions.js'
import ReservasModel from './reservas.js';
import ReservaAlojamientoModel from './reservaAlojamiento.js';
import BeneficiosModel from './beneficios.js';




// Define y sincroniza los modelos con la base de datos
const syncModels = async () => {
    try {
    //  await sequelize.sync( );
      await sequelize.sync({force: true} );  //=> esto es para  prdoduccion
      console.log('Base de datos sincronizada correctamente');
    } catch (error) {
      console.error('Error al sincronizar la base de datos:', error);
    }
  };
  
  // Llama a la función de sincronización al inicio de la aplicación
  syncModels();
  



const User = UserModel(sequelize, Sequelize.DataTypes);
const Alojamientos = AlojamientosModel(sequelize, Sequelize.DataTypes);
const TypeOfHabitacion = TypeOfHabitacionModel(sequelize, Sequelize.DataTypes);
const Reservas = ReservasModel(sequelize, Sequelize.DataTypes);
const ReservaAlojamiento = ReservaAlojamientoModel(sequelize, Sequelize.DataTypes);
const Beneficios = BeneficiosModel(sequelize, Sequelize.DataTypes);





TypeOfHabitacion.belongsToMany(Beneficios, { through: 'HabitacionBeneficios', as: 'beneficios' });
Beneficios.belongsToMany(TypeOfHabitacion, { through: 'HabitacionBeneficios', as: 'typeOfHabitacion' });


User.hasMany(Alojamientos, { foreignKey: 'userId', as: 'Alojamientos' });
Alojamientos.belongsTo(User, { foreignKey: 'userId', as: 'User' });

Alojamientos.hasMany(TypeOfHabitacion, { foreignKey: 'alojamientoId', as: 'typeOfHabitacion' });
TypeOfHabitacion.belongsTo(Alojamientos, { foreignKey: 'alojamientoId', as: 'Alojamientos' });

User.hasMany(Reservas, { foreignKey: 'userId', as: 'Reservas' });
Reservas.belongsTo(User, { foreignKey: 'userId', as: 'User' });

Alojamientos.hasMany(Reservas, { foreignKey: 'alojamientoId', as: 'reservas' });
Reservas.belongsTo(Alojamientos, { foreignKey: 'alojamientoId', as: 'Alojamientos' });

Reservas.hasMany(ReservaAlojamiento, { foreignKey: 'reservaId', as: 'ReservaAlojamientos' });
ReservaAlojamiento.belongsTo(Reservas, { foreignKey: 'reservaId', as: 'Reservas' });

ReservaAlojamiento.hasMany(TypeOfHabitacion, { foreignKey: 'id', as: 'typeOfHabitacion' });
TypeOfHabitacion.belongsTo(ReservaAlojamiento, { foreignKey: 'reservaAlojamientoId', as: 'ReservaAlojamiento' });

const db = {
    Sequelize,
    sequelize,
    User,
    Alojamientos,
    TypeOfHabitacion,
    Reservas,
    ReservaAlojamiento,
    Beneficios
};

export default db;