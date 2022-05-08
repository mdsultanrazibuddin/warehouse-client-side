
import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';




import './Product.css'
const Product = () => {
  const[product, setProduct] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/product')
        .then(response => response.json())
        .then(data => setProduct(data))
        
}, []);
  

  
 
    return (
      
      <div>
        {
                    product.map(product => <Products
                        key = {product._id} 
                        product = {product}>
                    </Products>)
                } 
      </div>
    );
};


export default Product;
