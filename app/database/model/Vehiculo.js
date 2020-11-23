
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class Vehiculo extends Model {}

Vehiculo.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    color: DataTypes.STRING(45),
    patente: DataTypes.STRING(45)
}, {
    sequelize, 
    modelName: "vehiculo",
    freezeTableName: true
});

module.exports = Vehiculo;