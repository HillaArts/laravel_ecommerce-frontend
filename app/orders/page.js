'use client';

import React, { useEffect, useState } from 'react';
import { viewOrders, placeOrder } from '@/services/orderService';
import Layout from './../components/Layout';
import Loader from './../components/Loader';

/**
 * OrdersPage Component:
 * Displays the user's order history and provides functionality to place a new order.
 * Allows the user to view the status and ID of their past orders and place new ones.
 *
 * @returns {JSX.Element} The OrdersPage component showing the user's order history and a place order option.
 */
const OrdersPage = () => {
  const [orders, setOrders] = useState(null); // State to store fetched orders
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [placingOrder, setPlacingOrder] = useState(false); // State to manage order placement state
  const [error, setError] = useState(null); // State to store any error messages during order placement

  /**
   * useEffect hook to fetch orders when the component mounts.
   * Fetches the order history asynchronously and updates the state with the fetched data.
   */
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await viewOrders(); // Fetch order data from the backend service
        setOrders(data); // Set orders state with fetched data
      } catch (error) {
        console.error('Error fetching orders:', error); // Log error if fetching fails
      } finally {
        setLoading(false); // Set loading state to false once fetching is complete
      }
    };

    fetchOrders();
  }, []); // Empty dependency array ensures this runs only on mount

  /**
   * Handles the placement of a new order.
   * It updates the state by placing the order and adding it to the orders list.
   */
  const handlePlaceOrder = async () => {
    setPlacingOrder(true); // Set placingOrder to true to show loading spinner for placing order
    setError(null); // Reset error state

    try {
      // Call the placeOrder function from the service
      const newOrder = await placeOrder();
      // After placing the order, add it to the state to display the newly placed order
      setOrders((prevOrders) => [newOrder, ...prevOrders]);
    } catch (error) {
      console.error('Error placing order:', error); // Log any error encountered during order placement
      setError('Failed to place order. Please try again later.'); // Update error state
    } finally {
      setPlacingOrder(false); // Set placingOrder back to false once done
    }
  };

  // If data is still being fetched, show a loading spinner
  if (loading) return <Loader />;

  return (
    <Layout>
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Your Orders</h2>

      {/* Error message display */}
      {error && (
        <div className="text-red-500 bg-red-100 p-3 rounded-md shadow-md mb-6">
          <p className="font-semibold">{error}</p>
        </div>
      )}

      {/* Place Order Button */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handlePlaceOrder}
          disabled={placingOrder}
          className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:from-blue-600 hover:to-teal-500 disabled:bg-gray-400"
        >
          {placingOrder ? (
            <span className="animate-pulse">Placing Order...</span>
          ) : (
            'Place New Order'
          )}
        </button>
      </div>

      {/* Order History */}
      <div className="space-y-6">
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="text-lg font-semibold">Order ID: {order.id}</div>
                <span className={`px-3 py-1 rounded-full text-white ${order.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                  {order.status}
                </span>
              </div>
              <div className="text-sm text-gray-600">Status: {order.status}</div>
              <div className="mt-2 text-sm text-gray-500">Order placed on: {new Date(order.created_at).toLocaleDateString()}</div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">
            You have no orders yet. Start by placing one!
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OrdersPage;
