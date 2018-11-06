import React from 'react';
import Slider from "react-slick";

import glacier_national_park from '../../resources/images/glacier_national_park.jpeg';
import yellowstone_national_park from '../../resources/images/yellowstone_national_park.jpeg';
import yosemite_national_park from '../../resources/images/yosemite_national_park.jpeg';


const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }
    // ... is putting all the props from settings inside of the slider

    return (
        <div
            className="carrousel_wrapper"
            style={{
                //background:"red",
                height:`${window.innerHeight}px`,
                overflow: 'hidden'
            }}
        >
            
            <Slider {...settings}> 
                <div>
                    <div className="carrousel_image"
                        style={{
                            background:`url(${glacier_national_park})`,
                            height:`${window.innerHeight}px`
                        }}                    
                    ></div>
                </div>
                <div>
                    <div className="carrousel_image"
                        style={{
                            background:`url(${yellowstone_national_park})`,
                            height:`${window.innerHeight}px`
                        }}                    
                    ></div>

                </div>
                <div>
                    <div className="carrousel_image"
                        style={{
                            background:`url(${yosemite_national_park})`,
                            height:`${window.innerHeight}px`
                        }}                    
                    ></div>
                </div>


            </Slider>

        </div>
    );
};

export default Carousel;