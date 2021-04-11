import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Checkout, CartHeader, ProductList, Cart } from '../src/components/Cart'
import Navbar from "../src/components/Navbar"

function App() {
  return (
    <div className="App">
			<div className="app-body">
				<Navbar />
				<CartHeader />
				<Routes>
        			<Route path="/" element={<ProductList />} />
        			<Route path="cart" element={<Cart />} />
					<Route path="checkout" element={<Checkout />} />
      			</Routes>
			</div>
        
    </div>
  );
}

export default App;
