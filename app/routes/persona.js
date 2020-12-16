const express = require("express");

const router = express.Router();

const Persona = require("../database/model/Persona");

//devuelve todas las Personas
router.get("/", (req, res) => {
  Persona.findAll().then((persona) => {
    res.json(persona);
  });
});

//obtener una Persona por id: /api/persona/id
router.get("/:id", (req, res) => {
  Persona.findByPk(req.params.id).then((persona) => {
    res.json(persona);
  });
});

//insertar una Persona
router.post("/", (req, res) => {
  Persona.create({
    dni: req.body.dni,
    edad: req.body.edad,
    nombre: req.body.nombre,
  }).then((persona) => {
    res.json(persona);
  });
});

//Actualizar una Persona
router.patch("/:id", (req, res) => {
  Persona.update(
    {
      dni: req.body.dni,
      edad: req.body.edad,
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
