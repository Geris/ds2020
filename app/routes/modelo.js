
const express = require('express');
const router = express.Router();

const Modelo = require('../database/model/Modelo');

//devuelve todos los Modelo
router.get('/', (req, res) => {
    Modelo.findAll().then(modelo => {
        res.json(modelo);
    }); 
});

//obtener un Modelo por id: /api/modelo/id
router.get('/:id', (req, res) => {
    Modelo.findByPk(req.params.id).then(modelo => {
        res.json(modelo);
    }); 
});

//insertar un Modelo
router.post('/', (req, res) => {
    Modelo.create({
        nombre: req.body.nombre,
        marcaId: req.body.marcaId
    }).then(modelo => {
        res.json(modelo)
    }); 
});

//Actualizar un Vehiculo
router.patch('/:id', (req, res) => {
    Modelo.update({
        nombre: req.body.nombre,
        marcaId: req.body.marcaId
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;