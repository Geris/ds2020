"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("perfilConductor", [
      {
        id: "1",
        contrasenia: "1234",
        perfilConductorEstadoId: "1",
        imagen: "./storage/fran.jpg",
        mail: "gabixp@hotmail.com.ar",
        estado: "1",
        personaId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        contrasenia: "1234",
        perfilConductorEstadoId: "1",
        imagen: "./storage/flor.jpg",
        mail: "florencia.d.fried@gmail.com",
        personaId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        contrasenia: "1234",
        perfilConductorEstadoId: "1",
        imagen: "./storage/yoel.jpg",
        mail: "yoelalmiron1997@gmail.com",
        personaId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "4",
        contrasenia: "1234",
        perfilConductorEstadoId: "1",
        imagen: "./storage/ramiro.jpg",
        mail: "rami992009@gmail.com",
        personaId: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("perfilConductor", null, {});
  },
};
