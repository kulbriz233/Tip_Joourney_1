import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/Home" className="logo-link">
              <img src={logo} alt="Logo" className="logo" />
              <span className="logo-text">Tipsy Alley GH</span>
            </Link>
            <button className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              {menuOpen ? <span>&times;</span> : <span>&#9776;</span>}
            </button>
          </div>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/Home" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
              <li><Link to="/booking" onClick={toggleMenu}>Book Order</Link></li>
              <li><Link to="/events" onClick={toggleMenu}>Events & Gallery</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/admin" onClick={toggleMenu}>Admin Page</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;











// import React from 'react'
// import { Link } from "react-router-dom";
// import logo from '../Images/Logo.png'; 
// import './Navbar.css';

// const Navbar = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgba(0, 0, 255, 0.1)' }}>
//                 <div className="container py-2">
//                     <Link className="navbar-brand d-flex align-items-center" to="/Home">
//                         <img src={logo} alt="Logo" className="logo me-2" />
//                         Tipsy Alley GH
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" tip-controls="navbarNav" tip-expanded="false" tip-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse align-middle" id="navbarNav">
//                         <ul className="navbar-nav zms-auto nav_ul align-items-center">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="./Home">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/services">Products</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/booking">Book Order</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/events">Events & Gallery</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact">Contact</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about">About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/admin">Admin Page</Link>
//                             </li>
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../Images/Logo.png';

// const Navbar = () => {
//   return (
//     <>
//       <nav> {/* Replace with a meaningful class name like 'navbar' */}
//         <div> {/* Replace with a meaningful class name like 'navbar-container' */}
//           <Link to="/Home">
//             <img src={logo} alt="Logo" />
//             Tipsy Alley GH
//           </Link>
//           <button type="button">
//             <span>&#9776;</span>
//           </button>
//           <div> {/* Replace with a meaningful class name like 'nav-links' (initially hidden) */}
//             <ul>
//               <li>
//                 <Link to="/Home">Home</Link>
//               </li>
//               <li>
//                 <Link to="/services">Products</Link>
//               </li>
//               <li>
//                 <Link to="/booking">Book Order</Link>
//               </li>
//               <li>
//                 <Link to="/events">Events & Gallery</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/admin">Admin Page</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
