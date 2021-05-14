import React, { useRef, useEffect, useState } from 'react';
import {useCart} from '../CartContext'
import axios from "axios";

export const ProductList = () => {
    const {setItemsInCart} = useCart();
    const [products, setProducts] = useState(null);
  
    useEffect(() => {
      axios 
      .get("https://express-practice.surajgupta07.repl.co/products")
      .then((response) => {
        setProducts(response.data.products)
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
  