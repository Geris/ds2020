
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');


class Viaje extends Model {}

Viaje.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: DataTypes.DATEONLY,
    horaInicio: DataTypes.STRING,
    horaFin: DataTypes.STRING,
    precioPorPersona: DataTypes.FLOAT,
    precioTotal: DataTypes.FLOAT,
    posibilidadEquipaje:DataTypes.BOOLEAN,
    observacion: DataTypes.STRING
}, {
    sequelize, 
    modelName: "viaje",
    freezeTableName: true
});

module.exports = Viaje;