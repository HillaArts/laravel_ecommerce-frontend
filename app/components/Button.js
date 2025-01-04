import React from 'react';

/**
 * Button Component: Reusable button for consistent UI.
 * @param {React.ReactNode} children - The content inside the button.
 * @param {function} onClick - Function to handle click events.
 * @param {boolean} [disabled=false] - Whether the button is disabled.
 * @param {string} [className=''] - Additional class names for customization.
 */
const Button = ({
  children,
  onClick,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
