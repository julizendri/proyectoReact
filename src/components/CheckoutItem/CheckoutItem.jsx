export const CheckoutItem = ({ id, img, nombre, precio, quantity }) => {

    return (
        <div className="cart-item">
            <h2>{nombre}</h2>
            <img className="imagneCheckout" src={img} alt={nombre} />
            <p>Precio: ${precio}</p>
            <p>Cantidad: {quantity}</p>
        </div>
    );
};