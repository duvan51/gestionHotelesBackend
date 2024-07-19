const ReservasModel = (sequelize, DataTypes) => {
  const Reserva = sequelize.define(
    "reserva",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      payment: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      birthCheking: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthCheckout: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      daysAlojamientos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      paymentTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "default status", // Proporciona un valor por defecto
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      alojamientoId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Alojamientos",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      tableName: "reserva", // Especifica el nombre de la tabla existente
    }
  );
  //Reserva.sync({ force: true });
  return Reserva;
};

export default ReservasModel;
