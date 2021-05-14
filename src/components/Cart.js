import {useCart} from '../contexts/CartContext'
import {useProduct} from "../contexts/CartContext"

export function CartHeader() {
  const { itemsInCart } = useCart();
  return <h3 className="sub-header">Items in Cart {itemsInCart.length}</h3>;
}


function ShowItem({item}){
  const { itemsInCart, setItemsInCart } = useCart();
  return(
    <div className="card card-body card-spacing">
      <img src={item.image} alt="Logo" className="card-img" />
      <h2 className="card-title">{item.name}</h2>
      <p className="card-text">{item.price}</p>
      <button>+</button>
      {item.quantity}
      <button>-</button>
      <button className="default-button">Remove Item</button>
    </div>
  );
}

export function Cart(){ 
  const { itemsInCart } = useCart();
  return <>
  <h1 className="main-header">Cart</h1>
  <ul>
    {itemsInCart.map((item) => (<li><ShowItem item={item} /></li>))}
  </ul>
  </>
}