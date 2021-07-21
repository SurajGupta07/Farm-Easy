import axios from "axios";
import {useEffect} from 'react';
import {MAIN_URL} from "../dbconnect/dbconnect";
import {useCart} from "../contexts/CartContext";

export const useCartItems = () => {
    let {setItemsInCart, itemsInCart} = useCart();
    useEffect(() => {
        (async() => {
            const response = await axios.get(`${MAIN_URL}/cart`)
            if (response.status === 200) {
                setItemsInCart(response.data.cart)
            }
        })()
    }) // eslint-disable-line react-hooks/exhaustive-deps

    return {itemsInCart}
}