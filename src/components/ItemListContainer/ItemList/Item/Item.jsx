export const Item = ({ nombre, img, precio }) => {
    return (
        <div className="producto">
            <header>{nombre}</header>
            <picture><img src={img} alt={nombre} /></picture>
            <section><p>precio: ${precio}</p></section>
            <footer><button className="botonMas">Ver más</button></footer>
        </div>
    )
}