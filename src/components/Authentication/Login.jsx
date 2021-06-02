import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export default function Login() {
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
                <Button variant="contained" color="primary" style={{backgroundColor: "#A78BFA !important"}}>
                    Login
                </Button>
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