
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class Provincia extends Model {}

Provincia.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING(45),
}, {
    sequelize, 
    modelName: "provincia",
    freezeTableName: true
});

module.exports = Provincia;