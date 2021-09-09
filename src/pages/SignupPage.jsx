import Navbar from '../components/Header/Navbar';
import Signup from '../components/Authentication/Signup';

const SignupPage = () => {
    return (
        <>
            <Navbar />
            <div className="auth__page">
                <Signup />
            </div>
        </>
    );
};

export default SignupPage;
