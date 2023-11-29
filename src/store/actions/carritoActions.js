import { createAction } from "@reduxjs/toolkit";

const agregarCarrito = createAction('agregarCarrito');

const sacarCarrito = createAction('sacarCarrito');

const vaciarCarrito = createAction('vaciarCarrito');

const carritoActions = { agregarCarrito,sacarCarrito,vaciarCarrito };

export default carritoActions;