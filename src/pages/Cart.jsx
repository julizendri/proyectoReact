import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../components/CartItem/CartItem";

export const Cart = () => {
    const { cart, ClearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/productos'>Ver Productos</Link>
                <Link to='/'>Ir al Inicio</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h1>Total: ${total}</h1>
            <button onClick={ClearCart} className="boton">Vaciar Carrito</button>
            <Link to='/checkout'>Checkout</Link>
        </div>
    );
};