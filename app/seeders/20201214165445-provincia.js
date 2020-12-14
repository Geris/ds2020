'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('provincia', [
      {
      id: '1',
      nombre: 'Buenos Aires',
      paiId:'1',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '2',
      nombre: 'Cordoba',
      paiId:'1',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('provincia', null, {});
  }
};

