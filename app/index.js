
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const sequelize = require('./database/dbconfig');
require('./database/relaciones');

app.listen(3000, () => {
    
    sequelize.sync( {force: false} )
    .then(() => {
        console.log('tablas sincronizadas');
    }).catch( error  => {
        console.log('error: ', error);
    });
    console.log('Servidor escuchando en http://localhost:3000');
})

//rutas
app.get('/', (req, res) => {
    res.send('principal');
});

app.use('/api/persona', require('./routes/persona'));
app.use('/api/viaje', require('./routes/viaje'));
app.use('/api/perfilConductor', require('./routes/perfilConductor'));
app.use('/api/estadoPasajero', require('./routes/estadoPasajero'));
app.use('/api/perfilConductorEstado', require('./routes/perfilConductorEstado'));
app.use('/api/estadoVehiculo', require('./routes/estadoVehiculo'));
app.use('/api/estadoViaje', require('./routes/estadoViaje'));
app.use('/api/denuncia', require('./routes/denuncia'));
app.use('/api/detallePasajero', require('./routes/detallePasajero'));
app.use('/api/vehiculo', require('./routes/vehiculo'));
app.use('/api/modelo', require('./routes/modelo'));
app.use('/api/marca', require('./routes/marca'));
app.use('/api/domicilio', require('./routes/domicilio'));
app.use('/api/localidad', require('./routes/localidad'));
app.use('/api/provincia', require('./routes/provincia'));
app.use('/api/pais', require('./routes/pais'));
