import React, { useRef, useEffect } from 'react';
import {useCart} from '../CartContext'

const products = [
  {
    id: 1,
    name: 'Baby Corn',
    image: 'https://5.imimg.com/data5/YC/NA/SS/SELLER-70813520/frozen-baby-corn-cobs-500x500.jpg',
    price: 'Rs. 50'
  },
  {
    id: 2,
    name: 'Tomamto',
    image: 'https://images.unsplash.com/photo-1606588260160-0c4707ab7db5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1316&q=80',
    price: 'Rs. 20'
  },
  {
    id: 3,
    name: 'Carrot',
    image: 'https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80',
    price: 'Rs. 40'
  },
  {
    id: 4,
    name: 'Potato',
    image: 'https://images.unsplash.com/photo-1604752466673-f73b5b0daa75?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    price: 'Rs. 25'
  },
  {
    id: 5,
    name: 'Spanich',
    image: 'https://fillyourplate.org/blog/wp-content/uploads/2020/01/Spanich-900x650.png',
    price: 'Rs. 15'
  },
  {
    id: 6,
    name: 'Lemon',
    image: 'https://images.unsplash.com/photo-1593620286877-5da58b04f3a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    price: 'Rs. 5'
  },
  {
    id: 7,
    name: 'Onion',
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    price: 'Rs. 90'
  }
]
 
function ShowItem({item}){
  return(
    <div key={item.name} className="card card-body card-spacing">
      <img src={item.image} alt="Logo" className="card-img" />
      <h2 className="card-title">{item.name}</h2>
      <p className="card-text">{item.price}</p>
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
  <h1 className="sub-header">Cart</h1>
  <ul>
    {itemsInCart.map((item) => (<li><ShowItem item={item} /></li>))}
  </ul>
  {/* <Checkout /> */}
  </>
}

export const ProductList = () => {
  const {setItemsInCart} = useCart();
    return(
        <div>
          <h1 className="sub-header">Products</h1>
          {products.map((item) => (
          <div key={item.id} className="card card-body card-spacing">
            <img src={item.image} alt="Logo" className="card-img" />
            <h2 className="card-title">{item.name}</h2>
            <p className="card-text">{item.price}</p>
            <button className="default-button" onClick={() => setItemsInCart((items) => [...items, item ])}>Add to Cart</button>
          </div>
          ))}
        </div>
    );
}
