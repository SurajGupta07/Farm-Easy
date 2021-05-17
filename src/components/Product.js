import { useProduct } from "../contexts/ProductContext"
import { useNavigate } from "react-router";
import { useCartAction } from "../hooks/useCartAction.js"
export const ProductList = () => {
    const {products} = useProduct();
    const navigate = useNavigate();
    const { addToCartOnClick, isAlreadyInCart } = useCartAction();
    function getProductList({ _id }) {
        return products.map((product) => (
            <div className="card card-body card-spacing">
                <img src={product.image} alt="Logo" className="card-img"/>
                <h2 className="card-title">{product.name}</h2>
                <p className="card-text">{product.price}</p>
                <p className="card-text">{product.availability}</p>
                {/* <button className="default-button" onClick={() => navigate("/cart")}>Go to Cart</button> : <button className="default-button" onClick={() => console.log('added')}></button> */}
                {isAlreadyInCart(_id)
                    ? (
                        <button
                            onClick={() => navigate("/cart")}
                            className="default-button">
                            GO TO CART
                        </button>
                    )
                    : (
                        <button
                            onClick={() => addToCartOnClick({product})}
                            className="default-button">
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
