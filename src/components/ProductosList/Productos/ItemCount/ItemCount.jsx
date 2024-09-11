import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increase = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="contador">
            <div className="controles">
                <button className='boton' onClick={decrease}>-</button>
                <p className="pControles">{quantity}</p>
                <button className='boton' onClick={increase}>+</button>
            </div>
            <button className="boton" onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>)
}