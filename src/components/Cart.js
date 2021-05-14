import {useCart} from '../contexts/CartContext'

export function CartHeader() {
  const { itemsInCart } = useCart();
  return <h3 className="sub-header">Items in Cart {itemsInCart.length}</h3>;
}


function ShowItem({product}){
  return(
    <div className="card card-body card-spacing">
      <img src={product.image} alt="Logo" className="card-img" />
      <h2 className="card-title">{product.name}</h2>
      <p className="card-text">{product.price}</p>
      <p className="card-text">{product.availability}</p>
    </div>
  );
}

export function Cart(){ 
  const { itemsInCart } = useCart();
  return <>
  <h1 className="main-header">Cart</h1>
  <ul>
    {itemsInCart.map((product) => (<li><ShowItem product={product} /></li>))}
  </ul>
  </>
}