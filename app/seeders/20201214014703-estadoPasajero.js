'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('estadoPasajero', [
      {
      id: '1',
      nombre: 'ADMITIDO',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: '2',
        nombre: 'RECHAZADO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        nombre: 'CANCELADO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        nombre: 'PENDIENTE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estadoPasajero', null, {});
  }
};

