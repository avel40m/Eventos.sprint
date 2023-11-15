import { createAction } from "@reduxjs/toolkit";

const login = createAction('login');

const logout = createAction('logout');

const userActions = {login,logout};

export default userActions;