require('dotenv').config();

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'playgrounddb',
    'root@localhost',
    '',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );

module.exports = {
    sequelize,
} 