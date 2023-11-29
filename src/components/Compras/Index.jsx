import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import carritoActions from "../../store/actions/carritoActions";
import toast from "react-hot-toast";

export const Compras = () => {
  const { carrito } = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const generarCompra = () => {
    let precio = carrito.reduce((acc,car) => acc + car.price, 0);
    toast.success(`Compra generada, total a pagar: $${precio}`);
    dispatch(carritoActions.vaciarCarrito());
  }
  return (
    <div>
      {
      carrito?.length == 0 ?
      <h1 className="sin-evento">No tiene evento en su carrito</h1>
      :
      <>
      <button className="btn-carrito color-red" onClick={() => dispatch(carritoActions.vaciarCarrito())}>Vaciar Carrito</button>
      {
      carrito?.map((car) => (
        <section key={car._id} className="cart-item">
          <div className="cart-item-img-container">
            <img
              src={car.image}
              alt="cart-item-img"
              className="cart-item-img"
            />
          </div>
          <div className="cart-item-content-container">
            <h2>{car.name}</h2>
            <p>{car.category}</p>
            <h3 className="cart-item-price">$ {car.price}</h3>
            <button onClick={() => dispatch(carritoActions.sacarCarrito(car._id))} className="delete_btn">Sacar del carrito</button>
          </div>
        </section>
      ))
      }
      <button className="btn-carrito color-green" onClick={generarCompra}>Generar compras</button>
      </>
      }
    </div>
  );
};
