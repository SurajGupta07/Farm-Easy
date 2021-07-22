import React from 'react';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { useAuthActions } from '../../hooks/useAuthActions';

export default function Login() {
    let {loginUser} = useAuthActions();
    return (
        <div className="login-component">
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Enter your Email or Username"
                    placeholder="Enter your Email or Username"
                    multiline
                    variant="outlined"
                    className="input-element"/>
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Password"
                    placeholder="Password"
                    multiline
                    variant="outlined"
                    className="input-element"/>
            </div>
            <div className="links">
                <Link href="/forgot-password">
                    Forgot Password
                </Link>
            </div>
            <div className="login-button">
                <button className="default-button" onClick={() => loginUser()}>Login</button>
            </div>
            <div style={{textAlign:'center', marginTop:"1rem"}}>
                <p>Password: Click on <strong>Login</strong> & navigate</p>
            </div>
            <div className="links">
                New user?{" "}
                <Link href="/signup">
                    SignUp
                </Link>
            </div>
        </div>
    )
}