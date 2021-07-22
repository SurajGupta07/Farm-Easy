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
            console.log(token)
            console.log(res.data)
            if (res.status === 201) {
                loginUser(email, password)
                setToken(token)
            }
        } catch (err) {
            console.log(err)
        }

    function loginUser() {
        setLogin(true)
        localStorage?.setItem('login', JSON.stringify({ login: true, token }));
        navigate("/cart")
    }
    }

    const loginUser = () => {
        console.log('working')
    } 

    return {signupUser, loginUser}
};