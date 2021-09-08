import React from 'react';
import cartLogo from './images/cart.png';
import homeLogo from './images/home.png';
import wishlistLogo from './images/wishlist.png';
import { Link } from 'react-router-dom';
import { useAuthActions } from '../../hooks/useAuthActions';
import { useAuth } from '../../contexts/AuthContext';

export default function Navbar(){
	const { logoutUser } = useAuthActions();
	const {token} = useAuth();
    return(
        <div className="nav-container mainNavbar">
			<nav className="navigation container backgroundColor">
			<Link to="/" style={{ textDecoration: 'none', color: 'black' }}><h1 className="nav-brand" style={{fontSize:"1.5rem"}}>Farm Easy</h1></Link>
				<div className="non-bul1let nav-pills">
					{!token && <Link to="/login" className="login__user"><span className="headerLogo buttonLogo">Login</span></Link>}
					{token && <span onClick={logoutUser} className="headerLogo buttonLogo logout__user">Logout</span>}{' '}
					<Link to="/"><img src={homeLogo} alt='Logo' className="headerLogo buttonLogo"/></Link> {' '}
					<Link to="/cart"><img src={cartLogo} alt='Logo' className="headerLogo buttonLogo"/></Link> {' '}
    				<Link to="/wishlist"><img src={wishlistLogo} alt='Logo' className="headerLogo buttonLogo"/></Link> {' '}		
        		</div>
			</nav>
		</div>
    )
}