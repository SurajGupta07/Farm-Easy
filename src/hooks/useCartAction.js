import axios from "axios";
import { MAIN_URL, CART_URL, WISHLIST_API } from "../dbconnect/dbconnect"
import { useAuth } from "../contexts/AuthContext"
import { ADD_ITEM_TO_CART, REMOVE_FROM_CART, ADD_TO_WISHLIST } from "../reducers/cart-reducer"
import { useCart } from "../contexts/CartContext"

export const useCartAction = () => {
    let { login } = useAuth();
    const { dataDispatch } = useCart();
    const addToCartOnClick = async ({product}) => {
        if (login) {
          const res = await axios.post(`${MAIN_URL}/cart`, {
            product: {
              ...product,
            },
          });
    
          if (res.data.success) {
            dataDispatch({
              type: ADD_ITEM_TO_CART,
              payload: {
                product: {...product},
              },
            });
          }
          return;
        }
      };

    const isAlreadyInCart = (_id) => {
        if(login){
         return;
        }
    }

    const addToWishlist = async ({product}) => {
      if (login) {
        const res = await axios.post(`${WISHLIST_API}`, {
          product: {
            ...product,
          },
        });
  
        if (res.data.success) {
          dataDispatch({
            type: ADD_TO_WISHLIST,
            payload: {
              product: {...product},
            },
          });
        }
        return;
      }
    };


    const removeFromCart = async ({_id, product}) => {
      if (login) {
        try{
          const { status } = await axios.delete(
            `${CART_URL}/${_id}`,
          );
          if(status === 200){
            dataDispatch({
              type: REMOVE_FROM_CART,
              payload: {
                _id: product
              }
            })
          }
        }
         catch (err) {
          console.error(err)
        }
      }
    }
      return {
        addToCartOnClick,
        isAlreadyInCart,
        removeFromCart,
        addToWishlist
      };
};
