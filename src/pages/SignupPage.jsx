import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";
import Signup from "../components/Authentication/Signup";

const SignupPage = () => {
    return(
        <>
            <Navbar />
            <div className="auth__page">
                <Signup />
            </div>
            <Footer />
        </>
    )
}

export default SignupPage;