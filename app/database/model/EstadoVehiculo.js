
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class EstadoVehiculo extends Model {}

EstadoVehiculo.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING(45),
}, {
    sequelize, 
    modelName: "estadoVehiculo",
    freezeTableName: true
});

module.exports = EstadoVehiculo;