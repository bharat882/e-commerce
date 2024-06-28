import React from 'react';
import Two from '../Images/Two.png';

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">OUR STORY</h1>
        <p className="text-lg mb-6">
          Welcome to Instashipin, where fashion meets convenience. Our journey began
          with a passion for stylish, comfortable clothing that adapts to your dynamic
          lifestyle. From trendy designs to classic essentials, each piece is crafted with
          quality and care. Join us in redefining fashion, one outfit at a time.
        </p>
        <img
          src={Two} // Replace with your image URL
          alt="Our Story"
          className="mx-auto mb-10"
        />
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">JOURNEY START FROM</h2>
        <p className="text-lg mb-6">
          Our journey started in 2020 with a small studio, fueled by a vision to make
          fashion accessible and effortless. With dedication and creativity, we
          transformed our dream into Instashipin, a brand committed to bringing you
          the latest trends with unparalleled convenience.
        </p>
        <img
          src={Two} // Replace with your image URL
          alt="Journey Start"
          className="mx-auto mb-10"
        />
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">OUR SERVICES</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/3 p-4 border rounded">
            <i className="fas fa-truck text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Fast & Free Delivery</h3>
            <p>Free delivery on all orders</p>
          </div>
          <div className="w-full lg:w-1/3 p-4 border rounded">
            <i className="fas fa-tags text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Best Quality Clothing</h3>
            <p>Available at Reasonable Price</p>
          </div>
          <div className="w-full lg:w-1/3 p-4 border rounded">
            <i className="fas fa-headset text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Exceptional Customer Service</h3>
            <p>Available for 24x7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
