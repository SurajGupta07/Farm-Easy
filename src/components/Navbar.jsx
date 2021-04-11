import React from 'react';
import cartLogo from './images/cart.png';
import homeLogo from './images/home.png';
import wishlistLogo from './images/wishlist.png';
import { Link } from 'react-router-dom';


export default function Navbar(){
    return(
        <div className="nav-container mainNavbar">
			<nav className="navigation container backgroundColor">
				<h1 className="nav-brand" style={{fontSize:"1.5rem"}}>Farm Easy</h1>
				<div className="non-bullet nav-pills">
					<Link to="/"><img src={homeLogo} alt='Logo' className="headerLogo buttonLogo"/></Link> {' '}
					<Link to="cart"><img src={cartLogo} alt='Logo' className="headerLogo buttonLogo"/></Link> {' '}
    				<Link to="checkout"><img src={wishlistLogo} alt='Logo' className="headerLogo buttonLogo"/></Link>					
        		</div>
			</nav>
		</div>
    )
}