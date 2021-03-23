import './App.css';
import React from 'react';
import {useState} from 'react';
import {Checkout, CartHeader, ProductList, Cart } from '../src/components/Cart'

function App() {
  const [route, setRoute] = useState("products");
  return (
    <div className="App">
      <h1 className="headerTitle">Farm Easy</h1>
			<div className="app-body">
				<div>
					<button	onClick={() => setRoute("products")} className="default-button add-spacing">
						Products
					</button >
          <button	onClick={() => setRoute("cart")} className="default-button add-spacing">
						Cart
					</button>
					<button	onClick={() => setRoute("checkout")} className="default-button add-spacing">
						Checkout
					</button>
				</div>
				<CartHeader />
				{ route === "checkout" && <Checkout />}
				{route === "cart" && <Cart />}
				{route === "products" && <ProductList />}
			</div>
        
    </div>
  );
}

export default App;
