import './App.css';
import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar"
import Login from "./components/Authentication/Login"
import Signup from "./components/Authentication/Signup"
import ForgotPassword from "../src/components/ForgotPassword"
import Footer from "../src/components/Footer"
import Notfound from "./components/NotFound/Notfound"
import { CartHeader, Cart} from "../src/components/Cart"
import { ProductList } from "../src/components/Product"
import { Checkout } from "../src/components/Checkout"
import { PrivateRoute } from "./controllers/PrivateRoute"

function App() {
    return (
        <div className="App">
            <div className="app-body">
                <Navbar/>
                <CartHeader/>
                <Routes>
                    <Route path="/" element={< ProductList />}/>
                    <Route path="login" element={< Login />}/> 
                    <Route path="signup" element={< Signup />}/>
                    <Route path="forgot-password" element={< ForgotPassword />}/>
                    <PrivateRoute path="cart" element={< Cart />}/>
                    <PrivateRoute path="/checkout" element={< Checkout />}/>
                    <Route path="*" element={<Notfound />} />
                </Routes>
                <Footer />
            </div>

        </div>
    );
}

export default App;
