import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'gestionHotels',
    'root',
    'duvan1234789149',
    {
        host: 'localhost',
        port: 33060,
        dialect: 'mysql',
        logging: console.log,
    }
);
export default sequelize
