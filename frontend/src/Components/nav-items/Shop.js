import React from 'react';
import Denim from '../Images/Denim.png';

const products = [
  {
    id: 1,
    name: 'Denim Jackets',
    image: Denim, // Replace with your image URL
    price: '$45',
    oldPrice: '$75'
  },
  {
    id: 2,
    name: 'Denim Jackets',
    image: Denim, // Replace with your image URL
    price: '$45',
    oldPrice: '$75'
  },
  {
    id: 3,
    name: 'Denim Jackets',
    image: Denim, // Replace with your image URL
    price: '$45',
    oldPrice: '$75'
  },
  {
    id: 4,
    name: 'Denim Jackets',
    image: Denim, // Replace with your image URL
    price: '$45',
    oldPrice: '$75'
  }
];

const Shop = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="space-x-4 mb-4 sm:mb-0">
          <button className="border-b-2 border-blue-600 text-blue-600 px-4 py-2">Shop All</button>
        </div>
        <div className="flex space-x-4">
          <select className="border rounded px-4 py-2">
            <option value="latest">Sort by Latest</option>
            <option value="new-arrivals">New Arrivals</option>
            <option value="trending">Trending</option>
          </select>
          <select className="border rounded px-4 py-2">
            <option value="reference">Sort by Reference</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="best-sellers">Best Sellers</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded shadow-lg p-4">
            <img src={product.image} alt={product.name} className="w-full mb-4" />
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <div className="flex justify-between items-center mb-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded">View details</button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded">Add to Cart</button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">{product.price}</span>
              <span className="text-lg line-through">{product.oldPrice}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
