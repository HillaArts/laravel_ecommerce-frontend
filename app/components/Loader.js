import React from 'react';

/**
 * Loader Component: Displays a loading spinner while data is being fetched.
 */
const Loader = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="w-8 h-8 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
