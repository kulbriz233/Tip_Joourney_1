import './App.css';
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


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/events' element={<Events />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
