import React from 'react';
import './Bonus.css'
import picture from '../../Images/istockphoto-120004828-612x612.jpg'

const Bonus = () => {
    return (
        <div className='Container'>
            <div>
                 <img className='IMAGE' src= {picture} alt="" srcset="" />
            </div>
            <div className='TEXT'>
                <h5 className='text-center'> About Us</h5>
                <h2> A Book Store for Good People</h2>
                <p>We are strong community 0f 10k customers and 200+ sellers who inspire to be good ,good and goodness. our service is best.</p>
                <p></p>
            </div>
        </div>
    );
};

export default Bonus;