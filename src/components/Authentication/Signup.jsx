import React from 'react';
import {useAuth} from '../../contexts/AuthContext';
import { useAuthActions } from '../../hooks/useAuthActions';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

export default function Signup() {
    let {email, setSignupEmail, password, setSignupPassword} = useAuth();
    let {signupUser} = useAuthActions();
    return (
        <div className="signup-component">
            <div>
                <TextField onChange={(e) => setSignupEmail(e.target.value)}
                    value={email}
                    id="outlined-textarea"
                    label="Enter your Email"
                    placeholder="Enter your Email"
                    multiline
                    variant="outlined"
                    className="input-element"/>
            </div>
            <div>
                <TextField onChange={(e) => setSignupPassword(e.target.value)}
                    value = {password}
                    id="outlined-textarea"
                    label="Enter new password"
                    placeholder="Enter new password"
                    multiline
                    variant="outlined"
                    className="input-element"/>
            </div>
            <div className="links">
                <Link href="/forgot-password">
                    Forgot Password
                </Link>
            </div>
            <div className="signup-button">
                <button onClick={() => signupUser(email, password)} className="default-button">Signup</button>
            </div>
            <div className="links">
                Have an account?{" "}
                <Link href="/login">
                    SignIn
                </Link>
            </div>
        </div>
    )
}