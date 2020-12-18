'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('domicilio', [
      {
      id: '1',
      calle: 'San Pablo',
      numero: '635',
      localidadId:'1',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '2',
      calle: '5',
      numero: '822',
      localidadId:'3',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '3',
      calle: 'J.Gomez',
      numero: '1342',
      localidadId:'2',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('domicilio', null, {});
  }
};
