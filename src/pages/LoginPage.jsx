import Navbar from '../components/Header/Navbar';
import Login from '../components/Authentication/Login';

const LoginPage = () => {
    return (
        <>
            <Navbar />
            <div className="auth__page">
                <Login />
            </div>
        </>
    );
};

export default LoginPage;
