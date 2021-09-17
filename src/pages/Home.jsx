import Navbar from '../components/Header/Navbar';
import { ProductList } from '../components/Product';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="product__list">
                <ProductList />
            </div>
            <Footer className="footer__home" />
        </>
    );
};

export default HomePage;
