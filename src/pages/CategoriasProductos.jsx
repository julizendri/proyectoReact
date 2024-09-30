import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategoriesByID, getProductByCategory } from "../asyncMock";
import { ProductoList } from '../components/ProductosList/ProductosList';
import { Link } from "react-router-dom";

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
            <h1>{categoria.nombre.charAt(0).toUpperCase() + categoria.nombre.slice(1).toLowerCase()}</h1>
            <ProductoList productos={productos} />
            <Link to={`/Productos`}>Volver a Categorias</Link>
        </div>
    );
};