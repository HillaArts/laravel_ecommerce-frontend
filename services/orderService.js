import api from './api';

/**
 * Places an order with the items in the cart.
 * @param {Object} orderData - Data for placing the order (e.g., cart items, user information, etc.).
 * @returns {Promise} - Promise resolving to order confirmation details.
 */
export const placeOrder = async (orderData) => {
  try {
    const response = await api.post('/orders', orderData); // Align route to /orders
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};

/**
 * Fetches the current user's orders.
 * @returns {Promise} - Promise resolving to a list of orders.
 */
export const viewOrders = async () => {
  try {
    const response = await api.get('/orders'); // Align route to /orders
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};