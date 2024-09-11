import { CategoriasListContenedor } from "../components/CategoriasListContenedor/CategoriasListContenedor";

function Home() {
    return (
        <div className="cajaHome">
            <h1>Descubrí KAIA</h1>
            <CategoriasListContenedor />
            <div className="cajaContactoHome">
                <h2>Contacto</h2>
            </div>
        </div>
    )
}

export default Home;