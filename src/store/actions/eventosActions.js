import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const get_eventos = createAsyncThunk('get_eventos', async() => {
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

const eventosActions = {get_eventos};

export default eventosActions