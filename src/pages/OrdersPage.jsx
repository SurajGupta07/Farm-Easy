import { Orders } from '../components/Orders';
import Navbar from '../components/Header/Navbar';

export const OrdersPage = () => {
    return (
        <>
            <Navbar />
            <div className="orders">
                <Orders />
            </div>
        </>
    );
};
