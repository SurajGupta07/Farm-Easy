import axios from "axios";
import {useEffect} from 'react';
import {MAIN_URL} from "../dbconnect/dbconnect";
import {useCart} from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

export const useCartItems = () => {
    const {token} = useAuth();
    let {setItemsInCart, itemsInCart} = useCart();
    useEffect(() => {
        (async() => {
            const response = await axios.get(`${MAIN_URL}/cart`, {
                headers: {
                  authorization: token,
                },
              })
            if (response.status === 200) {
                setItemsInCart(response.data.cart)
            }
        })()
    })

    return {itemsInCart}
}