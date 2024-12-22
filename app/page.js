import { useState, useEffect } from 'react';
import { getCart } from '../services/cartService';
import { getOrders } from '../services/orderService';
import formatCurrency from '../utils/formatCurrency';
import Link from 'next/link';

/**
 * HomePage Component - Displays the cart and order summaries on the main page.
 */
export default function HomePage() {
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            // Fetch cart and orders data concurrently
            const cartData = await getCart();
            const ordersData = await getOrders();

            setCart(cartData);
            setOrders(ordersData);
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Welcome to Our Shop</h1>
            
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
                        {cart.length === 0 ? (
                            <div className="text-center text-gray-500">Your cart is empty.</div>
                        ) : (
                            <div className="bg-white p-6 shadow-lg rounded-lg">
                                <ul>
                                    {cart.map((item) => (
                                        <li key={item.id} className="flex justify-between py-2 border-b">
                                            <div>
                                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-gray-800">
                                                    {formatCurrency(item.price)}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 text-right">
                                    <Link href="/cart">
                                        <a className="bg-blue-500 text-white px-6 py-3 rounded-lg">
                                            Go to Cart
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
                        {orders.length === 0 ? (
                            <div className="text-center text-gray-500">You have no orders yet.</div>
                        ) : (
                            <div className="bg-white p-6 shadow-lg rounded-lg">
                                <ul>
                                    {orders.map((order) => (
                                        <li key={order.id} className="py-4 border-b">
                                            <div className="flex justify-between">
                                                <h3 className="text-xl font-semibold">Order #{order.id}</h3>
                                                <span className="text-lg font-semibold text-gray-800">
                                                    {formatCurrency(order.total)}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600">Total Items: {order.items.length}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 text-right">
                                    <Link href="/orders">
                                        <a className="bg-green-500 text-white px-6 py-3 rounded-lg">
                                            View All Orders
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
