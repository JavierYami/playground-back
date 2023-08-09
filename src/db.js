require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'playgrounddb',
    'root',
    '',
     {
       host: 'localhost',
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