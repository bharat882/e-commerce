import React from 'react';
import Two from '../../Images/Two.png';

function SectionOne() {
  return (
    <div className="flex justify-center bg-white p-4 sm:p-6 lg:p-8 border border-black mt-5 max-w-5xl mx-auto">
      <div className="flex flex-row lg:flex-row items-center justify-center w-full"> 
        <div className="w-4/10 relative text-left p-4">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">PERFECT TIME TO SHOP</h2>
          <div className="flex flex-col items-center lg:items-start mb-4">
            <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-6 rounded-full mb-2">
              Shop Collection →
            </button>
            <div className="bg-blue-100 text-blue-600 text-lg font-semibold p-2 rounded-md">
              20% OFF ON SUMMER COLLECTION
            </div>
          </div>
          <div className="flex justify-center lg:justify-start items-center space-x-4">
            <div className="text-center lg:text-left">
              <p className="text-gray-800 text-xl font-semibold">20K</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div className="h-full flex items-center">
              <span className="text-black-400 text-5xl">|</span> {/* Vertical line */}
            </div>
            <div className="text-center lg:text-left">
              <p className="text-gray-800 text-xl font-semibold">500+</p>
              <p className="text-sm text-gray-600">Product Items</p>
            </div>
          </div>
        </div>
        <div className="w-6/10 mt-auto lg:mt-0 h-full flex items-center justify-center">
          <img src={Two} alt="Collection" className="w-[750px] h-auto rounded-lg shadow-md" />
        </div>
      </div>
      <div classname="w-full border-t-2 border-black mt-5"></div>
    </div>
  );
}
export default SectionOne;
