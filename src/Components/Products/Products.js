import React from 'react';
import {  Link } from 'react-router-dom';



import './Products.css'

const Products = ({product}) => {
    const {img, service, price, headline, description} = product;
    
    return (
        <div className="col-lg-4 mb-5 mt-5  service-container">
        
            <div className="card product-card">
            <div className="card-body">
                    <img className="product-img" src={img} alt="img" />
                    <h4 className="card-title text-center my-4">{service}</h4>
                    <h6 className="card-headline text-center my-4">"{headline}"</h6>
                    <p className="card-text text-center">{description}</p>
                    <h4 className="card-price text-center">Price: {price}</h4>
                <div className="d-flex justify-content-center     align-items-center">
                        <div className="mt-1">
                            {/* <button onClick={ () => navigateToProductDetail(_id)}   className="btn button">{_id}</button> */}
                            <Link className='Button-title navbar' to ="/ProductDetails">Order Now</Link>
                           
                        </div>
                    </div>
                    
            </div>
            </div>
        
      </div>
    );
};

export default Products;