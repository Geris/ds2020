'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('persona', [
      {
      id: '1',
      dni: 41684688,
      edad: 21,
      nombre: 'Francisco Montero',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '2',
      dni: 42158669,
      edad: 20,
      nombre: 'Florencia Fried',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '3',
      dni: 41661844,
      edad: 21,
      nombre: 'Yoel Almiron',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '4',
      dni: 41484325,
      edad: 21,
      nombre: 'Ramiro Cerda',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '5',
      dni: 24684741,
      edad: 39,
      nombre: 'Ruben Guerrieri',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '6',
      dni: 25684741,
      edad: 36,
      nombre: 'Lisa Newell',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '7',
      dni: 26684741,
      edad: 34,
      nombre: 'Carolina Sigfreud', 
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '8',
      dni: 31684741,
      edad: 28,
      nombre: 'Tomas Alonso', 
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id: '9',
      dni: 26684741,
      edad: 34,
      nombre: 'Roman Capurro', 
      createdAt: new Date(),
      updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('persona', null, {});

  }
};

