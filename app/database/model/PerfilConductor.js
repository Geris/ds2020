

const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');


class PerfilConductor extends Model {}

PerfilConductor.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    contrasenia: DataTypes.STRING(45),
    imagen: DataTypes.STRING(45),
    mail: DataTypes.STRING(45)
}, {
    sequelize, 
    modelName: "perfilConductor",
    freezeTableName: true
});

module.exports = PerfilConductor;
