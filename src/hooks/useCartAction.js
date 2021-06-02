import axios from "axios";
import { MAIN_URL } from "../dbconnect/dbconnect"
import { useAuth } from "../contexts/AuthContext"
import { ADD_ITEM_TO_CART, REMOVE_FROM_CART } from "../reducers/cart-reducer"
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

    const removeFromCart = async (_id) => {
      if (login) {
        const res = await axios.delete(
          `${MAIN_URL}/cart/item/delete/${_id}`
        );

        if(res.data.success){
          dataDispatch({
            type: REMOVE_FROM_CART,
            payload: {
              product: _id,
            },
          })
          return;
        }
      }
    }
      return {
            addToCartOnClick,
            isAlreadyInCart,
            removeFromCart
        };
};
