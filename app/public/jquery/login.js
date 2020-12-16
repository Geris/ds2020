$("#boton").on("click", () => {
  if (datosValidos()) {
    var $conductor = null;
    var $coincidencia = false;

    $.when(
      $.ajax({
        type: "get",
        url: "http://localhost:3000/api/perfilConductor",
        contentType: "application/json",
        dataType: "json",
        success: (conductores) => {
          conductores.map((conductor) => {
            if (
              conductor.mail === $("#email").val() &&
              conductor.contrasenia === $("#password").val()
            ) {
              $coincidencia = true;
              $conductor = conductor;
            }
          });
        },
      })
    ).done(() => {
      if ($coincidencia) {
        $.ajax({
          type: "get",
          url: "http://localhost:3000/api/persona/" + $conductor.personaId,
          contentType: "application/json",
          dataType: "json",
          success: (persona) => {
            localStorage.setItem(
              "usuarioLogueado",
              JSON.stringify({
                personaId: persona.id,
                conductorId: $conductor.id,
                dni: persona.dni,
                edad: persona.edad,
                nombre: persona.nombre,
                mail: $conductor.mail,
              })
            );
            $(location).attr("href", "/");
          },
        });
      } else {
        $("#error").html("<p class='text-danger fw-bold'>Datos erroneos!</p>");
      }
    });
  } else {
    $("#error").html("<p class='text-danger fw-bold'>Todos los datos son obligatorios!</p>");
  }
});

function datosValidos() {
  return $("#email").val() !== "" && $("#password").val() !== "";
}
