import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../src/pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/Home';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import Notfound from './components/NotFound/Notfound';
import { PrivateRoute } from './controllers/PrivateRoute';
import { OrdersPage } from './pages/OrdersPage';
import { usePersistantAuth } from './hooks/usePersistantAuth';

function App() {
    usePersistantAuth();
    return (
        <div className="App">
            <div className="app-body">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route
                        path="/cart"
                        element={
                            <PrivateRoute>
                                <CartPage />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/wishlist"
                        element={
                            <PrivateRoute>
                                <WishlistPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
