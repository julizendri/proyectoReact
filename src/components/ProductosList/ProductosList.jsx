import {Producto} from './Productos/Productos'

export const ProductoList = ({ productos }) => {
    return (
        <div className="ProductosList">
            {productos.map(producto => (
                <Producto key={producto.id} {...producto} />
            ))}
        </div>
    );
};
