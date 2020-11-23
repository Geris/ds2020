
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class EstadoViaje extends Model {}

EstadoViaje.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING(45),
}, {
    sequelize, 
    modelName: "estadoViaje",
    freezeTableName: true
});

module.exports = EstadoViaje;