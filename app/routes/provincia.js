
const express = require('express');
const router = express.Router();

const Provincia = require('../database/model/Provincia');

//devuelve todas las Provincia
router.get('/', (req, res) => {
    Provincia.findAll().then(provincia => {
        res.json(provincia);
    }); 
});

//obtener una Provincia por id: /api/provincia/id
router.get('/:id', (req, res) => {
    Provincia.findByPk(req.params.id).then(provincia => {
        res.json(provincia);
    }); 
});

//insertar una Provincia
router.post('/', (req, res) => {
    Provincia.create({
        nombre: req.body.nombre,
        paisId:req.body.paisId
    }).then(provincia => {
        res.json(provincia)
    }); 
});

//Actualizar una Provincia
router.patch('/:id', (req, res) => {
    Provincia.update({
        nombre: req.body.nombre,
        paisId:req.body.paisId
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;