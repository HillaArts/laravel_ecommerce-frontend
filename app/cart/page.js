'use client';

import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { viewCart, addToCart, removeFromCart } from '@/services/cartService';
import CartItem from '../components/CartItem';
import Loader from '../components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await viewCart();
        setCart(data);
      } catch (error) {
        toast.error('Error fetching your cart. Please try again!');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      const updatedCart = await addToCart(product);
      setCart(updatedCart);
      toast.success('Item added to cart!');
    } catch (error) {
      toast.error('Failed to add item to cart. Please try again.');
    }
  };

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId);
      setCart(cart.filter((item) => item.productId !== productId));
      toast.success('Item removed successfully!');
    } catch (error) {
      toast.error('Failed to remove the item. Please try again.');
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    try {
      const updatedItem = await updateCartQuantity(productId, newQuantity);
      setCart(cart.map((item) =>
        item.productId === productId ? { ...item, quantity: updatedItem.quantity } : item
      ));
      toast.info('Quantity updated successfully.');
    } catch (error) {
      toast.error('Failed to update the quantity. Try again.');
    }
  };

  if (loading) return <Loader />;

  return (
    <Layout>
      <ToastContainer />
      <section className="relative p-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Your Shopping Cart
        </h2>

        {cart && cart.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <CartItem
                key={item.productId}
                item={item}
                onRemove={handleRemove}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center text-gray-500 mt-16">
            {/* Unique empty cart image */}
            <img
              src="/Creating-a-Shopping-Cart-With-Laravel.png"
              alt="Empty Cart"
              className="w-64 h-64 opacity-75 animate-bounce"
            />
            <p className="text-lg font-semibold mt-6">
              Your cart is empty. Let’s fill it up!
            </p>
            <button
              onClick={() => (window.location.href = '/products')}
              className="mt-6 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Browse Products
            </button>
          </div>
        )}

        {/* Floating Cart Summary */}
        {cart && cart.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-xl transform transition-all animate-slide-up">
            <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
            <p className="text-gray-600">
              Total Items: <strong>{cart.reduce((sum, item) => sum + item.quantity, 0)}</strong>
            </p>
            <p className="text-gray-600">
              Total Price: <strong>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</strong>
            </p>
            <button
              onClick={() => toast.success('Proceeding to checkout!')}
              className="mt-4 w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform transition hover:scale-105"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default CartPage;
