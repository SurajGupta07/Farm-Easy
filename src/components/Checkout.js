import React, { useRef, useEffect } from 'react';

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