require('dotenv').config();
const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST} = process.env;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
     {
       host: DB_HOST,
       dialect: 'mysql'
     }
   );

// const authenticate = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }

// authenticate();

module.exports = {
    sequelize,
} 