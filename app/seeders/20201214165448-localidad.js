'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('localidad', [
      {
      id: '1',
      nombre: 'Burzaco',
      provinciumId:'1',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '2',
      nombre: 'Arroyito',
      provinciumId:'2',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '3',
      nombre: 'La Plata',
      provinciumId:'1',
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('localidad', null, {});
  }
};
