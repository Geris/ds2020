const express = require("express");

const router = express.Router();

const PerfilConductorEstado = require("../database/model/PerfilConductorEstado");

//devuelve todas los PerfilConductorEstado
router.get("/", (req, res) => {
  PerfilConductorEstado.findAll().then((estado) => {
    res.json(estado);
  });
});

//obtener un PerfilConductorEstado por id: /api/perfilConductorEstado/id
router.get("/:id", (req, res) => {
  PerfilConductorEstado.findByPk(req.params.id).then((estado) => {
    res.json(estado);
  });
});

//insertar un PerfilConductorEstado
router.post("/", (req, res) => {
  PerfilConductorEstado.create({
    nombre: req.body.nombre,
  }).then((estado) => {
    res.json(estado);
  });
});

//Actualiza un PerfilConductorEstado
router.patch("/:id", (req, res) => {
  PerfilConductorEstado.update(
    {
      nombre: req.body.nombre,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((result) => {
    res.json(result);
  });
});

module.exports = router;
