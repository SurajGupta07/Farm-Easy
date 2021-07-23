import axios from "axios";
import {useNavigate} from "react-router-dom";
import {MAIN_URL, CART_URL, WISHLIST_API} from "../dbconnect/dbconnect"
import {useAuth} from "../contexts/AuthContext"
import {ADD_ITEM_TO_CART, REMOVE_FROM_CART, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from "../reducers/cart-reducer"
import {useCart} from "../contexts/CartContext"

export const useCartAction = () => {
    let {login, token} = useAuth();
    let navigate = useNavigate();
    const {dataDispatch} = useCart();
    const addToCartOnClick = async({product}) => {
        if (login) {
            const res = await axios.post(`${MAIN_URL}/cart`, {
                product: { ...product},
              },
              {
                headers: {
                    'Content-Type': 'application/json',  
                    'Authorization': token,
                },
              });

            if (res.data.success) {
                dataDispatch({
                    type: ADD_ITEM_TO_CART,
                    payload: {
                        product: {
                            ...product
                        }
                    }
                });
            }
            return;
        }
        navigate("/login")
    };

    const isAlreadyInCart = (_id) => {
        if (login) {
            return;
        }
    }

    const addToWishlist = async({product}) => {
        if (login) {
            const {status} = await axios.post(`${WISHLIST_API}`, {
                product: { ...product},
            },
            {
              headers: {
                  'Content-Type': 'application/json',  
                  'Authorization': token,
              },
            });

            if (status === 200) {
                dataDispatch({
                    type: ADD_TO_WISHLIST,
                    payload: {
                        product: {
                            ...product
                        }
                    }
                });
            }
            return;
        }
        navigate("/login")
    };

    const removeFromCart = async({_id, product}) => {
        if (login) {
            try {
                const {status} = await axios.delete(`${CART_URL}/${_id}`, {
                    headers: {
                        'Content-Type': 'application/json',  
                        'Authorization': token,
                    },
                      
                });
                if (status === 200) {
                    dataDispatch({
                        type: REMOVE_FROM_CART,
                        payload: {
                            _id: product
                        }
                    })
                }
            } catch (err) {
                console.error(err)
            }
        }
    };

    const removeFromWishlist = async(_id) => {
        if (login) {
            try {
                const {status} = await axios.delete(`${WISHLIST_API}/${_id}`, {
                    headers: {
                        'Content-Type': 'application/json',  
                        'Authorization': token,
                    },
                      
                })
                if (status === 200) {
                    dataDispatch({type: REMOVE_FROM_WISHLIST, payload: {
                            _id
                        }})
                }
            } catch (err) {
                console.error(err)
            }
        }
    }
    return {addToCartOnClick, isAlreadyInCart, removeFromCart, addToWishlist, removeFromWishlist};
};
