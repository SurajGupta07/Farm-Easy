import axios from "axios";
import {useEffect} from 'react';
import {WISHLIST_API} from "../dbconnect/dbconnect"
import {useCart} from "../contexts/CartContext";

export const useWishlistItems = () => {
    let {wishlistItems, setWishlistItems} = useCart('')
    useEffect(() => {
        (async() => {
            const response = await axios.get(`${WISHLIST_API}`)
            if (response.status === 200) {
                setWishlistItems(response.data.wishlist)
            }
        })()
    })

    return {wishlistItems}
}