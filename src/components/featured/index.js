import React from 'react';
import Carousel from './Carousel';
import Countdown from './Countdown';

const Featured = () => {
    return (
        <div style={{postition: 'relative'}}>

            <Carousel />

            <div className="artist_name"> 
                <div className="wrapper">
                    National Park
                </div>
            </div>

            <Countdown></Countdown>

        </div>
    );
};

export default Featured;