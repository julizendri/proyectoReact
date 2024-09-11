import { Link } from "react-router-dom"

export const Categorias = ({nombre, img, descripcion, id}) => {
    return (
        <div className="Categoria">
            <header className="headerCategoria">{nombre}</header>
            <picture><img className='imgCategoria' src={img} alt={nombre} /></picture>
            <section><p className="pCategoria">{descripcion}</p></section>
            <Link className="boton"to={`/productos/${id}`}>Ver {nombre}</Link>
        </div>
    )
}