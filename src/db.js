require('dotenv').config();
const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST} = process.env;
const Sequelize = require('sequelize');
const {User} = require('../src/models/Users');

const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
     {
       host: DB_HOST,
       dialect: 'mysql'
     }
   );

User(sequelize);


   

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
    ...sequelize.models,
    sequelize,
} 