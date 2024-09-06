import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { getProducts } from '../../asyncMock'
import { ItemList } from './ItemList/ItemList'

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    })

    return (
        <div className="itemsContainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}