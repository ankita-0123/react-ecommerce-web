import React, {useContext} from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import DataProvider from './components/DataProvider';
import Details from './components/Details';
import Cart from './components/Cart';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AuthPage from './components/AuthPage';
import AuthContext from './components/auth-context';
const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <DataProvider>
    <div className='App'>
      <Router>
      <Header/> 
      <section>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>            
          {authCtx.isLoggedIn && (<Route path="product" element={<Product/>}/>)}
          {!authCtx.isLoggedIn && (<Route path="login" element={<AuthPage/>}/>)}
          <Route path="products/:id" element={<Details/>}/>
          <Route path="cart" element={<Cart/>}/>
          
        </Routes>
      </section>

      </Router>
           
    </div>
    </DataProvider>
  )
}

export default App;
