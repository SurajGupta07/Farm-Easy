import Navbar from "../components/Header/Navbar";
import { Wishlist } from "../components/Wishlist";

const WishlistPage = () => {
    return(
        <>
            <Navbar/>
            <div className="product__list">
                <Wishlist />
            </div>
        </>
    )
}

export default WishlistPage;