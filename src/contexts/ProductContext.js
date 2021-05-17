import React, { useEffect, useState, useContext } from 'react';
import {createContext} from 'react';
import { MAIN_URL } from "../dbconnect/dbconnect"
import axios from "axios";
export const ProductContext = createContext();

export function ProductProvider({children}){
    const [products, setProducts] = useState(null);

    useEffect(() => {
      axios 
      .get(`${MAIN_URL}/products`)
      .then((response) => {
        setProducts(response.data.products)
      })
    })
    return(
        <>
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
        </>
    )
}

export function useProduct(){
    return useContext(ProductContext)
}