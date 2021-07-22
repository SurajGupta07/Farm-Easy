import axios from "axios";
import {useNavigate} from "react-router-dom";
import {MAIN_URL} from "../dbconnect/dbconnect";
import {useAuth} from "../contexts/AuthContext";

export const useAuthActions = () => {
    let {setLogin, setToken} = useAuth();
    let navigate = useNavigate();
    const signupUser = async(email, password) => {
        try {
            const res = await axios.post(`${MAIN_URL}/signup/new`, {email, password})
            var token = res.data.token;
            if (res.status === 200) {
                authenticateUser(email, password)
                setToken(token)
            }
        } catch (err) {
            console.log(err)
        }

    function authenticateUser() {
        setLogin(true)
        localStorage?.setItem('login', JSON.stringify({ login: true, token }));
        navigate("/");
    }
    }

    const loginUser = async (email, password) => {
        try {
            const res = await axios.post(`${MAIN_URL}/login`, {email, password})
            const token = res.data.token;
            if(res.status === 200) {
              setLogin(true)
              localStorage?.setItem('login', JSON.stringify({ login: true, token }));
              navigate("/");
            }
        }
        catch(err) {
            console.log(err)
        }
    } 

    return {signupUser, loginUser}
};