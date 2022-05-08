import React from 'react';
import useProduct from '../Hooks/useProduct';

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
           

            {
                product.map(product => <div key ={product._id}>
                    <h6>{product.name} <button onClick={() => handleDelete() }>x</button></h6>


                </div>)
            }
        </div>
    );
};

export default ManageProduct;