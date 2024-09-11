import { useParams } from "react-router-dom";
import { getProductById } from "../asyncMock";
import { useState, useEffect } from "react";
import Productos from "./Productos";

function DetalleProducto() {
    const { productoID } = useParams();

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getProductById(productoID)
        .then((producto) =>{
            setProducto(producto);
        })
        .catch((error) => {
            console.error('Error fetching producto: ', error)
        })
    })

    if (!producto) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div>
            <Productos/>
        </div>
    )
}

export default DetalleProducto;