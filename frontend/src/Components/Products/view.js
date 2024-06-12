import React from 'react';

function View() {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 border-t-2 border-black mt-8 mb-4">
      <div className="flex items-center">
        <p className="text-blue-500 text-2xl font-bold ml-52 mr-52 mt-4">Popular Categories</p>
      </div>
      <div className="flex items-center">
        <p className="text-blue-500 text-2xl font-bold mr-52 mt-4">View All →</p>
      </div>
    </div>
  );
}
export default View;
