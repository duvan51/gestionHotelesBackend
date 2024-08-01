const ReservaAlojamientoModel = (sequelize, DataTypes) => {
    const ReservaAlojamiento = sequelize.define('reservaAlojamiento',{
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
        price:{
            type: DataTypes.STRING,
            allowNull: false
        },
        daysReserva:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        birthCheking: {
            type: DataTypes.STRING,
            allowNull: false,
        },
          birthCheckout: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        alojamientoId:{
            type: DataTypes.STRING,
            allowNull: false
        }  
        
    },
    {
        timestamps: false,
        tableName: 'reservaAlojamiento', // Especifica el nombre de la tabla existente
    }
);
    //ReservaAlojamiento.sync({ force: true });

    return ReservaAlojamiento;

}

export default ReservaAlojamientoModel;