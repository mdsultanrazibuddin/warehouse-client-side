import React, { useEffect, useState } from 'react';
import SpecialProducts from '../SpecialProducts/SpecialProducts';
import './SpecialProduct.css'

const SpecialProduct = () => {
    const[product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProduct(data))
            
    }, []);
    return (
        <div>
            <h1 className='text-center TEXT-Title'>Special products</h1>

            <div>
             
              {
                    product.map(product => <SpecialProducts
                        key = {product._id} 
                        product = {product}>
                    </SpecialProducts>)
                } 
        </div>
        </div>
    );
};

export default SpecialProduct;

