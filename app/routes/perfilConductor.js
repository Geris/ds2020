const express = require("express");

const router = express.Router();

const PerfilConductor = require("../database/model/PerfilConductor");

//devuelve todos los conductores
router.get("/", (req, res) => {
  PerfilConductor.findAll().then((conductor) => {
    res.json(conductor);
  });
});

//obtener un conductor por id: /api/perfilConductor/id
router.get("/:id", (req, res) => {
  PerfilConductor.findByPk(req.params.id).then((conductor) => {
    res.json(conductor);
  });
});

//insertar un perfilConductor
router.post("/", (req, res) => {
  PerfilConductor.create({
    contrasenia: req.body.contrasenia,
    imagen: req.body.imagen,
    mail: req.body.mail,
    personaId: req.body.personaId,
    perfilConductorEstadoId: req.body.perfilConductorEstadoId,
  }).then((conductor) => {
    res.json(conductor);
  });
});

router.patch("/:id", (req, res) => {
  Viaje.update(
    {
      contrasenia: req.body.contrasena,
      imagen: req.body.imagen,
      mail: req.body.mail,
      personaId: req.body.personaId,
      perfilConductorEstadoId: req.body.perfilConductorEstadoId,
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
