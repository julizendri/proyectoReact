import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const CartItem = ({ id, nombre, precio, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="cart-item">
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>Cantidad: {quantity}</p>
            <button onClick={() => removeItem(id)} className="boton">Eliminar</button>
        </div>
    );
};