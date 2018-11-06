import React from 'react';
import Carousel from './Carousel';

const Featured = () => {
    return (
        <div style={{postition: 'relative'}}>

            <Carousel />

            <div className="artist_name"> 
                <div className="wrapper">
                    National Park
                </div>
            </div>

        </div>
    );
};

export default Featured;