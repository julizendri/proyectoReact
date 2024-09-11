import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock";
import { useState, useEffect } from "react";
import { Producto } from "../components/ProductosList/Productos/Productos";

function DetalleProducto() {
    const { productoID } = useParams();

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProductById(productoID)
            .then((producto) => {
                setProducto(producto);
            })
            .catch((error) => {
                console.error('Error fetching producto: ', error)
            })
    })

    if (!producto) {
        return <div className="cargando">Cargando...</div >;
    }

    return (
        <div>
            <Producto key={producto.id} {...producto}/>
        </div>
    )
}

export default DetalleProducto;