import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Checkout, CartHeader, ProductList, Cart} from '../src/components/Cart'
import Navbar from "../src/components/Navbar"
import Login from "../src/components/Login"
import Signup from "../src/components/Signup"
import ForgotPassword from "../src/components/ForgotPassword"
import { useState } from 'react';

function PrivateRoute({ login, ...props }){
    return login ? <Route {...props} /> : <Navigate replace to="/login" /> 
}

function App() {
    const [login, setLogin] = useState(false)
    return (
        <div className="App">
            <div className="app-body">
            <button onClick={() => {setLogin(login => !login)}}>{login ? "logout" : "login"}</button>
                <Navbar/>
                <CartHeader/>
                <Routes>
                    <Route path="/" element={< ProductList />}/>
                    <Route path="cart" element={< Cart />}/>
                    <Route path="login" element={< Login />}/> 
                    <Route path="signup" element={< Signup />}/>
                    <Route path="forgot-password" element={< ForgotPassword />}/>
                    <PrivateRoute path="/checkout" login={login} element={< Checkout />}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
