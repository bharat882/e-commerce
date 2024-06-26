import React from 'react';
import Six from '../Images/Six.png';

function Items() {
  const products = [
    {
      id: 1,
      imageUrl: Six,
      title: "Polo Denim Cotton Clothes",
      description: "Comfortable cotton polo",
      price: "70"
    },
    {
      id: 2,
      imageUrl: Six,
      title: "One of The Top Selling Brand.",
      description: "Stylish modern top",
      price: "105.8"
    },
    {
      id: 3,
      imageUrl: Six,
      title: "The best summer Collection | Tries",
      description: "Colorful summer dress",
      price: "60"
    },
    {
      id: 4,
      imageUrl: Six,
      title: "The No-Sweat Sweater | Uniform",
      description: "Comfortable light sweater",
      price: "92.5"
    },
  ];

  return (
    <div className="container mx-auto px-2">
      <div className="flex flex-wrap justify-end ml-28">
        {products.map(product => (
          <div key={product.id} className="w-1/2 p-8" >
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-{900px} h-{400px}" src={product.imageUrl} alt={product.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-36 mb-4">${product.price}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
