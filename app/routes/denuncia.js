const express = require('express');

const router = express.Router();

const Denuncia = require('../database/model/Denuncia');


//devuelve todas las Denuncia
router.get('/', (req, res) => {
    Denuncia.findAll().then(denuncia => {
        res.json(denuncia);
    }); 
});

//obtener una Denuncia por id: /api/denuncia/id
router.get('/:id', (req, res) => {
    Denuncia.findByPk(req.params.id).then(denuncia => {
        res.json(denuncia);
    }); 
});

//obtener las denuncias de un conductor
router.get('/denunciasPorConductor/:id', (req, res) => {
    Denuncia.findAll({
        where: {
            perfilConductorId: req.params.id
        }
    }).then(denuncias => {
        res.json(denuncias);
    }); 
});

//insertar una Denuncia
router.post('/', (req, res) => {
    Denuncia.create({
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        perfilConductorId: req.body.perfilConductorId
    }).then(denuncia => {
        res.json(denuncia)
    }); 
});

//Actualizar una Denuncia
router.patch('/:id', (req, res) => {
    Denuncia.update({
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        perfilConductorId: req.body.perfilConductorId
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;