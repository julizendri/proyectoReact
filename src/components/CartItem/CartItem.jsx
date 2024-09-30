import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const CartItem = ({ id, img, nombre, precio, quantity }) => {
    const { removeItem, handleReduceQuantity } = useContext(CartContext);

    return (
        <div className="cart-item">
            <h2>{nombre}</h2>
            <img className="imagneCheckout" src={img} alt={nombre} />
            <p>Precio: ${precio}</p>
            <p>Cantidad: {quantity}</p>
            <button onClick={() => handleReduceQuantity({ id, img, nombre, precio })} className="boton">-</button>
            <button onClick={() => removeItem(id)} className="boton">Eliminar</button>
        </div>
    );
};