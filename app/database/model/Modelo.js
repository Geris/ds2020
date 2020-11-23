
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class Modelo extends Model {}

Modelo.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING(45)
}, {
    sequelize, 
    modelName: "modelo",
    freezeTableName: true
});

module.exports = Modelo;