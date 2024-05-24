import React from 'react';

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/Images/Banner/Banner-06.jpg';
import banner2 from '../../../assets/Images/Banner/Banner-02.jpg';
import banner3 from '../../../assets/Images/Banner/Banner-03.jpg';

const Banner = () => {
    return (
        <div>
             <Carousel >
                <div >
                    <img className='h-2/4'  src={banner1} />
                    
                </div>
                <div>
                    <img src={banner2} />
                    
                </div>
                <div>
                    <img src={banner3} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;