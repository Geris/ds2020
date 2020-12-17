'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('estadoVehiculo', [
      {
      id: '1',
      nombre: 'ACTIVO',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: '2',
        nombre: 'INACTIVO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estadoVehiculo', null, {});
  }
};
