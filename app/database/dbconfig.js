const Sequelize = require('sequelize');
const connection = require('./dataConnection');

const sequelize = new Sequelize(
    connection.database.dbname,
    connection.database.username,
    connection.database.password, {
        host: connection.database.host,
        dialect: 'mysql'
    }
);

module.exports = sequelize;