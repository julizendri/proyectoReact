import { ItemCount } from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const Producto = ({ nombre, img, descripcion, precio, categoria,id }) => {
    return (
        <div className="Producto">
            <h2>{nombre}</h2>
            <img className='imgProducto' src={img} alt={nombre} />
            <section>
                <p className="pProducto">{descripcion}</p>
                <p>Precio: {precio}</p>
                <Link className to={`/productos/${categoria}/${id}`} >Detalle</Link>
            </section>
            <ItemCount />
        </div>
    );
};