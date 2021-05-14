import React, { useRef, useEffect, useState } from 'react';
import {useCart} from '../CartContext'
import axios from "axios";

function ShowItem({item}){
  return(
    <div className="card card-body card-spacing">
      <img src={item.image} alt="Logo" className="card-img" />
      <h2 className="card-title">{item.name}</h2>
      <p className="card-text">{item.price}</p>
      <button>+</button>
      {item.quantity}
      <button>-</button>
      <button className="default-button">Remove Item</button>
    </div>
  )
}

export function Checkout(){
  const inputRef = useRef(null);

  function handleCheckout(){
    const cardDetails = inputRef.current.value;
    console.log(cardDetails)
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [])
  return(
    <>
      <label>Credit Card Number: <input ref={inputRef} type="text" /></label>
      <button className="default-button" onClick={handleCheckout}>Checkout</button>
    </>
  )
}

export function CartHeader() {
  const { itemsInCart } = useCart();
  return <h3 className="sub-header">Items in Cart {itemsInCart.length}</h3>;
}

export function Cart(){ 
  const {itemsInCart} = useCart();
  return <>
  <h1 className="main-header">Cart</h1>
  <ul>
    {itemsInCart.map((item) => (<li><ShowItem item={item} /></li>))}
  </ul>
  </>
}


export const ProductList = () => {
  const {setItemsInCart} = useCart();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios 
    .get("https://express-practice.surajgupta07.repl.co/products")
    .then((response) => {
      setProducts(response.data.products)
      console.log(response.data.products)
    })
  })

  function getProductList(){
    return products.map(
      ({id, name, price, image, availability}) => (
        <div key = { id } className="card card-body card-spacing">
          <img src={image} alt="Logo" className="card-img" />
          <h2 className="card-title">{name}</h2>
          <p className="card-text">{price}</p>
          <p className="card-text">{availability}</p>
          <button className="default-button" onClick={function(e){
              setItemsInCart((product) => [...product, product ])
            }}>Add to Cart</button>
        </div>
      )
    );
  }

  return(
    <div>
      <h1>Products</h1>
      {products ? getProductList(products) : <div>Loading Products...</div>}
    </div>
  )

}
