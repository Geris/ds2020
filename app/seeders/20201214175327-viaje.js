"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("viaje", [
      {
        id: "1",
        estadoViajeId: "2",
        fecha: "2019/12/27",
        horaInicio: new Date(),
        observacion:
          "Va a ser un viaje de mas de 10hs, equipaje de hasta 10kg. Vamos a parar 2 veces en el camino para comprar comida y descansar.",
        posibilidadEquipaje: true,
        precioPorPersona: null,
        precioTotal: 8999.99,
        perfilConductorId: "2",
        origenId: "2",
        destinoId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        estadoViajeId: "1",
        fecha: "2020/01/02",
        horaInicio: new Date(),
        observacion:
          "Va a ser un viaje de alrededor de 2hs, equipaje de hasta 7kg. Vamos a parar 5 min a mitad de camino para comprar comida.",
        posibilidadEquipaje: true,
        precioPorPersona: null,
        precioTotal: 4999.99,
        perfilConductorId: "1",
        origenId: "1",
        destinoId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("viaje", null, {});
  },
};
