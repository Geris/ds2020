
const express = require('express');
const router = express.Router();

const Marca = require('../database/model/Marca');

//devuelve todos los Marca
router.get('/', (req, res) => {
    Marca.findAll().then(marca => {
        res.json(marca);
    }); 
});

//obtener un Marca por id: /api/modelo/id
router.get('/:id', (req, res) => {
    Marca.findByPk(req.params.id).then(marca => {
        res.json(marca);
    }); 
});

//insertar un Marca
router.post('/', (req, res) => {
    Marca.create({
        nombre: req.body.nombre
    }).then(marca => {
        res.json(marca)
    }); 
});

//Actualizar un Vehiculo
router.patch('/:id', (req, res) => {
    Marca.update({
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