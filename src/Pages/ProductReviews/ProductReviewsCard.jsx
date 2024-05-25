import React, { useState } from 'react';

const ProductReviewsCard = ({ reviews }) => {
    const { productPhoto, productName, userName, review, personalRatings, userPhoto } = reviews;
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-4 transform transition-transform duration-300 hover:scale-105">
            <div className="md:flex">
                <div className="md:flex-shrink-0 p-4">
                    <img className="h-48 w-full object-cover md:h-full md:w-64 rounded-lg shadow-lg" src={productPhoto} alt={`${productName}`} />
                </div>
                <div className="p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center mb-4">
                            <img className="w-12 h-12 rounded-full mr-4 shadow-md" src={userPhoto} alt={`${userName}`} />
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">{productName}</h2>
                                <p className="text-sm text-gray-600">Reviewed by {userName}</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="text-gray-700 text-base">{review}</p>
                        </div>
                        <div className="mt-3">
                            <p className="text-gray-600"><span className="font-semibold">Personal Rating:</span> {personalRatings}/5</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <button 
                            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-1 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all"
                            onClick={handleLike}
                        >
                            Like {likes > 0 && <span>({likes})</span>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviewsCard;





