const BeneficiosModel = (sequelize, DataTypes) => {
    const Beneficios = sequelize.define('Beneficios',{
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
        iconoPrincipal:{
            type: DataTypes.STRING,
            allowNull: false
        },

    },
    
    {
        timestamps: false,
        tableName: 'beneficios', // Especifica el nombre de la tabla existente
    }
);
    //Beneficios.sync({ alter: true });
    Beneficios.sync({ force: true });

    return Beneficios;

}

export default BeneficiosModel;