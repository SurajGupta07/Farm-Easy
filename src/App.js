import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Checkout, CartHeader, ProductList, Cart } from '../src/components/Cart'
import Navbar from "../src/components/Navbar"
import Login from "../src/components/Login"
import Signup from "../src/components/Signup"
import ForgotPassword from "../src/components/ForgotPassword"

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
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="forgot-password" element={<ForgotPassword />} />
      			</Routes>
			</div>
        
    </div>
  );
}

export default App;
