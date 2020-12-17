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
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/vehiculo",
    contentType: "application/json",
    dataType: "json",
    success: (vehiculos) => {
      vehiculos.forEach((vehiculo) => {
        console.log(vehiculo);
      });
    },
  });
});
