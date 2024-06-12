import React from 'react';

const MainFooter = () => {
  return (
    <div className="bg-gray-800 text-gray-200 p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <h3 className="font-semibold mb-2">EXPLORE</h3>
          <ul>
            <li>About Us</li>
            <li>Wholesale</li>
            <li>Rewards Program</li>
            <li>Affiliate Program</li>
            <li>Gift Cards</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">CUSTOMER CARE</h3>
          <ul>
            <li>Return & Exchanges</li>
            <li>Shipping</li>
            <li>International Shipping</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Dropship Information</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">POLICIES</h3>
          <ul>
            <li>Satisfaction Guaranteed</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>ADA Accessibility</li>
            <li>COVID-19 RESPONSE</li>
            <li>HTML Sitemap</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">CONTACT US</h3>
          <ul>
            <li>1-877-987-1234</li>
            <li>Monday - Friday</li>
            <li>8:00am-6:00pm EST</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-4 border-t border-black">
        <div className="flex justify-center space-x-4 mb-2">
        <p className="text-sm"> &copy; 2022 Copyright. All Rights Reserved.
        </p>
          <a href="#" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200">
          <i className="fab fa-snapchat"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
