import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({nombre, img, precio, categoria, descripcion, stock}) => {
    return (
        <div className="ItemDetail">
            <header>{nombre}</header>
            <picture><img src={img} alt={nombre} /></picture>
            <section className="infoItemDetail">
                <p>Categoría: {categoria}</p>
                <p>Descripción: {descripcion}</p>
                <p>Precio: ${precio}</p>
            </section>
            <footer><ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)}/></footer>
        </div>
    )
}