import React from 'react';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import SpecialProduct from '../SpecialProduct/SpecialProduct';


const Home = () => {
    
    return (
        <div>
            <Banner/>
           <Product/>
           <SpecialProduct/>
        </div>
    );
};

export default Home;