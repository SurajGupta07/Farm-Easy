import React, { useState, useContext } from 'react';
import {createContext} from 'react';

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [login, setLogin] = useState(false);

    return(
        <>
        <AuthContext.Provider value={{ login, setLogin }}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}