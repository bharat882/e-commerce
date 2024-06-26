import React from 'react';
import Denim from '../../Images/Denim.png';

const PopularProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Denim Jackets',
      price: '$45',
      image: Denim
    },
    {
      id: 2,
      name: 'Denim Jackets',
      price: '$45',
      image: Denim
    },
    {
      id: 3,
      name: 'Denim Jackets',
      price: '$45',
      image: Denim
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <h2 className="text-2xl font-semibold mb-6">Popular Products</h2>
      <div className="border-t-2 border-black mb-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white border rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600-bold-3xl mb-2">{product.price}</p>
              <div className="flex justify-between">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">View details</button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
