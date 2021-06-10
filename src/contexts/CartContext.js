import {  useState, useContext, useEffect, useReducer } from 'react';
import { createContext } from 'react';
import { initialState, cartReducer } from "../reducers/cart-reducer";
export const CartContext = createContext();

export function CartProvider({children}){
    let [ {cartItems, wishlist}, dispatch] = useReducer(cartReducer, initialState);
    let [itemsInCart, setItemsInCart] = useState([]);
    let [wishlistItems, setWishlistItems] = useState([]);
  
    return(   
      <CartContext.Provider value={{ itemsInCart, setItemsInCart, cartItems, wishlist, wishlistItems, setWishlistItems, dataDispatch: dispatch }}>
          {children}
      </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext)
}