import cart from './assets/carrito.png'
import { useContext } from 'react'
import { CartContext } from '../../../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart'>
            <img className='carritoIMG' src={cart} alt='cart-widget' />
            {totalQuantity > 0 && <span>{totalQuantity}</span>}
        </Link>
    )
}

