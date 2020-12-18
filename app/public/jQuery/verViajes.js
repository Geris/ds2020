$(() => {
  $.ajax({
    type: "get",
    url: "http://localhost:3000/api/viaje",
    contentType: "application/json",
    dataType: "json",
    success: (viajes) => {
      $html = "";

      viajes.forEach((viaje) => {
        if (viaje.horaFin !== null) {
          $nombreEstado = "";
          $.ajax({
            type: "get",
            url: "http://localhost:3000/api/estadoViaje/" + viaje.estadoViajeId,
            contentType: "application/json",
            dataType: "json",
            success: (estado) => {
              $nombreEstado = estado.nombre;
            },
          });
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
                        <p>Estado: ${$nombreEstado}</p>
                    </div>

                    <div class="m-2">
                        <p>Destino: ${viaje.destinoId}</p>
                    </div>
                </div>

                <div class="col">                    
                    <div class="m-2">
                        <p>Precio Total: ${viaje.precioTotal}</p>
                    </div>

                    <div class="m-2">
                        <p>Vehiculo: </p>
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
        }
      });
      $("#viajes").html($html);
    },
  });
});
