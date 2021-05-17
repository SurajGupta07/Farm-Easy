export const initialState = {
    cartItems: [],
    wishlist: []
}

export const ADD_ITEM_TO_CART = "addToCartItem";
export const REMOVE_FROM_CART = "removeCartItem";
export const INCREASE_QUANTITY = "increaseQuantity"
export const DECREASE_QUANTITY = "decreaseQuantity"

export const cartReducer = (state, {type, product}) => {
    const { cartItems } = initialState;
    switch(type) {
        case ADD_ITEM_TO_CART:
            return {
            ...state,
            cartItems: cartItems.concat(product)
            };

        default: 
            break;
        // case REMOVE_FROM_CART:
        //     return{
        //         ...state,
        //         cartItems: cartItems.filter((item) => item.id != id)
        //     };
        // case INCREASE_QUANTITY: 
        //     return{
        //         ...state,
        //         cartItems: cartItems.map((item) => {
        //             return item.id === id ? { ...item, qty: item.qty + 1 } : item;
        //         })
        //     };
        // case DECREASE_QUANTITY:
        //     return{
        //         ...state,
        //         cartItems: cartItems.map((item) => {
        //             return item.id === id ? { ...item, qty: item.qty - 1} : item;
        //         })
        //     };
    }
            
};