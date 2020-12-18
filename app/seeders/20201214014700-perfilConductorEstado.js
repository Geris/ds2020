'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('perfilConductorEstado', [
      {
      id: '1',
      nombre: 'EN_SERVICIO',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: '2',
        nombre: 'SUSPENDIDO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        nombre: 'DE_BAJA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('perfilConductorEstado', null, {});
  }
};
