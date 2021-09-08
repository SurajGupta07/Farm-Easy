import confirmedOrder from '../src_images/confirmed.svg';
import { useCart } from '../contexts/CartContext';

export const Orders = () => {
    let { orderId, paymentId } = useCart();
    return (
        <div>
            <div className="order-box">
                <img className="order-img" src={confirmedOrder} alt="order" />
                <h2 className="order-text">Order Confirmed!</h2>
                {orderId && (
                    <div className="order-text">
                        Order ID: <strong>{orderId}</strong>
                    </div>
                )}
                {paymentId && (
                    <div className="order-text">
                        Transaction ID: <strong>{paymentId}</strong>
                    </div>
                )}
            </div>
        </div>
    );
};
