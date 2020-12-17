$(() => {
  $("#boton").on("click", () => {
    if (datosValidos()) {
      console.log($("#fecha").val());
      console.log($("#horaInicio").val());
      console.log($("#precioTotal").val());
      console.log($("#vehiculo").val());
      console.log($("#observaciones").val());
      console.log($("#equipaje").prop("checked"));

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
              console.log("RESPUESTA ORIGEN", respuesta);
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
                console.log("RESPUESTA ORIGEN", respuesta);
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
          /*
            var viaje = JSON.stringify({
    fecha: DataTypes.DATEONLY,
    horaInicio: DataTypes.DATE,
    horaFin: null,
    precioPorPersona: null,
    precioTotal: DataTypes.FLOAT,
    posibilidadEquipaje:DataTypes.BOOLEAN,
    observacion: DataTypes.STRING
    origenId:
     destinoId:
            });
  
            $.ajax({
              type: "post",
              url: "http://localhost:3000/api/domicilio",
              data: domicilioDestino,
              contentType: "application/json",
              dataType: "json",
              success: () => {
                $done = true;
              },
              error: () => {
                $done = false;
                $("#error").html(
                  "<p class='text-danger fw-bold'>Hubo un error!</p>"
                );
              },
            });
            */
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
