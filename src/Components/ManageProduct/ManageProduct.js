import React from 'react';

import useProduct from '../Hooks/useProduct';
import './ManageProduct.css'
import { MdDeleteForever } from 'react-icons/md';

const ManageProduct = () => {
    const [product, setProduct] = useProduct();
    const handleDelete = id =>{
        const proceed = window.confirm('Are you Sure');
        if(proceed){
            const url = `https://immense-shore-38517.herokuapp.com/product/${id}`
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

            <h1 className='text-center mt-5 mb-5 TEXT-Title'>All Products</h1>
           

            <div>
            {
                product.map(product => <div key ={product._id}>
                    <li className='product-name'>{product.name} <button className='remove' onClick={() => handleDelete(product._id) }>Delete <MdDeleteForever/></button></li>


                </div>)
            }
            </div>
           
        </div>
    );
};

export default ManageProduct;