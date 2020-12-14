'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detallePasajero', [
      {
      id: '1',
      descripcion: 'Estoy en silla de ruedas',
      estadoPasajeroId: '1',
      viajeId:'2',
      personaId:'5',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '2',
      descripcion: 'Ninguno',
      estadoPasajeroId: '1',
      viajeId:'2',
      personaId:'6',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '3',
      descripcion: 'Nada',
      estadoPasajeroId: '1',
      viajeId:'2',
      personaId:'7',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '4',
      descripcion: 'Tengo muchisimo equipaje',
      estadoPasajeroId: '3',
      viajeId:'2',
      personaId:'8',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '5',
      descripcion: 'Los baches me revuelven el estomago',
      estadoPasajeroId: '2',
      viajeId:'2',
      personaId:'9',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        id: '2',
        descripcion: 'Ninguno',
        estadoPasajeroId: '1',
        viajeId:'1',
        personaId:'6',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        id: '3',
        descripcion: 'Llevo muchisimo equipaje, 2 bolsos grandes y 2 mochilas.',
        estadoPasajeroId: '1',
        viajeId:'1',
        personaId:'7',
        createdAt: new Date(),
        updatedAt: new Date()
        },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('detallePasajero', null, {});
  }
};

