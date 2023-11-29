import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const get_filtro = createAsyncThunk('get_filtro', async() => {
    try {
        let eventos = await axios.get('http://localhost:3000/api/events')
        .then(response => {
            return response.data
        })
        return eventos
    } catch (error) {
        console.log(error);
    }
})

const filtro_Pasados = createAsyncThunk('filtro_Pasado', async() => {
    try {
        let eventos = await axios.get('http://localhost:3000/api/events')
        .then(response => {
            const eventos = response.data
            return eventos.filter(evento => evento.assistance != undefined)
        })
        return eventos
    } catch (error) {
        console.log(error);
    }
})

const filtro_Futuros = createAsyncThunk('filtro_futuro', async() => {
    try {
        let eventos = await axios.get('http://localhost:3000/api/events')
        .then(response => {
            const eventos = response.data
            return eventos.filter(evento => evento.estimate != undefined)
        })
        return eventos
    } catch (error) {
        console.log(error);
    }
})

const filtroActions = {get_filtro,filtro_Pasados,filtro_Futuros};

export default filtroActions