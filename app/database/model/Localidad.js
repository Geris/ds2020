
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class Localidad extends Model {}

Localidad.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING(45),
}, {
    sequelize, 
    modelName: "localidad",
    freezeTableName: true
});

module.exports = Localidad;