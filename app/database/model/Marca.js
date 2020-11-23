
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class Marca extends Model {}

Marca.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING(45)
}, {
    sequelize, 
    modelName: "marca",
    freezeTableName: true
});

module.exports = Marca;