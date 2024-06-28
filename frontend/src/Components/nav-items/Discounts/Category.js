import React from 'react';
import Five from '../../Images/Five.png';
import Six from '../../Images/Six.png';
import Seven from '../../Images/Seven.png';
import Eight from '../../Images/Eight.png';

function Category() {
  const categories = [
    {
      title: "MensWear",
      image: Five,
      link: "/menswear"
    },
    {
      title: "WomenWear",
      image: Six,
      link: "/womenwear"
    },
    {
      title: "Accessories",
      image: Seven,
      link: "/accessories"
    },
    {
      title: "KidsWear",
      image: Eight,
      link: "/kidswear"
    },
  ];

  return (
    <div className="container mx-auto px-16 py-8">
      <div className="border-t-2 border-black mb-8"></div>
      <h2 className="text-xl font-bold mb-4">DISCOVER</h2>
      <h3 className="text-2xl font-semibold mb-8">THE COLLECTIONS</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="relative border">
            <img src={category.image} alt={category.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <a href={category.link} className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg md:text-xl font-bold">
                {category.title}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="border-b-2 border-black mt-8"></div>
    </div>
  );
}

export default Category;
