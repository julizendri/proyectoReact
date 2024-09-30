import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        const existingItemIndex = cart.findIndex(prod => prod.id === item.id);
        
        if (existingItemIndex > -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart(prev => [...prev, { ...item, quantity }]);
        }
    };

    const ClearCart = () => {
        setCart([]);
    }

    const removeItem = (itemID) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemID);
        setCart(cartUpdate);
    };

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0).toFixed(2);

    return (
        <CartContext.Provider value={{ cart, addItem, ClearCart, removeItem, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
}
