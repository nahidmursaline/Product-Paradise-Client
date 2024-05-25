import React from 'react';
import image1 from '../../assets/Images/About/about-1.jpg'
import image2 from '../../assets/Images/About/shipping.jpg'
import image3 from '../../assets/Images/About/support.jpg'



function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-4">Discover Our Story</h1>
        <p className="text-lg text-gray-600">We are on a mission to provide you with the best shopping experience possible.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center bg-blue-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">Large Assortment</h3>
          <p className="text-gray-700">Explore our vast selection of products curated just for you.</p>
          <img src={image1} alt="Product Assortment" className="mx-auto mt-6 w-20 h-20 object-cover rounded-full border-4 border-blue-500" />
        </div>
        <div className="text-center bg-green-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-green-900">Fast & Free Shipping</h3>
          <p className="text-gray-700">Experience lightning-fast delivery with our free shipping options.</p>
          <img src={image2} alt="Fast Shipping" className="mx-auto mt-6 w-20 h-20 object-cover rounded-full border-4 border-green-500" />
        </div>
        <div className="text-center bg-yellow-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4 text-yellow-900">24/7 Support</h3>
          <p className="text-gray-700">Get help anytime, anywhere with our dedicated support team.</p>
          <img src={image3} alt="24/7 Support" className="mx-auto mt-6 w-20 h-20 object-cover rounded-full border-4 border-yellow-500" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
