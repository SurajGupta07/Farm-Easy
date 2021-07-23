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
            <Footer />
        </>
    )
}

export default LoginPage;