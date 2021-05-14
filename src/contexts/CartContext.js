import React, {  useState, useContext } from 'react';
import {createContext} from 'react';
export const CartContext = createContext();

export function CartProvider({children}){
    const [itemsInCart, setItemsInCart] = useState([]);
    return(
        <>
        <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export function useCart(){
    return useContext(CartContext)
}