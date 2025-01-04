import React from 'react';

/**
 * CartItem Component: Displays an individual item in the cart.
 * @param {Object} item - Cart item data (productId, productName, price, quantity).
 * @param {function} onRemove - Function to handle removing the item from the cart.
 * @param {function} onUpdateQuantity - Function to handle updating the quantity of the item.
 */
const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex justify-between items-center border-b pb-4">
      <div className="flex items-center space-x-4">
        {/* Product Image */}
        <img
          src={item.imageUrl}
          alt={item.productName}
          className="w-16 h-16 object-cover rounded-md"
        />
        {/* Product Info */}
        <div>
          <h3 className="font-semibold">{item.productName}</h3>
          <div className="text-sm text-gray-600">${item.price}</div>
        </div>
      </div>

      {/* Quantity & Remove */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <button
            className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="mx-2">{item.quantity}</span>
          <button
            className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <button
          className="text-red-600 hover:underline"
          onClick={() => onRemove(item.productId)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
