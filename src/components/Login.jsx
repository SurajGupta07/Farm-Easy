import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <div>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <input placeholder="Name"></input>
            <button>Login</button>
            <div>
                New user? <Link to="/signup">Signup</Link>
            </div>
            <div>
                <Link to="/forgot-password">Forgot Password</Link>
            </div>
        </div>
    )
}