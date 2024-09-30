import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CheckoutItem } from "../components/CheckoutItem/CheckoutItem";
import { Link } from "react-router-dom";

export const Checkout = () => {
    const { cart, total } = useContext(CartContext);

    return (
        <div>
            {cart.map(p => <CheckoutItem key={p.id} {...p} />)}
            <h2>Total: ${total}</h2>
            <Link to={'/cart'}>Volver al Carrito</Link>
        </div>
    );
};