import { useState, useContext } from 'react';
import { CheckoutItemList } from '../Components/CheckoutItemList/CheckoutItemList';
import { Contacto } from '../Components/Contacto/Contacto';
import { db } from '../firebase';
import { setDoc, doc, updateDoc, increment } from "firebase/firestore";
import { CartContext } from '../context/CartContext';

export const Checkout = () => {
    const [contactInfo, setContactInfo] = useState(null);
    const { clearCart, cart, total } = useContext(CartContext);

    const handleContactSubmit = (info) => {
        setContactInfo(info);
    };

    const handleFinalizePurchase = async () => {

        const orderData = {
            contact: contactInfo,
            items: cart,
            total,
            date: new Date()
        };

        const createCustomOrderId = () => {
            const date = new Date();
            
            const day = String(date.getDate()).padStart(2, '0'); // Asegura que el día tenga 2 dígitos
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Mes (0-11, se suma 1)
            const hours = String(date.getHours()).padStart(2, '0'); // Hora (0-23)
            const minutes = String(date.getMinutes()).padStart(2, '0'); // Minutos (0-59)
        
            const customOrderId = `${day}-${month}_${hours}-${minutes}`;
        
            return customOrderId;
        };

        const customOrderId = createCustomOrderId();


        try {
            await setDoc(doc(db, "orders", customOrderId), orderData);

            await Promise.all(cart.map(async (item) => {
                const productRef = doc(db, "productos", item.id);
                await updateDoc(productRef, {
                    stock: increment(-item.quantity)
                });
            }));

            clearCart();
            setContactInfo(null);

        } catch (error) {
            console.error("Error al enviar la orden o actualizar el stock: ", error);
        }
    };

    return (
        <div className="cuerpo">
            <h1>Checkout</h1>
            <CheckoutItemList />
            {cart.length > 0 && <Contacto onSubmit={handleContactSubmit} />}
            <button className="botonFinalizar" onClick={handleFinalizePurchase} disabled={!contactInfo || cart.length === 0}>
                Finalizar compra
            </button>
        </div>
    );
};