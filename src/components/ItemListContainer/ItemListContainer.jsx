import { Card } from "./components/Card"
import buzos from './assets/buzos.png'
import pants from './assets/pants.png'
import conjunto from './assets/conjunto.png'


export const ItemListContainer = () => {
    return <>
        <Card
        imagenSRC={buzos} 
        name="Partes de arriba"
        details="Remeras, camperas, buzos y más"
        ></Card>
        <Card
        imagenSRC={pants}
        name="Partes de abajo"
        details="Todo lo que necesitas para tus piernas"
        ></Card>
        <Card
        imagenSRC={conjunto}
        name="Conjuntos"
        details="Los conjuntos mas lindos y cancheros"
        ></Card>
    </>
}