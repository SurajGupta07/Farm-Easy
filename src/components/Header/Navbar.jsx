import React from 'react';
import cartLogo from './images/cart.png';
import homeLogo from './images/home.png';
import wishlistLogo from './images/wishlist.png';
import { Link } from 'react-router-dom';
import { useAuthActions } from '../../hooks/useAuthActions';

export default function Navbar(){
	const { logoutUser } = useAuthActions()
    return(
        <div className="nav-container mainNavbar">
			<nav className="navigation container backgroundColor">
			<Link to="/" style={{ textDecoration: 'none', color: 'black' }}><h1 className="nav-brand" style={{fontSize:"1.5rem"}}>Farm Easy</h1></Link>
				<div className="non-bul1let nav-pills">
					<Link to="/"><img src={homeLogo} alt='Logo' className="headerLogo buttonLogo"/></Link> {' '}
					<Link to="/cart"><img src={cartLogo} alt='Logo' className="headerLogo buttonLogo"/></Link> {' '}
    				<Link to="/wishlist"><img src={wishlistLogo} alt='Logo' className="headerLogo buttonLogo"/></Link> {' '}		
					<span onClick={logoutUser}>Logout</span>	
        		</div>
			</nav>
		</div>
    )
}