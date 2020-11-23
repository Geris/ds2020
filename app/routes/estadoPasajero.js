const express = require('express');

const router = express.Router();

const EstadoPasajero = require('../database/model/EstadoPasajero');


//devuelve todas los EstadoPasajero
router.get('/', (req, res) => {
    EstadoPasajero.findAll().then(estado => {
        res.json(estado);
    }); 
});

//obtener un EstadoPasajero por id: /api/estadoPasajero/id
router.get('/:id', (req, res) => {
    EstadoPasajero.findByPk(req.params.id).then(estado => {
        res.json(estado);
    }); 
});

//insertar un EstadoPasajero
router.post('/', (req, res) => {
    EstadoPasajero.create({
        nombre: req.body.nombre
    }).then(estado => {
        res.json(estado)
    }); 
});

//Actualiza un EstadoPasajero
router.patch('/:id', (req, res) => {
    EstadoPasajero.update({
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