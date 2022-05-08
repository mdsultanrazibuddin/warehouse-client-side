
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'

import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Product from './Components/Product/Product';

import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth'
import OrderNow from './Components/OrderNow/OrderNow'
import ProductDetails from './Components/ProductDetails/ProductDetails';
import AddProduct from './Components/AddProduct/AddProduct';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
     <Route path="/" element={ <Home/>} />
     <Route path="/Product" element={ <Product/>} />
     <Route path="/ProductDetails" element={ <ProductDetails/>} />
     <Route path="/AddProduct" element={ <AddProduct/>} />
    
     <Route path="OrderNow" element={
        <RequireAuth>
            <OrderNow/>
        </RequireAuth>
     } />
     
     
     <Route path="SignUp" element={<SignUp/>} />
     <Route path="SignIn" element={<SignIn/>} />
    
     
    
     
     <Route path="*" element={<NotFound/>} />
     </Routes>
    </div>
  );
}

export default App;
