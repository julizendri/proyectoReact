import cart from './assets/carrito.png'

const CartWidget = () => {
    return (
        <div>
            <img className='carritoIMG' src={cart} alt='cart-widget'/>
            0
        </div>
    )
}

export default CartWidget