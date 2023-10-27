import { Link } from 'react-router-dom';
import './style.css';

export const Cards = ({ filtrar }) => {

    return (
        <section className="cards">
            {
                filtrar
                    ?
                    filtrar.map(event => (
                        <div className="card" key={event._id}>
                            <img src={event.image} className="card-imagen" alt="Avatar" />
                            <div className="card-body">
                                <h1>{event.name}</h1>
                                <p>{event.description}</p>
                                <Link to={`/detail/${event._id}`}>Ver más</Link>
                            </div>
                        </div>
                    ))
                    :
                    <h1>Cargando datos...</h1>
            }
        </section >
    )
}
