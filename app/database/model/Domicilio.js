
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class Domicilio extends Model {}

Domicilio.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    calle: DataTypes.STRING(45),
    numero: DataTypes.INTEGER
}, {
    sequelize, 
    modelName: "domicilio",
    freezeTableName: true
});

module.exports = Domicilio;