'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pais', [
      {
      id: '1',
      nombre: 'Argentina',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pais', null, {});
  }
};
