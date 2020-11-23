
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class Persona extends Model {}

Persona.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dni: DataTypes.STRING(45),
    edad: DataTypes.STRING(45),
    nombre: DataTypes.STRING(45),
}, {
    sequelize, 
    modelName: "persona",
    freezeTableName: true
});

module.exports = Persona;