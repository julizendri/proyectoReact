import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { getProductById } from '../../asyncMock'
import { ItemDetail } from './components/ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById ('1')
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}