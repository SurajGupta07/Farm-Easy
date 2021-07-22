import React, { useState, useContext } from 'react';
import {createContext} from 'react';

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState();
    
    return(
        <>
        <AuthContext.Provider value={{ login, setLogin, email, setEmail, password, setPassword, token, setToken }}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}