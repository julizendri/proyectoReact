import { ItemCount } from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const Producto = ({ nombre, img, descripcion, precio, categoria, id, stock }) => {
    const { cart, addItem } = useContext(CartContext);
    const existingItem = cart.find(item => item.id === id);
    const existingQuantity = existingItem ? existingItem.quantity : 0;
    const availableStock = stock - existingQuantity;

    const handleAddOn = (quantity) => {
        const totalQuantity = existingQuantity + quantity;

        if (totalQuantity <= stock) {
            const item = { id, nombre, precio };
            addItem(item, quantity);
        } else {
            alert(`Solo nos queda/n: ${availableStock} articulo/s disponible/s.`);
        }
    };

    return (
        <div className="Producto">
            <h2>{nombre}</h2>
            <img className='imgProducto' src={img} alt={nombre} />
            <section className="seccionProducto">
                <p className="pProducto">{descripcion}</p>
                <p>Precio: ${precio}</p>
                <Link className='boton' to={`/productos/${categoria}/${id}`}>Detalle</Link>
            </section>
            <footer>
                {availableStock > 0 ? (
                    <ItemCount 
                        stock={availableStock}
                        initial={1} 
                        onAdd={handleAddOn} 
                    />
                ) : (
                    <p>No hay más stock</p>
                )}
            </footer>
        </div>
    );
};
