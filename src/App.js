import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import { useEffect,useState } from 'react';
import HashLoader from "react-spinners/HashLoader";

import 'aos/dist/aos.css';




function App() {

  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 8000 );
  }, [])

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };
  
  return (
    <div className="App">
    {
      loading ? 
      <div className="loader">
     <HashLoader
      color={'#2d7221'}
      loading={loading} 
      size={90}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
      </div>
    : 
      <BrowserRouter>
       <ScrollToTop /> 
      <Navbar/>
       <Routes>
         <Route path='/' element={
         <Home /> }
         ></Route>
         <Route path='/Shop' element={<Shop/>}></Route>
         <Route path='/Contact' element={<ContactPage/>}></Route>
       </Routes> 
       <Footer/>
      </BrowserRouter>
      
    }
       
    </div>
  );
}

export default App;
