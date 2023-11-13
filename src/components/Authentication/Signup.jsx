import TextField from '@material-ui/core/TextField';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useAuthActions } from '../../hooks/useAuthActions';

export default function Signup() {
    let { email, setEmail, password, setPassword, error } = useAuth();
    let { signupUser } = useAuthActions();
    return (
        <div className="signup-component">
            <div>
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    id="outlined-textarea"
                    label="Enter your Email"
                    placeholder="Enter your Email"
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
                    label="Enter new password"
                    placeholder="Enter new password"
                    multiline
                    variant="outlined"
                    className="input-element"
                />
                <div className="error__validation">{error.password}</div>
            </div>
            <div className="links">
                <Link to="/forgot-password">Forgot Password</Link>
            </div>
            <div className="signup-button">
                <button
                    onClick={() => signupUser(email, password)}
                    className="default-button"
                >
                    Signup
                </button>
            </div>
            <div className="links">
                Have an account? <Link to="/login">SignIn</Link>
            </div>
        </div>
    );
}
