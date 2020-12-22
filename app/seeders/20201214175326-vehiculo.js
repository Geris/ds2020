'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vehiculo', [
      {
      id: '1',
      color: 'Rojo',
      patente: 'AB123CD',
      perfilConductorId:1,
      estadoVehiculoId:1,
      modeloId:1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '2',
      color: 'Bordo',
      patente: 'JE465RD',
      modeloId:2,
      perfilConductorId:2,
      estadoVehiculoId:1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '3',
      color: 'Rojo',
      patente: 'TX970ZA',
      perfilConductorId:3,
      estadoVehiculoId:1,
      modeloId:3,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        color: 'Gris',
        patente: 'FH642AA',
        perfilConductorId:1,
        estadoVehiculoId:2,
        modeloId:4,
        createdAt: new Date(),
        updatedAt: new Date()
        },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('vehiculo', null, {});
  }
};

