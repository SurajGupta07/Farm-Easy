import {useCart} from '../contexts/CartContext'

export function CartHeader() {
  const { itemsInCart } = useCart();
  return <h3 className="sub-header">Items in Cart {itemsInCart.length}</h3>;
}


function ShowItem(){
  const { itemsInCart, setItemsInCart, cartItems } = useCart();
  return itemsInCart.map(
    ({name, price, image}) => (
      <div className="card card-body card-spacing">
        <img src={image} alt="Logo" className="card-img" />
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{price}</p>
        <button>+</button>
        Quantity
        <button>-</button>
        <button className="default-button">Remove Item</button>
      </div>
    )
  );
}

export function Cart(){ 
  const { itemsInCart } = useCart();
  return <>
  <h1 className="main-header">Cart</h1>
  <ul>
    {itemsInCart ? ShowItem(itemsInCart) : <div>Loading Cart Items...</div>}
  </ul>
  </>
}