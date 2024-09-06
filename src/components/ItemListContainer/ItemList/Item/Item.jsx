import { Link } from "react-router-dom"

export const Item = ({ nombre, img, precio, id }) => {
    return (
        <div className="producto">
            <header>{nombre}</header>
            <picture><img src={img} alt={nombre} /></picture>
            <section><p>precio: ${precio}</p></section>
            <footer><Link to={`/item/${id}`} className="Mas"/>Saber Más</footer>
        </div>
    )
}