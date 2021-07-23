import axios from "axios";
import {useNavigate} from "react-router-dom";
import {MAIN_URL} from "../dbconnect/dbconnect";
import {useAuth} from "../contexts/AuthContext";

export const useAuthActions = () => {
    let {setLogin, setToken, setError} = useAuth();
    let navigate = useNavigate();
    const signupUser = async(email, password) => {
        try {
            const res = await axios.post(`${MAIN_URL}/signup/new`, {email, password})
            var tokenReceived = res.data.token;
            if (res.status === 200) {
                authenticateUser(email, password)
                setToken(tokenReceived)
            }
        } catch (err) {
            setError(err.response.data.errors)
        }

    function authenticateUser() {
        setLogin(true)
        localStorage?.setItem('login', JSON.stringify({ tokenReceived }));
        navigate("/");
    }
    }

    const loginUser = async (email, password) => {
        try {
            var res = await axios.post(`${MAIN_URL}/login`, {email, password})
            const tokenReceived = res.data.token;
            if(res.status === 200) {
              setLogin(true)
              localStorage?.setItem('login', JSON.stringify({ tokenReceived }));
              navigate("/");
              setToken(tokenReceived);
            }
        }
        catch(err) {
            setError(err.response.data.errors)
        }
    } 

    return {signupUser, loginUser}
};