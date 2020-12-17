$(document).ready(() => {
  $("#boton").on("click", () => {
    if (datosValidos()) {
      let dataPersona = JSON.stringify({
        dni: $("#dni").val(),
        edad: $("#edad").val(),
        nombre: $("#nombre").val(),
      });
      var $personaId = null;

      $.when(
        $.ajax({
          type: "post",
          url: "http://localhost:3000/api/persona",
          data: dataPersona,
          contentType: "application/json",
          dataType: "json",
          success: (persona) => {
            $personaId = persona.id;
          },
          error: () => {
            $("#error").html(
              "<p class='text-danger fw-bold'>Hubo un error!</p>"
            );
          },
        })
      ).done(() => {
        if ($personaId !== null) {
          let dataPerfilConductor = JSON.stringify({
            contrasenia: $("#password").val(),
            imagen: "",
            mail: $("#email").val(),
            personaId: $personaId,
            perfilConductorEstadoId: "1",
          });

          $.ajax({
            type: "post",
            url: "http://localhost:3000/api/perfilConductor",
            data: dataPerfilConductor,
            contentType: "application/json",
            dataType: "json",
            success: () => {
              $(location).attr("href", "/login");
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
        "<p class='text-danger fw-bold'>Todos los datos son obligatorios, las contraseñas deben coincidir y ser mayor de 18!</p>"
      );
    }
  });
});

function datosValidos() {
  return (
    $("#email").val() !== "" &&
    $("#password").val() !== "" &&
    $("#repetirPassword").val() !== "" &&
    $("#password").val() === $("#repetirPassword").val() &&
    $("#nombre").val() !== "" &&
    $("#dni").val() !== "" &&
    $("#edad").val() !== "" &&
    parseInt($("#edad").val()) > 17
  );
}
