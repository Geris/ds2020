
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class PerfilConductorEstado extends Model {}

PerfilConductorEstado.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: DataTypes.STRING(45),
}, {
    sequelize, 
    modelName: "perfilConductorEstado",
    freezeTableName: true
});

module.exports = PerfilConductorEstado;