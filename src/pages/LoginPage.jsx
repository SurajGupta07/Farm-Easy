import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Authentication/Login"

const LoginPage = () => {
    return(
        <>
            <Navbar />
            <div className="auth__page">
                <Login />
            </div>
            <div className="footer__position">
                <Footer />
            </div>
        </>
    )
}

export default LoginPage;