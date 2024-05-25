import React, { useState, useEffect } from 'react';

const BestSellingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    // Replace this with your actual API call to fetch best-selling products
    const response = await fetch('http://localhost:5000/products');
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const shuffleProducts = () => {
    setProducts([...products].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      shuffleProducts();
    }, 3000); // Update every 3 seconds

    return () => clearInterval(intervalId);
  }, [products]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const bestSellers = products.slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-pink-500 ">Best Selling Plants</h1>
        <p className="text-gray-500">Treat Yourself: Discover Must-Haves for Modern Living</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {bestSellers.map((item) => (
          <div
            key={item._id}
            className="rounded-lg shadow-lg overflow-hidden bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img className="w-full h-40 object-cover" src={item.product_image} alt={item.product_name} />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-lg font-medium text-gray-800">{item.product_name}</h3>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-gray-500 text-sm">P {item.price}.00</p>
                <span className="text-pink-500 font-bold">⭐ {item.ratings}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="/allProducts"
          className="text-pink-500 font-bold hover:text-white py-2 px-4 rounded-full bg-pink-100 hover:bg-pink-700 transition duration-300 ease-in-out"
        >
          See more →
        </a>
      </div>
    </div>
  );
};

export default BestSellingProducts;








