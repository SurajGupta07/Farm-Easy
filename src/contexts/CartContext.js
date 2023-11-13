import { useState, useContext, useReducer } from 'react';
import { createContext } from 'react';
import { initialState, cartReducer } from '../reducers/cart-reducer';
export const CartContext = createContext();

export function CartProvider({ children }) {
    let [{ cartItems, wishlist }, dispatch] = useReducer(
        cartReducer,
        initialState
    );
    let [itemsInCart, setItemsInCart] = useState([]);
    let [wishlistItems, setWishlistItems] = useState([]);
    let [totalAmount, setTotalAmount] = useState();
    let [orderId, setOrderId] = useState();
    let [paymentId, setPaymentId] = useState();

    return (
        <CartContext.Provider
            value={{
                itemsInCart,
                setItemsInCart,
                cartItems,
                wishlist,
                wishlistItems,
                setWishlistItems,
                dataDispatch: dispatch,
                totalAmount,
                setTotalAmount,
                orderId,
                setOrderId,
                paymentId,
                setPaymentId
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
