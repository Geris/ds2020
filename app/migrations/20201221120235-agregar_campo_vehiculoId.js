'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('viaje', 'vehiculoId', {
        type: Sequelize.INTEGER,
        allowNull: true
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
  }
};
