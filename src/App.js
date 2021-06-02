import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/Header/Navbar"
import Login from "./components/Authentication/Login"
import Signup from "./components/Authentication/Signup"
import ForgotPassword from "../src/components/ForgotPassword"
import Footer from "../src/components/Footer"
import Notfound from "./components/NotFound/Notfound"
import { CartHeader, Cart} from "../src/components/Cart"
import { ProductList } from "../src/components/Product"
import { Checkout } from "../src/components/Checkout"
import { useAuth } from "../src/contexts/AuthContext";

function PrivateRoute({ login, ...props }){
    return login ? <Route {...props} /> : <Navigate replace to="/login" /> 
}

function App() {
    let { login, setLogin } = useAuth();
    return (
        <div className="App">
            <div className="app-body">
            <button onClick={() => {setLogin(login => !login)}}>{login ? "logout" : "login"}</button>
                <Navbar/>
                <CartHeader/>
                <Routes>
                    <Route path="/" element={< ProductList />}/>
                    <Route path="login" element={< Login />}/> 
                    <Route path="signup" element={< Signup />}/>
                    <Route path="forgot-password" element={< ForgotPassword />}/>
                    <PrivateRoute path="cart" login={login} element={< Cart />}/>
                    <PrivateRoute path="/checkout" login={login} element={< Checkout />}/>
                    <Route path="*" element={<Notfound />} />
                </Routes>
                <Footer />
            </div>

        </div>
    );
}

export default App;
