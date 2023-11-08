import { createReducer } from "@reduxjs/toolkit";
import filtroActions from "../actions/filtrosActions";

const initialState = [];

const filtroReducer = createReducer(initialState, (builder) => {
    return builder
    .addCase(filtroActions.get_filtro.fulfilled, (state,action) => {
        return action.payload
    })
})

export default filtroReducer