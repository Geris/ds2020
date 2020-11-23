const express = require('express');

const router = express.Router();

const EstadoViaje = require('../database/model/EstadoViaje');


//devuelve todas los EstadoViaje
router.get('/', (req, res) => {
    EstadoViaje.findAll().then(estado => {
        res.json(estado);
    }); 
});

//obtener un EstadoPasajero por id: /api/estadoViaje/id
router.get('/:id', (req, res) => {
    EstadoViaje.findByPk(req.params.id).then(estado => {
        res.json(estado);
    }); 
});

//insertar un EstadoViaje
router.post('/', (req, res) => {
    EstadoViaje.create({
        nombre: req.body.nombre
    }).then(estado => {
        res.json(estado)
    }); 
});

//Actualiza un EstadoPasajero
router.patch('/:id', (req, res) => {
    EstadoViaje.update({
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