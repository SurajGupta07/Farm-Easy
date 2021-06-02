import React from 'react';
import {useCart} from '../contexts/CartContext'
import {useCartAction} from "../hooks/useCartAction"

export function CartHeader() {
    const {itemsInCart} = useCart();
    return <h3 className="sub-header">Items In Cart {itemsInCart.length}</h3>;
}

function ShowItem() {
    const {itemsInCart} = useCart();
    const {removeFromCart} = useCartAction();
    console.log(itemsInCart)
    return itemsInCart.map(({name, price, image}) => (
        <div className="card card-body card-spacing">
            <img src={image} alt="Logo" className="card-img"/>
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{price}</p>
            <button className="cssCircle plusSign">+</button>{" "}
            Quantity{" "}
            <button className="cssCircle minusSign">-</button>
            <button
                className="default-button"
                onClick={() => removeFromCart({name, price, image})}>Remove Item</button>
        </div>
    ));
}

export function Cart() {
    const {itemsInCart} = useCart();
    return <div>
        <h1 className="main-header">Cart</h1>
        <ul>
            {itemsInCart
                ? ShowItem(itemsInCart)
                : <div>Loading Cart Items...</div>}
        </ul>
    </div>
}