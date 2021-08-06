import {useProduct} from "../contexts/ProductContext"
import {useNavigate} from "react-router";
import {useCartAction} from "../hooks/useCartAction.js"
import { useAuth } from "../contexts/AuthContext";
import Loader from "../src_images/loader.gif"
export const ProductList = () => {
    const { token } = useAuth();
    const {products} = useProduct();
    const navigate = useNavigate();
    const {addToCartOnClick, addToWishlist} = useCartAction();
    function getProductList({_id}) {
        return products.map((product) => (
            <div key={product._id} className="card card-body card-spacing">
                <button className="wishlistBtn" onClick={() => addToWishlist({product})}><i className="fa fa-heart" aria-hidden="true"></i></button> 
                <img src={product.image} alt="Logo" className="card-img" style={{marginBottom: '1rem'}}/>
                <h2 className="card-title">{product.name}</h2>
                <p className="card-text">Rs.{" "}{product.price}</p>
                <p className="card-text">{product.availability}</p>
                {product.availability ==="IN STOCK" ? 
                <button onClick={() => {
                    if(token) {
                        addToCartOnClick({product})
                    }
                    else {
                        navigate("/login");
                    }
                }} className="default-button">
                    ADD TO CART
                </button> : 
                <button  className="default-button disabled-btn">
                    ADD TO CART
                </button>
                }
            </div>
        ));
    }

    return (
        <div>
            {products
                ? getProductList(products)
                : <div className="loaderGif"><img style={{height:"5rem", width: "5rem"}} alt="Loader" src={Loader} /></div>}
        </div>
    )

}
