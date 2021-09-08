import './App.css';
import {Routes, Route} from "react-router-dom";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from './pages/SignupPage';
import HomePage from './pages/Home';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import ForgotPassword from "../src/components/ForgotPassword"
import Notfound from "./components/NotFound/Notfound"
import {PrivateRoute} from "./controllers/PrivateRoute"
import { OrdersPage } from './pages/OrdersPage';

function App() {
    return (
        <div className="App">
            <div className="app-body">
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="login" element={<LoginPage />}/>
                    <Route path="signup" element={<SignupPage />}/>
                    <Route path="forgot-password" element={<ForgotPassword />}/>
                    <Route path="/orders" element={<OrdersPage />} />
                    <PrivateRoute path="cart" element={<CartPage />}/>
                    <PrivateRoute path="/wishlist" element={<WishlistPage />}/>
                    <Route path="*" element={< Notfound />}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
