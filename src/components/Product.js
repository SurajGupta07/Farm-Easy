import {useCart} from '../contexts/CartContext'
import { useProduct } from "../contexts/ProductContext"

export const ProductList = () => {
    const { setItemsInCart } = useCart();
    const { products } = useProduct();
    function getProductList(){
      return products.map(
        ({name, price, image, availability}) => (
          <div className="card card-body card-spacing">
            <img src={image} alt="Logo" className="card-img" />
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{price}</p>
            <p className="card-text">{availability}</p>
            <button className="default-button" onClick={function(e){
                setItemsInCart((product) => [...product, product ])
              }}>Add to Cart</button>
          </div>
        )
      );
    }
  
    return(
      <div>
        {products ? getProductList(products) : <div>Loading Products...</div>}
      </div>
    )
  
  }
  