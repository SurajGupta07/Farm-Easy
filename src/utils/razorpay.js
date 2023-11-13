import { useCart } from '../contexts/CartContext';

export const TotalPrice = (itemsInCart) => {
    let { totalAmount, setTotalAmount } = useCart();
    let myTotalAmount = itemsInCart?.reduce((acc, item) => acc + item.price, 0);
    setTotalAmount(myTotalAmount);
    return <div style={{ display: 'inline' }}>{totalAmount}</div>;
};
