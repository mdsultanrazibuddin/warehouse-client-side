import React from 'react';

import useProduct from '../Hooks/useProduct';
import './ManageProduct.css'

const ManageProduct = () => {
    const [product, setProduct] = useProduct();
    const handleDelete = id =>{
        const proceed = window.confirm('Are you Sure');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`
    fetch( url , {method : 'DELETE'})
    .then (res =>res.json())
    .then (data =>{
        console.log(data);
        const remaining = product.filter(product => product._id !== id);
        setProduct(remaining)
    })
        }
    }
    return (
        <div className='w-50 mx-auto'>

            <h1 className='text-center mt-5 mb-5'>All Products</h1>
           

            <div>
            {
                product.map(product => <div key ={product._id}>
                    <li className='product-name'>{product.name} <button className='remove' onClick={() => handleDelete(product._id) }>Delete</button></li>


                </div>)
            }
            </div>
           
        </div>
    );
};

export default ManageProduct;