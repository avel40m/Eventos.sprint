import {configureStore} from '@reduxjs/toolkit';
import eventoReducer from './reducers/eventoReducer';
import filtroReducer from './reducers/filtroReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
    reducer: {
        eventos: eventoReducer,
        filtro: filtroReducer,
        user: userReducer,
    }
})