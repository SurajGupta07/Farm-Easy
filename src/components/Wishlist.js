import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import { WISHLIST_API } from "../dbconnect/dbconnect"

export function Wishlist(){
  
  let [wishlistItems, setItemsInWishlist ] = useState("")
  function ShowWishListItem() {
    useEffect(() => {
      axios 
      .get(`${WISHLIST_API}`)
      .then((response) => {
        setItemsInWishlist(response.data.wishlist)
      })
    }, [])
    return wishlistItems.map(({ name, price, image, quantity, _id }) => (
        <div className="card card-body card-spacing">
            <img src={image} alt="Logo" className="card-img"/>
            <h2 className="card-title">{name}</h2>
            <p className="card-text">Rs.{" "}{price}</p>
            <button className="cssCircle plusSign">+</button>{" "}
            {quantity}{" "}
            <button className="cssCircle minusSign">-</button>
        </div>
      ));
  }

  return <div>
      <h1 className="main-header">Wishlist</h1>
      <ul>
          {wishlistItems
              ? ShowWishListItem(wishlistItems)
              : <div>Loading wishlist Items...</div>}
      </ul>
  </div>
  }