
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class EstadoPasajero extends Model {}

EstadoPasajero.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING(45),
}, {
    sequelize, 
    modelName: "estadoPasajero",
    freezeTableName: true
});

module.exports = EstadoPasajero;