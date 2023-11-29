import React from 'react'
import "./style.css";
import { useForm } from 'react-hook-form';
import { createEvent } from '../../utils/events';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const CrearEvento = () => {
    const user = useSelector((state) => state.user);
    const {handleSubmit,register} = useForm();
    const navigate = useNavigate();
    const handleEnviar = async (datos) => {
        const respuesta = await createEvent(datos,user.token);
        const {status} = respuesta;
        if (status === 201) {
            toast.success("El evento se creo correctamente");
            navigate("/")
        } else {
            if (respuesta.response.status === 401) {
                toast.error("Error en el token");
            } else {
                toast.error(respuesta.response.data.error);
            }
        }
    }
  return (
    <div>
    <h3 className='title-evento'>Crear Evento</h3>
    <form className='form-evento' onSubmit={handleSubmit(handleEnviar)}>
        <div className='crear-group'>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" 
            {...register("name")}
            />
        </div>
        <div className='crear-group'>
            <label htmlFor="categoria">Categoria</label>
            <select
            {...register("category")}
            >
                <option value="Food">FOOD</option>
                <option value="Museum">MUSEUM</option>
                <option value="Concert">CONCERT</option>
                <option value="Race">RACE</option>
                <option value="Books">BOOKS</option>
                <option value="Cinema">CINEMA</option>
                <option value="Party">PARTY</option>
            </select>
        </div> 
        <div className='crear-group'>
            <label htmlFor="date">Fecha</label>
            <input type="date" 
            {...register("date")}
            />
        </div> 
        <div className='crear-group'>
            <label htmlFor="imagen">URL</label>
            <input type="text" 
            {...register("image")}

            />
        </div>
        <div className='crear-group'>
            <label htmlFor="place">Lugar</label>
            <input type="text" 
            {...register("place")}
            />
        </div>
        <div className='crear-group'>
            <label htmlFor="price">Precio</label>
            <input type="number"
            {...register("price")}
            />
        </div>
        <div className='crear-group'>
            <label htmlFor="capacity">Capacidad</label>
            <input type="number"
            {...register("capacity")}
            />
        </div>
        <div className='crear-group'>
            <label htmlFor="quantity">Asistencia o Estimacion</label>
            <input type="number"
            {...register("quantity")}
            />
        </div>
        <div className='crear-group'>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10"
            {...register("description")}
            ></textarea>
        </div>
        <div className="crear-group">
        <input type="submit" value="Guardar evento" />
        </div>
    </form>
</div>
  )
}
