import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <div className="bg-blue-600 p-4">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="h-8 w-8 mr-2 text-blue-100" />
            <span className="text-white text-lg font-semibold">INSTASHIPIN</span>
          </div>
          <div className="flex flex-grow items-center w-full md:max-w-md mx-4 md:mx-0 md:w-auto border border-black rounded-md">
            <input 
              type="text" 
              placeholder="Search for products" 
              className="flex-grow p-2 text-black focus:ring-0 focus:border-blue-600 border-r border-black rounded-l-md" 
            />
            <select className="flex-grow text-black p-2 border-r border-l border-black rounded-none">
              <option>All Categories</option>
              <option>Menswear</option>
              <option>Womenwear</option>
              <option>Kids</option>
              <option>Accessories</option>
            </select>
            <button className="flex-grow bg-yellow-500 text-white p-2 rounded-r-md">Search</button>
          </div>
          <div className="flex items-center space-x-4">
              <a className="flex items-center text-white bg-blue-700 px-3 py-1 rounded" href="/login">Login
              <FontAwesomeIcon icon={faUser} className="h-4 w-4 text-gray-400 mr-3" />
              </a>
              <a className="flex items-center text-white bg-blue-700 px-3 py-1 rounded" href="#">Cart
              <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 text-gray-400 mr-3" />
              </a>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-black">
        <div className="bg-white shadow mt-2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-900 inline-flex text-sm font-medium px-8">Home</a>
                <a href="#" className="text-gray-900 inline-flex text-sm font-medium px-8">Shop</a>
                <a href="#" className="text-gray-900 inline-flex text-sm font-medium px-8">Hot Deals</a>
                <a href="#" className="text-gray-900 inline-flex text-sm font-medium px-8">Discounts</a>
                <a href="#" className="text-gray-900 inline-flex text-sm font-medium px-8">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-black"></div>
    </nav>
  );
};

export default Navbar;
