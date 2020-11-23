
const express = require('express');
const router = express.Router();

const Domicilio = require('../database/model/Domicilio');

//devuelve todos los Domicilio
router.get('/', (req, res) => {
    Domicilio.findAll().then(domicilio => {
        res.json(domicilio);
    }); 
});

//obtener un Domicilio por id: /api/domicilio/id
router.get('/:id', (req, res) => {
    Domicilio.findByPk(req.params.id).then(domicilio => {
        res.json(domicilio);
    }); 
});

//insertar un Domicilio
router.post('/', (req, res) => {
    Domicilio.create({
        calle: req.body.calle,
        numero: req.body.numero,
        localidadId:req.body.localidadId
    }).then(domicilio => {
        res.json(domicilio)
    }); 
});

//Actualizar un Domicilio
router.patch('/:id', (req, res) => {
    Domicilio.update({
        calle: req.body.calle,
        numero: req.body.numero,
        localidadId:req.body.localidadId
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;