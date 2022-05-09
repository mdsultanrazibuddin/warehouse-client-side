import React from 'react';
import {  Link } from 'react-router-dom';
import './SpecialProducts.css'

const SpecialProducts = ({product}) => {
    
        const {img, description, quantity, supplier, name, price} = product;
        
        return (
            <div className="col-lg-4 mb-5 mt-5  service-container">
            
                <div className=" mx-4 card product-card">
                <div className="  card-body">
                        <img className="product-img" src={img} alt="img" />
                        <h4 className="card-title text-center my-4">{name}</h4>
                        <p className="card-title text-center my-4">{description}</p>
                        <h5 className="card-title text-center my-4">Supplier Name : {supplier}</h5>
                        <h4 className="card-title text-center my-4">Quantity : {quantity}</h4>
                        
                        <h4 className="card-price text-center">Price: {price}</h4>
                    <div className="d-flex justify-content-center     align-items-center">
                            <div className="mt-1">
                                {/* <button onClick={ () => navigateToProductDetail(_id)}   className="btn button">{_id}</button> */}
                                <Link className='Button-title navbar' to ="/ProductDetails">Update</Link>
                               
                            </div>
                        </div>
                        
                </div>
                </div>
                
            
          </div>
        );
};

export default SpecialProducts;