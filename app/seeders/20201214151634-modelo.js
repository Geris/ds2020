'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('modelo', [
      {
      id: '1',
      nombre: 'Fiesta',
      marcaId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: '2',
        nombre: 'Golf',
        marcaId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
          id: '3',
          nombre: 'Siena',
          marcaId: '3',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          id: '4',
          nombre: 'Cronos',
          marcaId: '3',
          createdAt: new Date(),
          updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('modelo', null, {});

  }
};
