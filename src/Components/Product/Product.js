
import React from 'react';
import useProduct from '../Hooks/useProduct';
import Products from '../Products/Products';




import './Product.css'
const Product = () => {
 const [product] = useProduct();
  

  
 
    return (

      
      <div>

         <h1 className='mt-5 text-center'>Our Products</h1>
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
