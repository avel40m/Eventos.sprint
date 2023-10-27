import { useEffect, useState } from 'react';
import { Table } from '../Table';
import './style.css';
import axios from 'axios';
import { dataTable, estadiaticasEventos, estadisticasEventosFuturos, estadisticasEventosPasados } from '../../utils/dataTables';

export const Stast = () => {
    const [events, setEvents] = useState([]);
    const [stast, setStast] = useState([])
    const [dataPast, setdataPast] = useState([]);
    const [dataPost, setdataPost] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://mindhub-xj03.onrender.com/api/amazing')
            .then(response => {
                setEvents(response.data.events)
            });
    }, [])

    useEffect(() => {
        if (events.length == 0) return
        setStast(estadiaticasEventos(events));
        setdataPast(estadisticasEventosPasados(events));
        setdataPost(estadisticasEventosFuturos(events));
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [events])

    return (
        <section className="tabla">
            {
                loading ?
                    <div className='loading'>
                        <h1>Cargando </h1>
                        <div>
                            <span className="loader"></span>
                        </div>
                    </div>
                    :
                    <>
                        <Table dataTable={dataTable[0]} stast={stast} />
                        <Table dataTable={dataTable[1]} dataPast={dataPast} />
                        <Table dataTable={dataTable[2]} dataPost={dataPost} />
                    </>

            }
        </section>
    )
}
