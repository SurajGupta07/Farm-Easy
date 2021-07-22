import React, { useState, useContext } from 'react';
import {createContext} from 'react';

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [login, setLogin] = useState(false);
    const [email, setSignupEmail] = useState('');
    const [password, setSignupPassword] = useState('');
    const [token, setToken] = useState();
    
    return(
        <>
        <AuthContext.Provider value={{ login, setLogin, email, setSignupEmail, password, setSignupPassword, token, setToken }}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}