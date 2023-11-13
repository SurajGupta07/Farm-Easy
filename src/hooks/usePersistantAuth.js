import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

export const usePersistantAuth = () => {
    const { setLogin, setToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const login = await JSON.parse(localStorage.getItem('login'));
            if (login !== undefined) {
                setLogin(true);
                setToken(login?.tokenReceived);
            } else if(login === undefined){
                navigate('/')
            }
        })();
    });
};
