import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    const url = `https://immense-shore-38517.herokuapp.com/product`
    fetch(url, {
        method : 'POST',
        headers : {
            'content-type': 'application/json'
        },
        body : JSON.stringify(data)
    })
    .then (res =>res.json())
    .then (result =>{
        console.log(result);
    })
  }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center mt-3 mb-5  TEXT-Title'>Add Product Item</h1>
             <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-3 border'  placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-3 border'  placeholder='Supplier Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-3 border' placeholder='Description' {...register("description")} />
      <input className='mb-3 border' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-3 border' placeholder='Quantity' type="number" {...register("Quantity")} />
      <input className='mb-3 border' placeholder='Photo URL' type="text" {...register("img")} />
      <input className='mb-3  addbutton'  type="submit" value="Add Product" />
    </form>
  
        </div>
    );
};

export default AddProduct;