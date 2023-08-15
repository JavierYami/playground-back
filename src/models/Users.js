const {DataTypes} = require('sequelize');

const User = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        is_active:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    })
}

module.exports = {
    User
}