import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
};
