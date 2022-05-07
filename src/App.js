
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'

import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
     <Route path="/" element={ <Home/>} />
    
    
     
     
     <Route path="SignUp" element={<SignUp/>} />
     <Route path="SignIn" element={<SignIn/>} />
    
     
    
     
     <Route path="*" element={<NotFound/>} />
     </Routes>
    </div>
  );
}

export default App;
