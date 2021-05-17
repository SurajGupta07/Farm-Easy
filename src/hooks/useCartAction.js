import axios from "axios";
import { MAIN_URL } from "../dbconnect/dbconnect"
import { useAuth } from "../contexts/AuthContext"
import { ADD_ITEM_TO_CART } from "../reducers/cart-reducer"
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

      return {
            addToCartOnClick,
            isAlreadyInCart
        };
};
