import Link from 'next/link';
import { FaShoppingCart, FaClipboardList } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Welcome to Our Shop
      </h1>
      <p className="text-xl mb-8 text-center px-4">
        Find the best products and start shopping today. Explore your cart or place an order.
      </p>
      
      <div className="flex space-x-6 mt-6">
        <Link href="/cart" className="flex items-center justify-center bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <FaShoppingCart className="mr-2 text-2xl" />
          Go to Cart
        </Link>
        <Link href="/orders" className="flex items-center justify-center bg-white text-green-500 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg shadow-xl transition-transform transform hover:scale-105">
          <FaClipboardList className="mr-2 text-2xl" />
          Place Order
        </Link>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-semibold">
          Explore our exclusive collection and enjoy the best shopping experience.
        </p>
      </div>
    </div>
  );
}
