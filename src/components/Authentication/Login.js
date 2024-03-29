import TextField from '@material-ui/core/TextField';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useAuthActions } from '../../hooks/useAuthActions';

export default function Login() {
    let { loginUser } = useAuthActions();
    let { email, setEmail, password, setPassword, error } = useAuth();
    return (
        <div className="login-component">
            <div>
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    id="outlined-textarea"
                    label="Enter your Email or Username"
                    placeholder="Enter your Email or Username"
                    multiline
                    variant="outlined"
                    className="input-element"
                />
                <div className="error__validation">{error.email}</div>
            </div>
            <div>
                <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    id="outlined-textarea"
                    label="Password"
                    placeholder="Password"
                    multiline
                    variant="outlined"
                    className="input-element"
                />
                <div className="error__validation">{error.password}</div>
            </div>
            <div className="links">
                <Link tp="/forgot-password">Forgot Password</Link>
            </div>
            <div className="login-button">
                <button
                    className="default-button"
                    onClick={() => loginUser(email, password)}
                >
                    Login
                </button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <p>
                    Password: Click on <strong>Login</strong> & navigate
                </p>
            </div>
            <div className="links">
                New user? <Link to="/signup">SignUp</Link>
            </div>
            <div className="links">
                <p>
                    <strong>Email:</strong> suraj@gmail.com
                </p>
                <p>
                    <strong>Password:</strong> 123456
                </p>
            </div>
        </div>
    );
}
