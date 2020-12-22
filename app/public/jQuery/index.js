$(() => {
  let usuarioActual = JSON.parse(localStorage.getItem("usuarioLogueado"));
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/viaje",
    contentType: "application/json",
    dataType: "json",
    success: (viajes) => {
      $html = "";
      viajes.forEach((viaje) => {
        var asi = Math.floor(Math.random() * 4 + 1);
        if (
          viaje.horaFin == null &&
          viaje.perfilConductorId === usuarioActual.conductorId
        ) {
          var nombreEstado;
          $.ajax({
            type: "get",
            url: "http://localhost:3000/api/estadoViaje/" + viaje.estadoViajeId,
            contentType: "application/json",
            dataType: "json",
            success: (estado) => {
              nombreEstado = estado.nombre;
            },
          }).done(() => {
            var vehiculo;
            $.ajax({
              type: "get",
              url: "http://localhost:3000/api/vehiculo/" + viaje.vehiculoId,
              contentType: "application/json",
              dataType: "json",
              success: (pa) => {
                vehiculo = pa;
              },
            }).done(() => {
              var destino;
              $.ajax({
                type: "get",
                url: "http://localhost:3000/api/domicilio/" + viaje.destinoId,
                contentType: "application/json",
                dataType: "json",
                success: (de) => {
                  destino = de;
                },
              }).done(() => {
                $html += `
              <div class="border border-3 rounded m-2 p-3 row">
                <div class="col">
                  <div class="m-2">
                    <p>Fecha: ${viaje.fecha}</p>
                  </div>
  
                  <div class="m-2">
                    <p>Hora Inicio: ${viaje.horaInicio}</p>
                  </div>
                </div>
  
                <div class="col">                    
                  <div class="m-2">
                    <p>Asientos: ${asi} </p>
                  </div>
  
                  <div class="m-2">
                    <p>Destino: ${destino.calle} numero ${destino.numero} </p>
                  </div>
                </div>
  
                <div class="col">                    
                  <div class="m-2">
                    <p>Precio Total: ${viaje.precioTotal}</p>
                  </div>
  
                  <div class="m-2">
                    <p>Vehiculo: ${vehiculo.patente} </p>
                  </div>
                </div>
  
                <div class="col-2 ms-3 mt-3">
                  <div class="row">
                    <button type="button" class="btn btn-secondary mt-2">
                      Ver
                    </button>
                  </div>
                </div>
              </div>
              `;
                $("#viajes").html($html);
              });
            });
          });
        }
      });
    },
  });
});
