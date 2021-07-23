import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";
import {CartHeader, Cart} from "../components/Cart"

const CartPage = () => {
    return(
        <>
            <Navbar/>
            <CartHeader/>
            <Cart />
            <Footer/>
        </>
    )
}

export default CartPage;