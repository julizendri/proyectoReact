import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategoriesByID, getProductByCategory } from "../asyncMock";
import { ProductoList } from '../components/ProductosList/ProductosList';

export const CategoriasProducto = () => {
    const { categoriaID } = useParams();
    const [categoria, setCategoria] = useState(null);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getCategoriesByID(categoriaID)
            .then((categoria) => {
                setCategoria(categoria);
                return getProductByCategory(categoria.nombre.toLowerCase());
            })
            .then((productos) => {
                setProductos(productos);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [categoriaID]);

    if (!categoria || productos.length === 0) {
        return <div className="cargando">Cargando...</div>;
    }

    return (
        <div className="divCategorias">
            <h1>{categoria.nombre}</h1>
            <ProductoList productos={productos} />
        </div>
    );
};