import './App.css';
import React from 'react';
import {useState} from 'react';
import {Checkout, CartHeader, ProductList, Cart } from '../src/components/Cart'
import cartLogo from './images/cart.png';
import homeLogo from './images/home.png';
import wishlistLogo from './images/wishlist.png';


function App() {
  const [route, setRoute] = useState("itemsInCart");
  return (
    <div className="App">
			<div className="app-body">
				<div className="nav-container mainNavbar">
					<nav className="navigation container backgroundColor">
						<h1 className="nav-brand" style={{fontSize:"1.5rem"}}>Farm Easy</h1>
						<div className="non-bullet nav-pills">
							<button	onClick={() => setRoute("itemsInCart")} className="buttonLogo">
								<img src={homeLogo} className="headerLogo" alt="Home"></img>
							</button >
							<button	onClick={() => setRoute("cart")} className="buttonLogo">
								<img src = {cartLogo} className="headerLogo" alt="Cart"></img>
							</button>
							<button	onClick={() => setRoute("checkout")} className="buttonLogo">
								<img src={wishlistLogo} className="headerLogo" alt="Wishlist"></img>
							</button>
						</div>
  					{/* <div>Items in Cart {}</div> */}
					</nav>
				</div>
				<CartHeader />
				{ route === "checkout" && <Checkout />}
				{route === "cart" && <Cart />}
				{route === "itemsInCart" && <ProductList />}
			</div>
        
    </div>
  );
}

export default App;
