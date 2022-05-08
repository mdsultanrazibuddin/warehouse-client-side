import React from 'react';
import IMAGE from '../../Images/Banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <img className="banner" src={IMAGE} alt="" srcset="" />
        </div>
    );
};

export default Banner;