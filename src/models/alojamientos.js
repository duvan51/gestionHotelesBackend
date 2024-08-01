const AlojamientosModel = (sequelize, DataTypes) => {
    const Alojamientos = sequelize.define('Alojamientos',{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false
        },
        imagePrincipal:{
            type: DataTypes.STRING,
            allowNull: false
        },
        images:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ubicacion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        pais:{
            type: DataTypes.STRING,
            allowNull: false
        },
        
        departamento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numberPhone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        whattsap: {
            type: DataTypes.STRING,
            allowNull: false
        },
        habitaciones_type_id_fk:{
            type: DataTypes.INTEGER,
            allowNull: false

            
        },
        alojamientos_type_id_fk : {
            type: DataTypes.INTEGER,
            allowNull: false

       },
       
            
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: "User",
              key: 'id'
            }
        }

    },
    {
        timestamps: false,
        tableName: 'Alojamientos', // Especifica el nombre de la tabla existente
    }
);

    return Alojamientos;

}

export default AlojamientosModel;