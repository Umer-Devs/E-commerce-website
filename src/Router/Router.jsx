import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
 import About from '../pages/About';
 import Contact from '../pages/Contact';
  import NotFound from '../pages/NotFound';
  import Product from '../pages/Product';
  import Cart from '../pages/Cart';
  import  Search from '../pages/Search';
  import  Logout from '../pages/Logout';
  import Owner from '../pages/Owner';
  import  Help from '../pages/Help';
  import Productdeatail from '../pages/Productdeatail';


const Router = () => {
 


 
 

  
  
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home/>}  />
        <Route path='/about'  element={<About/>}  />
        <Route path='/contact'  element={<Contact/>}  />
        <Route path='*'  element={<NotFound/>}  />
        <Route path='/products'  element={<Product/>}  />
        <Route path='/cart/:id'  element={<Cart/>}  />
        <Route path='/search'  element={<Search/>}  />
        <Route path='/logout'  element={<Logout/>}  />
        <Route path='/owner'  element={<Owner/>}  />
        <Route path='/help'  element={<Help/>}  />
        <Route path='/Productdetail/:id'  element={<Productdeatail/>}  />
        
      </Routes>
    </div>
  )
}

export default Router
