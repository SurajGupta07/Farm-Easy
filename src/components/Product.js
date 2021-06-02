import {useProduct} from "../contexts/ProductContext"
import {useNavigate} from "react-router";
import {useCartAction} from "../hooks/useCartAction.js"
export const ProductList = () => {
    const {products} = useProduct();
    const navigate = useNavigate();
    const {addToCartOnClick, isAlreadyInCart} = useCartAction();
    function getProductList({_id}) {
        return products.map((product) => (
            <div key={product._id} className="card card-body card-spacing">
                <button className="wishlistBtn"><i className="fa fa-heart" aria-hidden="true"></i></button> 
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
                : <div>Loading Products...</div>}
        </div>
    )

}
