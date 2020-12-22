

const Viaje = require('./model/Viaje');
const PerfilConductor = require('./model/PerfilConductor');
const DetallePasajero = require('./model/DetallePasajero');
const EstadoPasajero = require('./model/EstadoPasajero');
const Denuncia = require('./model/Denuncia');
const PerfilConductorEstado = require('./model/PerfilConductorEstado');
const Vehiculo = require('./model/Vehiculo');
const EstadoVehiculo = require('./model/EstadoVehiculo');
const Modelo = require('./model/Modelo');
const Marca = require('./model/Marca');
const Persona = require('./model/Persona');
const Domicilio = require('./model/Domicilio');
const Localidad = require('./model/Localidad');
const Provincia = require('./model/Provincia');
const Pais = require('./model/Pais');
const EstadoViaje = require('./model/EstadoViaje');


//un viaje es de un conductor
Viaje.belongsTo(PerfilConductor);

//un conductor tiene muchos viajes
PerfilConductor.hasMany(Viaje);

//un DetallePasajero pertenece a un viaje
DetallePasajero.belongsTo(Viaje);

//un viaje tiene muchos DetallePasajero
Viaje.hasMany(DetallePasajero);

//Estado viaje tiene muchos Viaje
EstadoViaje.hasMany(Viaje);

//Viaje tiene un domicilio origen
Domicilio.hasOne(Viaje, { foreignKey: 'origenId' });

//Viaje tiene un domicilio destino
Domicilio.hasOne(Viaje, { foreignKey: 'destinoId' });

//Un Estado tiene muchos DetallePasajeros
EstadoPasajero.hasMany(DetallePasajero);

//una denuncia es de un PerfilConductor
Denuncia.belongsTo(PerfilConductor);

//un conductor tiene muchas denuncias
PerfilConductor.hasMany(Denuncia);

//Un PerfilConductorEstado tiene muchos PerfilConductor
PerfilConductorEstado.hasMany(PerfilConductor);

//un vehiculo es de un conductor
Vehiculo.belongsTo(PerfilConductor);

//Viaje.hasOne(Vehiculo);
Vehiculo.hasMany(Viaje);

//un conductor tiene muchos vehiculos
PerfilConductor.hasMany(Vehiculo);

//un vehiculo tiene un EstadoVehiculo
EstadoVehiculo.hasMany(Vehiculo);

//Un Modelo tiene muchos Vehiculo
Modelo.hasMany(Vehiculo);

//un modelo es de una marca
Modelo.belongsTo(Marca);

//una marca tiene muchos modelos
Marca.hasMany(Modelo);

//un PerfilConductor pertenece a una Persona
PerfilConductor.belongsTo(Persona);

//un DetallePasajero pertenece a una Persona
DetallePasajero.belongsTo(Persona);

//Una Localidad tiene muchos Domicilio
Domicilio.belongsTo(Localidad);

//Provincia tiene muchas Localidad
Localidad.belongsTo(Provincia);

//Pais tiene muchas Provincia
Provincia.belongsTo(Pais);