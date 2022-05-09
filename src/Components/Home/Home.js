import React from 'react';
import Banner from '../Banner/Banner';
import Bonus from '../Bonus/Bonus';
import Product from '../Product/Product';
import SpecialProduct from '../SpecialProduct/SpecialProduct';


const Home = () => {
    
    return (
        <div>
            <Banner/>
           <Product/>
           <Bonus/>
           <SpecialProduct/>
        </div>
    );
};

export default Home;