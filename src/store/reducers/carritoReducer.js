import { createReducer } from "@reduxjs/toolkit";
import carritoActions from "../actions/carritoActions";

const initialState = {
    carrito: []
};

const carritoReducers = createReducer(initialState,(builder) => {
    return builder
    .addCase(carritoActions.agregarCarrito,(state,actions) =>  {
        const { payload } = actions;
        return {
            ...state,
            carrito: [...state.carrito,...payload]
        }
    })
    .addCase(carritoActions.sacarCarrito,(state,actions) => {
        const { payload } = actions;
        return {
            ...state,
            carrito: state.carrito.filter(evento => evento._id !== payload)
        }
    })
    .addCase(carritoActions.vaciarCarrito,(state,actions) => {
        return {
            ...state,
            carrito: []
        }
    })
})

export default carritoReducers;