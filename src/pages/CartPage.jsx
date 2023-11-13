import Navbar from '../components/Header/Navbar';
import { CartHeader, Cart } from '../components/Cart';
import { Checkout } from '../components/Checkout';
import { useCart } from '../contexts/CartContext';



const CartPage = () => {
    const { itemsInCart } = useCart();

    return (
        <>
            <Navbar />
            <CartHeader />
            <Cart />
            <Checkout itemsInCart={itemsInCart} />
        </>
    );
};

export default CartPage;
