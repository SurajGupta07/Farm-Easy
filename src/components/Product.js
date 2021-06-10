import {useProduct} from "../contexts/ProductContext"
import {useNavigate} from "react-router";
import {useCartAction} from "../hooks/useCartAction.js"
import Loader from "../src_images/loader.gif"
export const ProductList = () => {
    const {products} = useProduct();
    const navigate = useNavigate();
    const {addToCartOnClick, isAlreadyInCart, addToWishlist} = useCartAction();
    function getProductList({_id}) {
        return products.map((product) => (
            <div key={product._id} className="card card-body card-spacing">
                <button className="wishlistBtn" onClick={() => addToWishlist({product})}><i className="fa fa-heart" aria-hidden="true"></i></button> 
                <img src={product.image} alt="Logo" className="card-img" style={{marginBottom: '1rem'}}/>
                <h2 className="card-title">{product.name}</h2>
                <p className="card-text">Rs.{" "}{product.price}</p>
                <p className="card-text">{product.availability}</p>
                {isAlreadyInCart(_id)
                    ? (
                        <button onClick={() => navigate("/cart")} className="default-button">
                            GO TO CART
                        </button>
                    )
                    : (
                        <button onClick={() => addToCartOnClick({product})} className="default-button">
                            ADD TO CART
                        </button>
                    )}
            </div>
        ));
    }

    return (
        <div>
            {products
                ? getProductList(products)
                : <div className="loaderGif"><img style={{height:"5rem", width: "5rem"}} src={Loader} /></div>}
        </div>
    )

}
