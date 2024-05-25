import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import ProductReviewsCard from './ProductReviewsCard';

const ProductReviews = () => {
 
  const [reviews, setReviews] = useState([]);
  const url = 'http://localhost:5000/reviews';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="pt-20">
      <div className="m-4 ">
        <div>
          <h2 className="text-center py-6 font-bold text-3xl">
            Reviews of the Products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {reviews.map((reviews) => (
            <ProductReviewsCard
              key={reviews._id}
              reviews={reviews}
            ></ProductReviewsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
