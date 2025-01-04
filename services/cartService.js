import api from './api';

/**
 * Fetches the current user's cart.
 * @returns {Promise<Array>} - Promise resolving to the cart data (an array of cart items).
 * @throws {Error} - Throws an error if the request fails.
 */
export const viewCart = async () => {
  try {
    const response = await api.get('/cart'); // Matches GET /cart route
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw new Error('Failed to fetch cart');
  }
};

/**
 * Adds a product to the cart.
 * @param {string} productId - ID of the product to add.
 * @param {number} quantity - Quantity of the product to add.
 * @returns {Promise<Object>} - Promise resolving to the updated cart data (cart item object).
 * @throws {Error} - Throws an error if the request fails.
 */
export const addToCart = async (productId, quantity) => {
  try {
    const response = await api.post('/cart', { productId, quantity }); // Matches POST /cart route
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw new Error('Failed to add product to cart');
  }
};

/**
 * Removes a product from the cart.
 * @param {string} productId - ID of the product to remove.
 * @returns {Promise<Object>} - Promise resolving to the updated cart data.
 * @throws {Error} - Throws an error if the request fails.
 */
export const removeFromCart = async (productId) => {
  try {
    const response = await api.delete(`/cart/${productId}`); // Matches DELETE /cart/{productId} route
    return response.data;
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw new Error('Failed to remove product from cart');
  }
};
