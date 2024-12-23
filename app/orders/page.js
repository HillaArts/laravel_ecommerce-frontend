"use client";
import { useState, useEffect } from 'react';
import { getOrders } from '../services/orderService';
// import formatCurrency from '../utils/formatCurrency';
import OrderItem from '../components/Orders/OrderItem';
import OrderSummary from '../components/Orders/OrderSummary';

/**
 * OrdersPage Component - Displays the user's order history.
 */
export default function OrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchOrders() {
            const data = await getOrders();
            setOrders(data);
            setLoading(false);
        }
        fetchOrders();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Your Orders</h1>
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : orders.length === 0 ? (
                <div className="text-center text-gray-500">You have no orders yet.</div>
            ) : (
                <div>
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white p-6 mb-6 shadow-lg rounded-lg">
                            <OrderSummary order={order} />
                            <div className="mt-4">
                                {order.items.map((item) => (
                                    <OrderItem key={item.id} item={item} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
