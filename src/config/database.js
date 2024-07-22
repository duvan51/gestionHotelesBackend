import { Sequelize } from 'sequelize';
import 'dotenv/config'

/*

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

*/
const DB_USERNAME = "wrk34ej9wmxp1260"
const DB_PASSWORD = "w4gq2u9p5jwpsga8"
const DB_HOST = "blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"
const DB_PORT = "3306"
const DB_NAME = "reb1qzvrgkogm15p"



const sequelize = new Sequelize(
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'mysql',
        logging: console.log,
        dialectOptions: {
            connectTimeout: 60000 // Aumenta el tiempo de espera de conexión si es necesario
        }
    }
);


sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida exitosamente.');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });

export default sequelize
