import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import About from './Pages/About';
import Products from './Pages/Products';
import Booking from './Pages/Booking';
import Admin from './Pages/Admin';
import Login from './components/Login';
import Boba from './Pages/Boba';
import Mocktails from './Pages/Moctails';
import Cocktails from './Pages/Cocktails'; 

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuth');
    if (auth === 'true') {
      setIsAuth(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/boba" element={<Boba />} /> 
        <Route path="/mocktails" element={<Mocktails />} /> 
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={isAuth ? <Admin setAuth={setIsAuth} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login setAuth={setIsAuth} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
