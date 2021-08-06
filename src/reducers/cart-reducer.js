export const initialState = {
    cartItems: [],
    wishlist: []
}

export const ADD_ITEM_TO_CART = "addToCartItem";
export const ADD_TO_WISHLIST = "addToWishList";
export const REMOVE_FROM_WISHLIST = "removeWishlistItem"
export const REMOVE_FROM_CART = "removeCartItem";
export const INCREASE_QUANTITY = "increaseQuantity"
export const DECREASE_QUANTITY = "decreaseQuantity"

export const cartReducer = (state, {type, payload, _id, product}) => {
    const {cartItems, wishlist} = state;
    switch (type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: cartItems.concat(payload.product)
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: cartItems.filter((product) => product._id !== _id)
            };
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: wishlist.concat(payload.product)
            };
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlist: wishlist.filter((product) => product._id !== _id)
            }
        default:
            return state;
    }

};