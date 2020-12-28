$(() => {
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/localidad",
    contentType: "application/json",
    dataType: "json",
    success: (localidades) => {
      localidades.forEach((localidad) => {
        $("#localidadSeleccionadaOrigen").append(
          $("<option>", {
            value: localidad.id,
            text: localidad.nombre,
          })
        );
        $("#localidadSeleccionadaDestino").append(
          $("<option>", {
            value: localidad.id,
            text: localidad.nombre,
          })
        );
      });
    },
  });
  let usuarioActual = JSON.parse(localStorage.getItem("usuarioLogueado"));

  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/vehiculo",
    contentType: "application/json",
    dataType: "json",
    success: (vehiculos) => {
      vehiculos.forEach((vehiculo) => {
        console.log(vehiculo.perfilConductorId)
        console.log('ID', vehiculo.id)
        console.log(usuarioActual.conductorId)
        if (vehiculo.perfilConductorId === usuarioActual.conductorId) {
          $("#vehiculo").append(
            $("<option>", {
              value: vehiculo.id,
              text: vehiculo.patente,
            })
          );
        }
      });
    },
  });
});
