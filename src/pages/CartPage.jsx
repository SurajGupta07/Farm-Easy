import Navbar from "../components/Header/Navbar";
import {CartHeader, Cart} from "../components/Cart"

const CartPage = () => {
    return(
        <>
            <Navbar/>
            <CartHeader/>
            <Cart />
        </>
    )
}

export default CartPage;