
import React, { useEffect, useState } from 'react';

import Products from '../Products/Products';




import './Product.css'
const Product = () => {
 
 
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size] = useState(6)
     const[product, setProduct] = useState([])
    useEffect(() => {
      fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
          .then(response => response.json())
          .then(data => setProduct(data))
          
  }, [page, size] );
  
    useEffect(() =>{
        fetch('http://localhost:5000/productCount')
        .then(res =>res.json())
        .then (data =>{
            const count = data.count;
            const pages = Math.ceil(count/6);
            setPageCount(pages)
        })
    })
  

  
 
    return (

      
      <div>
        <div>
             <h1 className='mt-5 text-center TEXT-Title'>Top Products</h1>
              {
                    product.map(product => <Products
                        key = {product._id} 
                        product = {product}>
                    </Products>)
                } 
        </div>

        <div className='text-center pagination'>
        {
                [...Array(pageCount).keys()]
                .map(number => <button className={page === number ? 'selected' : ''} onClick={() => setPage(number)}>{number +1}</button>)
            }
        </div>
                
      </div>
    );
};


export default Product;
