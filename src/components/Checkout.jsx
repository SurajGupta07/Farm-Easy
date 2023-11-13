import axios from 'axios';
import { MAIN_URL } from '../dbconnect/dbconnect';
import { useEffect } from 'react';
import { TotalPrice } from '../utils/razorpay';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

export const Checkout = ({ itemsInCart }) => {
    let navigate = useNavigate();
    let { totalAmount, setItemsInCart, setOrderId, setPaymentId } = useCart();
    let { email } = useAuth();
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    useEffect(() => {
        loadScript('https://checkout.razorpay.com/v1/checkout.js');
    });

    function payRazorpay() {
        displayRazorpay();
    }
    async function displayRazorpay() {
        const { data } = await axios.post(`${MAIN_URL}/payment/new`, {
            totalAmount
        });

        const options = {
            key: 'rzp_test_2NYb6PnL0SIkc4',
            currency: 'INR',
            amount: totalAmount,
            name: 'Farm-Easy',
            description: 'Farm Fresh, Farm Easy',
            order_id: data.id,
            handler: function (response) {
                setPaymentId(response.razorpay_payment_id);
                setOrderId(response.razorpay_order_id);
            },
            prefill: {
                email,
                contact: ''
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        if (data.success === true) {
            navigate('/orders');
            const { cart } = await axios.post(`${MAIN_URL}/payment/delete`);
            setItemsInCart(cart);
        }
    }

    return (
        <div className="checkout-box">
            <h3 className="price-text">PRICE DETAILS</h3>
            {itemsInCart?.map(({ name, price, _id }) => {
                return (
                    <div key={_id} className="card-body">
                        <div className="list-grid">
                            <div>
                                Item:<strong> {name}</strong>
                            </div>
                            <div>
                                Price:<strong> ₹{price * 1}</strong>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="card-body card-title">
                <h3>Total Amount = ₹{TotalPrice(itemsInCart)}</h3>
            </div>
            <div style={{ marginBottom: '1rem', marginLeft: '1rem' }}>
                {totalAmount > 0 && (
                    <button className="default-button" onClick={payRazorpay}>
                        Checkout
                    </button>
                )}
            </div>
        </div>
    );
};
