import buzo from './assets/buzos.png'
import pant from './assets/pants.png'
import conjunto from './assets/conjunto.png'

const products = [
    { id: '1', nombre: 'Buzo', precio: 22000, categoria: 'arriba', img: buzo, stock: 3, descripcion: 'Buzo de friza de alta calidad' },
    { id: '2', nombre: 'Pantalón', precio: 20000, categoria: 'abajo', img: pant, stock: 4, descripcion: 'Buzo de friza de alta calidad' },
    { id: '3', nombre: 'Conjunto', precio: 38000, categoria: 'conjunto', img: conjunto, stock: 10, descripcion: 'Buzo de friza de alta calidad' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.categoria === productCategory))
        }, 500)
    })
}