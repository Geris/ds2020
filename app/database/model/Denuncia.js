
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../dbconfig');

class Denuncia extends Model {}

Denuncia.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: DataTypes.STRING(45),
    fecha: DataTypes.DATEONLY
}, {
    sequelize, 
    modelName: "denuncia",
    freezeTableName: true
});

module.exports = Denuncia;