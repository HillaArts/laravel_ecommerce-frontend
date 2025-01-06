'use client';

import React, { useState, useEffect } from 'react';
import { getAllProducts } from '@/services/productService';
import { addToCart } from '@/services/cartService';
import Layout from './../components/Layout';
import Loader from './../components/Loader';

/**
 * ProductPage component that displays a list of products,
 * and allows adding products to the cart.
 */
const ProductPage = () => {
  const [products, setProducts] = useState([]); // State to hold the list of products
  const [loading, setLoading] = useState(true); // Loading state while fetching products
  const [message, setMessage] = useState(null); // To show success or error messages
  const [page, setPage] = useState(1); // Current page for pagination
  const [totalPages, setTotalPages] = useState(1); // Total number of pages for pagination
  const [cartLoading, setCartLoading] = useState({}); // Dynamic cart loading state for each product

  /**
   * Fetches the list of products from the backend when the page loads.
   * Handles pagination, displays a loading state, and handles errors during fetch.
   */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts(page); // Fetch products with pagination

        // Ensure 'products' is always an array
        setProducts(data.products || []);
        setTotalPages(data.totalPages || 1); // Ensure totalPages is set, defaulting to 1
      } catch (error) {
        console.error('Error fetching products:', error);
        setMessage('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]); // Re-fetch when page number changes

  /**
   * Handles adding a product to the cart.
   * Updates the message state to notify the user of the action result.
   * @param {string} productId - The ID of the product being added.
   */
  const handleAddToCart = async (productId) => {
    try {
      setCartLoading((prev) => ({ ...prev, [productId]: true })); // Set specific product loading state to true
      await addToCart(productId, 1); // Default quantity set to 1
      setMessage('Product added to cart!'); // Success message
    } catch (error) {
      console.error('Error adding product to cart:', error);
      setMessage('Failed to add product to cart. Please try again.');
    } finally {
      setCartLoading((prev) => ({ ...prev, [productId]: false })); // Set specific product loading state to false
    }
  };

  // Show loading spinner while fetching data
  if (loading) return <Loader />;

  return (
    <Layout>
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Product List</h2>

      {/* Display any message */}
      {message && (
        <div
          className={`p-3 rounded-md shadow-md mb-6 ${message.includes('Failed') ? 'text-red-500 bg-red-100' : 'text-green-500 bg-green-100'}`}
        >
          <p className="font-semibold">{message}</p>
        </div>
      )}

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200"
          >
            <img
              src={product.image || '/default-image.jpg'} // Fallback to a default image if not available
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold text-gray-800">${product.price}</span>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 px-4 rounded-lg shadow-md transition-all duration-300 hover:from-blue-600 hover:to-teal-500"
                disabled={cartLoading[product.id]} // Disable button for specific product during loading
              >
                {cartLoading[product.id] ? 'Adding...' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : page)}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage(page < totalPages ? page + 1 : page)}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </Layout>
  );
};

export default ProductPage;
