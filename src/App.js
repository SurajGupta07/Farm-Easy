import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import { CartHeader, Cart} from "../src/components/Cart"
import { ProductList } from "../src/components/Product"
import { Checkout } from "../src/components/Checkout"
import Navbar from "./components/Header/Navbar"
import Login from "./components/Authentication/Login"
import Signup from "./components/Authentication/Signup"
import ForgotPassword from "../src/components/ForgotPassword"
import { useState } from 'react';
import Footer from "../src/components/Footer"

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
                <Footer />
            </div>

        </div>
    );
}

export default App;
