// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// const ProductDetails = () => {
//     const { productId } = useParams();
//     const [product, setProduct] =useState({});
//     useEffect( () => {
//         const url = `https://immense-shore-38517.herokuapp.com/product/${productId}`;
//         fetch(url)
//         .then(res => res.json())
//         .then(data => setProduct(data))
//     })
//     return (
//         <div>
//             <h2>Welcome to detail: {product.name}</h2>
//             <div className='text-center'>
//                 <Link to="/checkout">
//                     <button className='btn btn-primary'>Proceed Checkout</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;