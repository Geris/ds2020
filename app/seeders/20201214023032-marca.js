'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('marca', [
      {
      id: '1',
      nombre: 'Ford',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: '2',
        nombre: 'Volkwagen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
          id: '3',
          nombre: 'Fiat',
          createdAt: new Date(),
          updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('marca', null, {});
  }
};
