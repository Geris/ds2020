
const express = require('express');
const router = express.Router();

const Pais = require('../database/model/Pais');

//devuelve todas las Provincia
router.get('/', (req, res) => {
    Pais.findAll().then(pais => {
        res.json(pais);
    }); 
});

//obtener un Pais por id: /api/pais/id
router.get('/:id', (req, res) => {
    Pais.findByPk(req.params.id).then(pais => {
        res.json(pais);
    }); 
});

//insertar un Pais
router.post('/', (req, res) => {
    Pais.create({
        nombre: req.body.nombre
    }).then(pais => {
        res.json(pais)
    }); 
});

//Actualizar un Pais
router.patch('/:id', (req, res) => {
    Pais.update({
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