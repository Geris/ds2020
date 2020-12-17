$(() => {
  $("#boton").on("click", () => {
    if (datosValidos()) {
      var domicilioOrigen = JSON.stringify({
        calle: $("#calleOrigen").val(),
        numero: parseInt($("#numeroCalleOrigen").val()),
        localidadId: parseInt($("#localidadSeleccionadaOrigen").val()),
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
              $done = false;
              $("#error").html(
                "<p class='text-danger fw-bold'>Hubo un error!</p>"
              );
            },
          })
        ).done(() => {
          if ($done) {
            var domicilioDestino = JSON.stringify({
              calle: $("#calleDestino").val(),
              numero: parseInt($("#numeroDestino").val()),
              localidadId: parseInt($("#localidadSeleccionadaDestino").val()),
            });

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
            });
          } else {
            $("#error").html(
              "<p class='text-danger fw-bold'>Hubo un error!</p>"
            );
          }
        })
      ).done(() => {
        if ($done) {
          //console.log($("#vehiculo").val());
          //console.log('ID',$destinoId)

          let viaje = JSON.stringify({
            fecha: $("#fecha").val(),
            horaInicio: $("#horaInicio").val(),
            horaFin: null,
            precioPorPersona: null,
            precioTotal: parseFloat($("#precioTotal").val()),
            posibilidadEquipaje: $("#equipaje").prop("checked"),
            observacion: $("#observaciones").val(),
            origenId: parseInt($origenId),
            destinoId: parseInt($destinoId),
          });

          //console.log(viaje);

          $.ajax({
            type: "post",
            url: "http://localhost:3000/api/viaje",
            data: viaje,
            contentType: "application/json",
            dataType: "json",
            success: (respuesta) => {
              console.log("RESPUESTA VIAJE", respuesta);
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
      });
    } else {
      $("#error").html(
        "<p class='text-danger fw-bold'>Todos los datos son obligatorios!</p>"
      );
    }
  });
});

function datosValidos() {
  return true;
}
