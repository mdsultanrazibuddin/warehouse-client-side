
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'

import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Product from './Components/Product/Product';

import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth'

import ProductDetails from './Components/ProductDetails/ProductDetails';
import AddProduct from './Components/AddProduct/AddProduct';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import Footer from './Components/Footer/Footer';
import MyItem from './Components/MyItem/MyItem';
import Blog from './Components/Blog/Blog';
import SpecialProduct from './Components/SpecialProduct/SpecialProduct';
import Bonus from './Components/Bonus/Bonus';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
     <Route path="/" element={ <Home/>} />
     <Route path="/Product" element={ <Product/>} />
     <Route path="/SpecialProduct" element={ <SpecialProduct/>} />
     
    
     
    
     <Route path="/ProductDetails" element={
        <RequireAuth>
           { <ProductDetails/>} 
        </RequireAuth>
     } />
     <Route path="/ManageProduct" element={
        <RequireAuth>
            <ManageProduct/>
        </RequireAuth>
     } />
     <Route path="/AddProduct" element={
        <RequireAuth>
           <AddProduct/>
        </RequireAuth>
     } />
     <Route path="/MyItem" element={
        <RequireAuth>
           <MyItem/>
        </RequireAuth>
     } />
     
     
     <Route path="/SignUp" element={<SignUp/>} />
     <Route path="/SignIn" element={<SignIn/>} />
     <Route path="/Blog" element={<Blog/>} />
     <Route path="/Bonus" element={<Bonus/>} />
    
     
    
     
     <Route path="*" element={<NotFound/>} />
     </Routes>


     <Footer/>
    </div>
  );
}

export default App;
