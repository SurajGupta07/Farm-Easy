import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup(){
    return(
        <div>
            <input placeholder="Name"></input>            
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
            <input placeholder="Re-type New Password"></input>
            <button>Signup</button>
            <div>
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </div>
    )
}