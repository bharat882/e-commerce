import React from 'react';

const SubscribeFooter = () => {
  return (
    <div className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <h2 className="text-lg font-semibold mb-2">Subscribe to our Newsletter for New Releases and more...</h2>
        <form className="flex justify-center items-center space-x-2">
          <input
            type="email"
            className="p-2 border border-gray-400 rounded w-72 "
            placeholder="Enter your email address..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeFooter;
