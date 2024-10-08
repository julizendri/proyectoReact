import buzos from './assets/buzos.webp'
import pantalones from './assets/pantalones.webp'
import conjuntos from './assets/conjuntos.webp'
import buzo from './assets/buzo.webp'
import pantalon from './assets/pantalon.webp'
import conjunto from './assets/conjunto.webp'

// categorias

const categorias = [
    { id: 'buzos', nombre: 'buzos', img: buzos, descripcion: 'Buzo de friza de alta calidad' },
    { id: 'pantalones', nombre: 'pantalones', img: pantalones, descripcion: 'Pantalón de friza de alta calidad' },
    { id: 'conjuntos', nombre: 'conjuntos', img: conjuntos, descripcion: 'Buzo y pantalón de friza de alta calidad en conjunto' },
]

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categorias)
        }, 500)
    })
}

export const getCategoriesByID = (categoriaID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categorias.find(cat => cat.id === categoriaID))
        }, 500)
    })
}

// productos

const products = [
    { id: '1', nombre: 'Buzo Paula', precio: 22000, categoria: 'buzos', img: buzo, stock: 3, descripcion: 'Buzo de friza de alta calidad' },
    { id: '2', nombre: 'Pantalón Paula', precio: 20000, categoria: 'pantalones', img: pantalon, stock: 4, descripcion: 'Pantalón de friza de alta calidad' },
    { id: '3', nombre: 'Conjunto Paula', precio: 38000, categoria: 'conjuntos', img: conjunto, stock: 10, descripcion: 'Buzo y pantalón de friza de alta calidad en conjunto' },
    { id: '4', nombre: 'Buzo Koko', precio: 22000, categoria: 'buzos', img: buzo, stock: 3, descripcion: 'Buzo de friza de alta calidad' },
    { id: '5', nombre: 'Pantalón Koko', precio: 20000, categoria: 'pantalones', img: pantalon, stock: 4, descripcion: 'Pantalón de friza de alta calidad' },
    { id: '6', nombre: 'Conjunto Koko', precio: 38000, categoria: 'conjuntos', img: conjunto, stock: 10, descripcion: 'Buzoy pantalón de friza de alta calidad en conjunto' }
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
            resolve(products.filter(prod => prod.categoria === productCategory))
        }, 500)
    })
}