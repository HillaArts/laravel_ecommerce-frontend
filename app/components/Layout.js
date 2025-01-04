import React from 'react';
import Link from 'next/link';

/**
 * Layout Component: Provides a consistent layout with header and footer.
 * @param {React.ReactNode} children - The page content to be wrapped.
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-lg font-bold">E-Commerce App</h1>
          <nav className="space-x-4">
            <Link href="/cart" className="hover:underline">
              Cart
            </Link>
            <Link href="/orders" className="hover:underline">
              Orders
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center text-sm">
          © {new Date().getFullYear()} E-Commerce App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
