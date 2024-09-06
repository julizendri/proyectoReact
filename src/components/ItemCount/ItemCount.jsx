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
            <div className="controls">
                <button className='botonCounter' onClick={decrease}>-</button>
                <p className="cantidad">{quantity}</p>
                <button className='botonCounter' onClick={increase}>+</button>
            </div>
            <div>
                <button className="botonCounter" onClick={()=> onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>)
}