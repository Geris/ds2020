$("#boton").on("click", () => {
  if (datosValidos()) {
    var domicilioOrigen = JSON.stringify({
      calle: $("#calleOrigen").val(),
      numero: parseInt($("#numeroCalleOrigen").val()),
      localidadId: parseInt($("#localidadSeleccionadaOrigen").val()),
    });
    var domicilioDestino = JSON.stringify({
      calle: $("#calleDestino").val(),
      numero: parseInt($("#numeroDestino").val()),
      localidadId: parseInt($("#localidadSeleccionadaDestino").val()),
    });

    $done = false;
    $origenId = null;
    $destinoId = null;
    $.when(
      $.when(
        $.ajax({
          type: "post",
          url: "http://localhost:3000/api/domicilio",
          data: domicilioOrigen,
          contentType: "application/json",
          dataType: "json",
          success: (respuesta) => {
            $done = true;
            $origenId = respuesta.id;
          },
          error: () => {
            $("#error").html(
              "<p class='text-danger fw-bold'>Hubo un error!</p>"
            );
          },
        }),

        $.ajax({
          type: "post",
          url: "http://localhost:3000/api/domicilio",
          data: domicilioDestino,
          contentType: "application/json",
          dataType: "json",
          success: (respuesta) => {
            $done = true;
            $destinoId = respuesta.id;
          },
          error: () => {
            $done = false;
            $("#error").html(
              "<p class='text-danger fw-bold'>Hubo un error!</p>"
            );
          },
        })
      ).done(() => {
        if ($done) {
          //console.log($("#vehiculo").val());

          let viaje = JSON.stringify({
            fecha: $("#fecha").val(),
            precioPorPersona: null,
            //horaInicio: $("#horaInicio").val(),
            horaFin: null,
            perfilConductorId: parseInt(JSON.parse(localStorage.getItem("usuarioLogueado")).conductorId),
            precioTotal: parseFloat($("#precioTotal").val()),
            posibilidadEquipaje: $("#equipaje").prop("checked"),
            observacion: $("#observaciones").val(),
            estadoViajeId: 1,
            origenId: parseInt($origenId),
            destinoId: parseInt($destinoId),
          });

          console.log(viaje);

          $.ajax({
            type: "post",
            url: "http://localhost:3000/api/viaje",
            data: viaje,
            contentType: "application/json",
            dataType: "json",
            success: (respuesta) => {
              console.log("RESPUESTA VIAJE", respuesta);
              //$(location).attr("href", "/index.html");
            },
            error: () => {
              $("#error").html(
                "<p class='text-danger fw-bold'>Hubo un error!</p>"
              );
            },
          });
        } else {
          $("#error").html("<p class='text-danger fw-bold'>Hubo un error!</p>");
        }
      })
    );
  } else {
    $("#error").html(
      "<p class='text-danger fw-bold'>Todos los datos son obligatorios!</p>"
    );
  }
});

function datosValidos() {
  return (
    $("#calleOrigen").val() !== "" &&
    $("#numeroCalleOrigen").val() !== "" &&
    $("#localidadSeleccionadaOrigen").val() !== "" &&
    $("#calleDestino").val() !== "" &&
    $("#numeroDestino").val() !== "" &&
    $("#localidadSeleccionadaDestino").val() !== "" &&
    $("#fecha").val() !== "" &&
    $("#precioTotal").val() !== "" &&
    $("#horaInicio").val() !== ""
  );
}
