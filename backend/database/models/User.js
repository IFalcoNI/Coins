const sequelize = require('../database')
const { DataTypes } = require('sequelize')

const user = sequelize.define('User', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    watchlist: {
        type: DataTypes.JSON,
        allowNull: true
    },
    portfolio: {
        type: DataTypes.JSON,
        allowNull: true
    },

},
    { tableName: "Users" })
module.exports = user;