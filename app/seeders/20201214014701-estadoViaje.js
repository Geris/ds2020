'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('estadoViaje', [
      {
      id: '1',
      nombre: 'EN_CURSO',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: '2',
        nombre: 'FINALIZADO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        nombre: 'CANCELADO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('estadoViaje', null, {});
  }
};

