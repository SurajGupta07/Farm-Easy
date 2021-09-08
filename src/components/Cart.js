import { useCart } from '../contexts/CartContext';
import { useCartAction } from '../hooks/useCartAction';
import { useCartItems } from '../hooks/useCartItems';
import Loader from '../src_images/loader.gif';
import { Checkout } from './Checkout';

export function CartHeader() {
    const { itemsInCart } = useCartItems();
    return <h3 className="sub-header">Items In Cart {itemsInCart?.length}</h3>;
}

function ShowItem() {
    const { itemsInCart } = useCartItems();
    const { removeFromCart } = useCartAction();
    return itemsInCart?.map(({ name, price, image, quantity, _id }) => (
        <div key={_id} className="card card-body card-spacing">
            <img src={image} alt="Logo" className="card-img" />
            <h2 className="card-title">{name}</h2>
            <p className="card-text">Rs. {price}</p>
            <button
                className="default-button"
                onClick={() => removeFromCart({ _id })}
            >
                Remove Item
            </button>
        </div>
    ));
}

export function Cart() {
    const { itemsInCart } = useCart();
    return (
        <div>
            <h1 className="main-header">Cart</h1>
            <ul>
                {itemsInCart ? (
                    ShowItem(itemsInCart)
                ) : (
                    <div className="loaderGif">
                        <img
                            style={{ height: '5rem', width: '5rem' }}
                            alt="Loader"
                            src={Loader}
                        />
                    </div>
                )}
            </ul>
            <Checkout itemsInCart={itemsInCart} />
        </div>
    );
}
