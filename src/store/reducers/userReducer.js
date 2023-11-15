import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const initialState = {
    user: null,
    isLogedIn: false,
    token: '',
}

const userReducer = createReducer(initialState,(builder) => {
    return builder
    .addCase(userActions.login, (state,action) => {
        state.user = action.payload.customer
        state.isLogedIn = true;
        state.token = action.payload.token;
    })
    .addCase(userActions.logout, (state,action) => {
        state.user = null;
        state.isLogedIn = false;
        state.token = ''
    })
})

export default userReducer;