import "./styles/actividades.scss"

export default function Actividades(){
    const actividades = [
        {nombre: 'Correr', duracion: 30, descripcion: 'Correr en el parque', horarios: [{dia:2,"hora-inicio":"10:00","hora-fin":"10:30"},{dia:4,"hora-inicio":"10:00","hora-fin":"10:30"},
        {dia:6,"hora-inicio":"10:00","hora-fin":"10:30"}]},
        {nombre: 'Nadar', duracion: 45, descripcion: 'Nadar en la piscina', horarios: [{dia:1,"hora-inicio":"15:00","hora-fin":"15:45"},{dia:3,"hora-inicio":"15:00","hora-fin":"15:45"},
        {dia:5,"hora-inicio":"15:00","hora-fin":"15:45"},
        {dia:7,"hora-inicio":"15:00","hora-fin":"15:45"}
        ]},
        {nombre: 'Ciclismo', duracion: 60, descripcion: 'Ciclismo en la montaña', horarios: [{dia:3,"hora-inicio":"08:00","hora-fin":"09:00"},{dia:6,"hora-inicio":"08:00","hora-fin":"09:00"}]},
        {nombre: 'Yoga', duracion: 50, descripcion: 'Clase de yoga', horarios: [{dia:2,"hora-inicio":"18:00","hora-fin":"18:50"},{dia:4,"hora-inicio":"18:00","hora-fin":"18:50"}]},
        {nombre: 'Pilates', duracion: 40, descripcion: 'Clase de pilates', horarios: [{dia:1,"hora-inicio":"09:00","hora-fin":"09:40"},{dia:3,"hora-inicio":"09:00","hora-fin":"09:40"},
        {dia:5,"hora-inicio":"09:00","hora-fin":"09:40"}]},
        {nombre: 'Boxeo', duracion: 30, descripcion: 'Entrenamiento de boxeo', horarios: [{dia:2,"hora-inicio":"20:00","hora-fin":"20:30"},{dia:4,"hora-inicio":"20:00","hora-fin":"20:30"}]}
    ]
    return(
        <div className="page-container">
            <h2>Actividades Disponibles</h2>
        <div className="actividades-container">
                {actividades.map((actividad, index) =>
                     <div className="actividad-card" key={index}>
                        <h3>{actividad.nombre}</h3>
                        <p>Duración: {actividad.duracion} minutos</p>
                        <p>Descripción: {actividad.descripcion}</p>
                        <h4>Horarios:</h4>
                        <ul>
                            {actividad.horarios.map((horario, index) => (
                                <li key={index}>
                                    Día {horario.dia}: {horario["hora-inicio"]} - {horario["hora-fin"]}
                                </li>
                            ))}
                        </ul>
                        <button>Inscribirse</button>
                     </div>)}
        </div>
        </div>
    )
}