import React from 'react';
import Five from '../../Images/Five.png';
import Six from '../../Images/Six.png';
import Seven from '../../Images/Seven.png';
import Eight from '../../Images/Eight.png';

function Categories() {
  const categories = [
    {
      title: "MENS-WEAR",
      image: Five,
    },
    {
      title: "WOMEN-WEAR",
      image: Six,
    },
    {
      title: "ACCESSORIES",
      image: Seven,
    },
    {
      title: "KIDS-WEAR",
      image: Eight,
    },
  ];

  return (
    <div className="container mx-auto px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-0.5">
        {categories.map((category, index) => (
          <div key={index} className="relative border">
            <img src={category.image} alt={category.title} className="w-{900px} h-{400px} object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg md:text-xl font-bold">{category.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

