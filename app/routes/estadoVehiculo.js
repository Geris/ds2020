const express = require('express');

const router = express.Router();

const EstadoVehiculo = require('../database/model/EstadoVehiculo');


//devuelve todas los EstadoVehiculo
router.get('/', (req, res) => {
    EstadoVehiculo.findAll().then(estado => {
        res.json(estado);
    }); 
});

//obtener un EstadoVehiculo por id: /api/estadoVehiculo/id
router.get('/:id', (req, res) => {
    EstadoVehiculo.findByPk(req.params.id).then(estado => {
        res.json(estado);
    }); 
});

//insertar un EstadoVehiculo
router.post('/', (req, res) => {
    EstadoVehiculo.create({
        nombre: req.body.nombre
    }).then(estado => {
        res.json(estado)
    }); 
});

//Actualiza un EstadoVehiculo
router.patch('/:id', (req, res) => {
    EstadoVehiculo.update({
        nombre: req.body.nombre
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;