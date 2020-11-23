
const express = require('express');
const router = express.Router();

const Vehiculo = require('../database/model/Vehiculo');

//devuelve todos los Vehiculo
router.get('/', (req, res) => {
    Vehiculo.findAll().then(vehiculo => {
        res.json(vehiculo);
    }); 
});

//obtener un Vehiculo por id: /api/vehiculo/id
router.get('/:id', (req, res) => {
    Vehiculo.findByPk(req.params.id).then(vehiculo => {
        res.json(vehiculo);
    }); 
});

//insertar un Vehiculo
router.post('/', (req, res) => {
    Vehiculo.create({
        color: req.body.color,
        patente: req.body.patente,
        perfilConductorId: req.body.perfilConductorId,
        modeloId: req.body.modeloId,
        estadoVehiculoId: req.body.estadoVehiculoId
    }).then(vehiculo => {
        res.json(vehiculo)
    }); 
});

//Actualizar un Vehiculo
router.patch('/:id', (req, res) => {
    Vehiculo.update({
        color: req.body.color,
        patente: req.body.patente,
        perfilConductorId: req.body.perfilConductorId,
        modeloId: req.body.modeloId,
        estadoVehiculoId: req.body.estadoVehiculoId
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;