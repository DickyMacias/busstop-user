import React from 'react'

const Rutas = ({ rutas }) => {
  return (
    <div>
      {rutas.map((ruta) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{ruta.ruta}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{ruta.hora}</h6>
            <p class="card-text">{ruta.camion}</p>
            <p class="card-text">{ruta.check}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Rutas