import { ItemCount } from "../ProductosList/Productos/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ProductDetail = ({ nombre, img, descripcion, precio, categoria, id, stock }) => {
    const { cart, addItem } = useContext(CartContext);
    const existingItem = cart.find(item => item.id === id);
    const existingQuantity = existingItem ? existingItem.quantity : 0;
    const availableStock = stock - existingQuantity;

    const handleAddOn = (quantity) => {
        const totalQuantity = existingQuantity + quantity;

        if (totalQuantity <= stock) {
            const item = {
                id,
                nombre,
                precio,
            };

            addItem(item, quantity);
        } else {
            alert(`Solo nos queda/n: ${availableStock} artículo/s disponible/s.`);
        }
    };

    return (
        <div className="Producto">
            <h2>{nombre}</h2>
            <img className="imgProducto" src={img} alt={nombre} />
            <section className="seccionProducto">
                <p className="pProducto">{descripcion}</p>
                <p>Precio: ${precio}</p>
            </section>
            <footer>
                {availableStock > 0 ? (
                    <>
                        <ItemCount 
                            stock={availableStock}
                            initial={1} 
                            onAdd={handleAddOn} 
                        />
                        {existingQuantity > 0 && <Link to='/cart'>Terminar Compra</Link>}
                    </>
                ) : (
                    <p>No hay más stock</p>
                )}
            </footer>
            <Link to={`/productos/${categoria}`}>Volver a {categoria}</Link>
        </div>
    );
};