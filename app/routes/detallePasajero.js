const express = require('express');

const router = express.Router();

const DetallePasajero = require('../database/model/DetallePasajero');


//devuelve todas los DetallePasajero
router.get('/', (req, res) => {
    DetallePasajero.findAll().then(detalle => {
        res.json(detalle);
    }); 
});

//obtener un DetallePasajero por id: /api/detallePasajero/id
router.get('/:id', (req, res) => {
    DetallePasajero.findByPk(req.params.id).then(detalle => {
        res.json(detalle);
    }); 
});

//insertar un DetallePasajero
router.post('/', (req, res) => {
    DetallePasajero.create({
        personaId: req.body.personaId,
        viajeId: req.body.viajeId,
        estadoPasajeroId: req.body.estadoPasajeroId,
        descripcion: req.body.descripcion
    }).then(detalle => {
        res.json(detalle)
    }); 
});

//Actualizar un DetallePasajero
router.patch('/:id', (req, res) => {
    DetallePasajero.update({
        personaId: req.body.personaId,
        viajeId: req.body.viajeId,
        estadoPasajeroId: req.body.estadoPasajeroId,
        descripcion: req.body.descripcion
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;