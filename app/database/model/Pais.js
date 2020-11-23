
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class Pais extends Model {}

Pais.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING(45),
}, {
    sequelize, 
    modelName: "pais",
    freezeTableName: true
});

module.exports = Pais;