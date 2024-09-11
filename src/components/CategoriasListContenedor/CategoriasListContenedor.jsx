import "./CategoriasListContenedor.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategoriesByID, getCategories } from "../../asyncMock";
import { CategoriasList } from "./CategoriasList/CategoriasList";

export const CategoriasListContenedor = () => {
    const [categorias, setCategorias] = useState([]);

    const { categoriaID } = useParams();

    useEffect(() => {
        const asyncFunc = categoriaID ? getCategoriesByID : getCategories

        asyncFunc(categoriaID)
            .then(response => {
                setCategorias(response)
            })
            .catch(error => {
                console.error('Error fetching categoria', error)
            })
    }, [categoriaID]);

    return (
        <CategoriasList categorias={categorias} />
    );
};