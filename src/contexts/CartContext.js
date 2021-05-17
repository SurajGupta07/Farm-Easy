import React, {  useState, useContext, useEffect, useReducer } from 'react';
import { createContext } from 'react';
import { MAIN_URL } from "../dbconnect/dbconnect"
import axios from "axios";
import { initialState, cartReducer } from "../reducers/cart-reducer";
export const CartContext = createContext();

export function CartProvider({children}){
    const [{ cartItems, wishlist }, dispatch] = useReducer(cartReducer, initialState);
    const [itemsInCart, setItemsInCart] = useState([]);
    useEffect(() => {
      axios 
      .get(`${MAIN_URL}/cart`)
      .then((response) => {
        setItemsInCart(response.data.cart)
      })
    })
    return(
        <>
        <CartContext.Provider value={{ itemsInCart, setItemsInCart, cartItems, wishlist, dataDispatch: dispatch }}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export function useCart(){
    return useContext(CartContext)
}