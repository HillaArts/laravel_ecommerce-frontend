import axios from 'axios';

const API_URL = 'http://localhost/api/orders'; // Replace with your Laravel API base URL

/**
 * Fetches all orders for the authenticated user.
 * 
 * @returns {Promise<Array>} List of orders.
 */
export const getOrders = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
