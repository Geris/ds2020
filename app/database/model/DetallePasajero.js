
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class DetallePasajero extends Model {}

DetallePasajero.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: DataTypes.STRING(45),
}, {
    sequelize, 
    modelName: "detallePasajero",
    freezeTableName: true
});

module.exports = DetallePasajero;