const express = require("express");

const router = express.Router();

const Viaje = require("../database/model/Viaje");

//devuelve todos los viajes (inutil)
router.get("/", (req, res) => {
  Viaje.findAll().then((viajes) => {
    res.json(viajes);
  });
});

router.get("/viajesPorConductor/:id", (req, res) => {
  Viaje.findAll({
    where: {
      perfilConductorId: req.params.id,
    },
  }).then((viajes) => {
    res.json(viajes);
  });
});

//obtener un viaje por id: /api/viajes/id
router.get("/:id", (req, res) => {
  Viaje.findByPk(req.params.id).then((viaje) => {
    res.json(viaje);
  });
});

//insertar un viaje
router.post("/", (req, res) => {
  Viaje.create({
    fecha: req.body.fecha,
    observacion: req.body.observacion,
    posibilidadEquipaje: req.body.posibilidadEquipaje,
    precioPorPersona: req.body.precioPorPersona,
    precioTotal: req.body.precioTotal,
    origenId: req.body.origenId,
    destinoId: req.body.destinoId,
    vehiculoId: req.body.vehiculoId,
    estadoViajeId: req.body.estadoViajeId,
    perfilConductorId: req.body.perfilConductorId,
    horaInicio: req.body.horaInicio,
    horaFin: req.body.horaFin,
  }).then((viaje) => {
    res.json(viaje);
  });
});

//Actualizar un viaje
router.patch("/:id", (req, res) => {
  Viaje.update(
    {
      fecha: req.body.fecha,
      observacion: req.body.observacion,
      posibilidadEquipaje: req.body.posibilidadEquipaje,
      precioPorPersona: req.body.precioPorPersona,
      precioTotal: req.body.precioTotal,
      origenId: req.body.origenId,
      destinoId: req.body.destinoId,
      vehiculoId: req.body.vehiculoId,
      estadoViajeId: req.body.estadoViajeId,
      perfilConductorId: req.body.perfilConductorId,
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
