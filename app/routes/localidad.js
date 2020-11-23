
const express = require('express');
const router = express.Router();

const Localidad = require('../database/model/Localidad');

//devuelve todas las Localidad
router.get('/', (req, res) => {
    Localidad.findAll().then(localidad => {
        res.json(localidad);
    }); 
});

//obtener una Localidad por id: /api/localidad/id
router.get('/:id', (req, res) => {
    Localidad.findByPk(req.params.id).then(localidad => {
        res.json(localidad);
    }); 
});

//insertar una Localidad
router.post('/', (req, res) => {
    Localidad.create({
        nombre: req.body.nombre,
        provinciaId:req.body.provinciaId
    }).then(localidad => {
        res.json(localidad)
    }); 
});

//Actualizar una Localidad
router.patch('/:id', (req, res) => {
    Localidad.update({
        nombre: req.body.nombre,
        provinciaId:req.body.provinciaId
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;