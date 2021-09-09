import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer';
import { ProductList } from '../components/Product';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className="product__list">
                <ProductList />
            </div>

        </>
    );
};

export default HomePage;
