export const InfoUser = ({name, details}) => {
    return <>
        <div className="infoUser">
            <h3>{name}</h3>
            <p>
                {details}
            </p>
            <button className="botonChusmear"><a href="./public/productos.html">Chusmear</a></button>
        </div>
    </>
}