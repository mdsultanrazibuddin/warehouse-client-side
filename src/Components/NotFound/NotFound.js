import React from 'react';
import './NotFound.css'
import image from '../../Images/254-2549834_404-page-not-found-404-not-found-png.png'

const NotFound = () => {
    return (
        <div className='notfound'>
          <img src={image} alt="" />
        </div>
    );
};

export default NotFound;