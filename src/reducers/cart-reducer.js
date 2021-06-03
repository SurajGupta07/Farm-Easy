export const initialState = {
    cartItems: [],
    wishlist: []
}

export const ADD_ITEM_TO_CART = "addToCartItem";
export const ADD_TO_WISHLIST = "addToWishList";
export const REMOVE_FROM_CART = "removeCartItem";
export const INCREASE_QUANTITY = "increaseQuantity"
export const DECREASE_QUANTITY = "decreaseQuantity"

export const cartReducer = (state, {type, payload, _id, product}) => {
    const { cartItems, wishlist } = state;
    switch (type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.concat(payload.product)
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: cartItems.filter((product) => product._id !== _id)
            };
        case ADD_TO_WISHLIST: 
            return{
                ...state,
                wishlist: wishlist.concat(product)
            };
        default:
            return state;
            // case INCREASE_QUANTITY:     return{         ...state,         cartItems:
            // cartItems.map((item) => {             return item.id === id ? { ...item, qty:
            // item.qty + 1 } : item;         })     }; case DECREASE_QUANTITY:     return{
            //        ...state,         cartItems: cartItems.map((item) => {
            // return item.id === id ? { ...item, qty: item.qty - 1} : item;         })
            // };
    }

};