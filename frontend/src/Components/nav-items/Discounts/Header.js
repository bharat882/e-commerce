import React from 'react';
import Two from '../../Images/Two.png';

const Section = () => {
  return (
    <div className="flex justify-center bg-white p-4 sm:p-6 lg:p-8 border border-black mt-5 max-w-5xl mx-auto">
      <div className="flex flex-row lg:flex-row items-center justify-center w-full"> 
        <div className="w-4/10 relative text-left p-4">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Fall-Winter Collection</h2>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Available at a 30% discount</h2>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Grab the deal today</h2>
          <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-6 rounded-full mb-2">
              Shop Now
            </button>
        </div>
        <div className="w-6/10 mt-auto lg:mt-0 h-full flex items-center justify-center">
          <img src={Two} alt="Collection" className="w-[750px] h-auto rounded-lg shadow-md" />
        </div>
      </div>
      <div classname="w-full border-t-2 border-black mt-5"></div>
    </div>
  );
};

export default Section;
