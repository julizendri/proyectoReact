import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock";
import { useState, useEffect } from "react";
import { ProductDetail } from "../components/ProductDetail/ProductDetail";

function DetalleProducto() {
    const { productoID } = useParams();

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProductById(productoID)
            .then((producto) => {
                setProducto(producto);
            })
            .catch((error) => {
                console.error('Error fetching producto: ', error);
            });
    }, [productoID]); // Añadir [productoID] como dependencia para evitar llamadas infinitas

    if (!producto) {
        return <div className="cargando">Cargando...</div>;
    }

    return (
        <div className="divDetalleProducto">
            <ProductDetail {...producto} />
        </div>
    );
}

export default DetalleProducto;