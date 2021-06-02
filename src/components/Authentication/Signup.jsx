import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export default function Signup(){
    return(
        <div className="signup-component">
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Enter your Name"
                    placeholder="Enter your Name"
                    multiline
                    variant="outlined"
                    className="input-element"/>
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Enter your Email"
                    placeholder="Enter your Email"
                    multiline
                    variant="outlined"
                    className="input-element"/>
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Enter new password"
                    placeholder="Enter new password"
                    multiline
                    variant="outlined"
                    className="input-element"/>
            </div>
            <div>
                <TextField
                    id="outlined-textarea"
                    label="Re-Enter new password"
                    placeholder="Re-Enter new password"
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
                <Button variant="contained" color="primary">
                    Login
                </Button>
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