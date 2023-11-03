import { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

export const Form = ({ categorias, events, setFiltrar }) => {
    const [texto, setTexto] = useState('');
    const [select, setSelect] = useState([]);
    const { pathname } = useLocation();
    
    useEffect(() => {
        setFiltrar(events);
        setSelect([]);
    },[pathname])

    const onSearch = (e) => {
        e.preventDefault();

        if (select.length != 0) {
            let filtradoCategoria = [];
            for (let i = 0; i < select.length; i++) {
                filtradoCategoria.push(events.filter(({category}) => category == select[i]));
            }
            let unSoloArreglo = filtradoCategoria.reduce((acumulador,categoria) => acumulador.concat(categoria),[]);
            let filtrado = unSoloArreglo.filter(eventos => eventos.name.toLowerCase().includes(texto.toLowerCase()));
            if (filtrado.length == 0) alert('No se encontro el evento')
            setFiltrar(filtrado)
        } else{
            let filtrado = events.filter(eventos => eventos.name.toLowerCase().includes(texto.toLowerCase()));
            if (filtrado.length == 0) alert('No se encontro el evento')
            setFiltrar(filtrado)
        }
    }
    
    const handleChange = (e) => {
        const {value,checked} = e.target;
        if (checked) {
            setSelect([...select,value]);
        }else{
            setSelect(select.filter(check => check !== value))
        }
    }

    return (
        <form className="formulario" onSubmit={e => onSearch(e)}>
            <div className="checkboxs">
                {
                    categorias?.map((categoria, index) => (
                        <div className="check-grupo" key={index}>
                            <input type="checkbox" role="searchCheckbox" value={categoria} className="check-box" onChange={handleChange} id={categoria} />
                            <label htmlFor={categoria} id={categoria}>{categoria}</label>
                        </div>
                    ))
                }
            </div>
            <div className="search">
                <input type="search" role="searchName" onChange={e => setTexto(e.target.value)} className="input" id="searchName" placeholder="Buscar por nombre" />
                <input type="submit" role="buscar" value="Buscar" className="button" />
            </div>
        </form>
    )
}
