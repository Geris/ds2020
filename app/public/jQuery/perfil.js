$(() => {
  let usuarioActual = JSON.parse(localStorage.getItem("usuarioLogueado"));
  $html = `
        <h4> ${usuarioActual.nombre}</h4>
        
        <div class="row mt-4">
            <div class="col">
                <p>Edad: ${usuarioActual.edad}</p>
                <p>DNI: ${usuarioActual.dni}</p>
            </div>
            <div class="col">
                <p>Email: ${usuarioActual.mail}</p>
                <p>Estado: Activo</p>
            </div>
        </div>
    `;
  $("#datos").html($html);

  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/vehiculo",
    contentType: "application/json",
    dataType: "json",
    success: (vehiculos) => {
      $html = "";
      vehiculos.forEach((vehiculo) => {
        var modelo = "";
        $.when(
          $.ajax({
            type: "get",
            url: "http://localhost:3000/api/modelo/" + vehiculo.modeloId,
            contentType: "application/json",
            dataType: "json",
            success: (mo) => {
              modelo = mo;
              console.log("MODELO", modelo);
            },
          })
        ).done(() => {
          var marca = "";
          $.ajax({
            type: "get",
            url: "http://localhost:3000/api/marca/" + modelo.marcaId,
            contentType: "application/json",
            dataType: "json",
            success: (ma) => {
              marca = ma;
              console.log("MARCA", marca.nombre);
            },
          }).done(() => {
            //if (vehiculo.perfilConductorId === usuarioActual.conductorId) {
            $html += `
            <div class="border border-3 rounded m-2 p-3 row">
                <div class="col-9">
                    <p>Modelo: ${modelo.nombre}</p>
                    <p>Marca: ${marca.nombre}</p>
                    <p>Patente: ${vehiculo.patente}</p>
                    <p>Color:  ${vehiculo.color}</p>
                </div>
                <div class="col-2 ms-3 mt-3">
                    <div class="row">
                        <button type="button" class="btn btn-secondary mt-3">
                        Editar
                        </button>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-secondary mt-3">
                        Eliminar
                        </button>
                    </div>
                </div>
            </div>
          `;
            //}
            $("#vehiculos").html($html);
          });
        });
      });
    },
  });
});
