import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import AllProducts from '../../AllProducts/AllProducts';
import BestSelling from '../../BestSelling/BestSelling';
import ProductReviews from '../../ProductReviews/ProductReviews';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <BestSelling></BestSelling>
            <AllProducts></AllProducts>
            <ProductReviews></ProductReviews>
            <AboutUs></AboutUs>
            
        </div>
    );
};

export default Home;