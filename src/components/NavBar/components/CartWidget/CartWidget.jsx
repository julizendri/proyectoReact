import cart from './assets/carrito.png'

export const CartWidget = () => {
    return (
        <div>
            <img className='carritoIMG' src={cart} alt='cart-widget'/>
            0
        </div>
    )
}

