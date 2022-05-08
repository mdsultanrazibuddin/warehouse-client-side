import React from 'react';
import useProduct from '../Hooks/useProduct';

const ManageProduct = () => {
    const [product] = useProduct();
    const handleDelete = id =>{
        const proceed = window.confirm('Are you Sure');
        if(proceed){
            
        }
    }
    return (
        <div className='w-50 mx-auto'>
           

            {
                product.map(product => <div key ={product._id}>
                    <h6>{product.name} <button onClick={() => handleDelete() }>x</button></h6>


                </div>)
            }
        </div>
    );
};

export default ManageProduct;