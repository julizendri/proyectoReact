import { Categorias } from "./Categorias/Categorias";

export const CategoriasList = ({categorias}) =>{
    return(
        <div className="categoriasList">
            {categorias.map(cat=> <Categorias key={cat.id} {...cat}/>)}
        </div>
    )
}