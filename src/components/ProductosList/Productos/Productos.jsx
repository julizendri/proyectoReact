import { ItemCount } from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const Producto = ({ nombre, img, descripcion, precio, categoria, id, stock }) => {
    return (
        <div className="Producto">
            <h2>{nombre}</h2>
            <img className='imgProducto' src={img} alt={nombre} />
            <section className="seccionProducto">
                <p className="pProducto">{descripcion}</p>
                <p>Precio: {precio}</p>
                <Link className='boton' to={`/productos/${categoria}/${id}`} >Detalle</Link>
            </section>
            <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)} />
        </div>
    );
};