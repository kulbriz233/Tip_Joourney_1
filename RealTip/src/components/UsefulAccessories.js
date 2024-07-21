// import React from 'react'
// import { Link } from "react-router-dom";
// import logo from '../Images/Logo.png'; 
// import './Navbar.css';

// const Navbar = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container py-2">
//                     <Link className="navbar-brand d-flex align-items-center" to="/Home">
//                         <img src={logo} alt="Logo" className="logo me-2" />
//                         Tipsy Alley GH
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" tip-controls="navbarNav" tip-expanded="false" tip-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse align-middle" id="navbarNav">
//                         <ul className="navbar-nav ms-auto nav_ul align-items-center">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/Home">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/services">Products</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/bookOrder">Book Order</Link>
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
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar;
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



// import React from 'react';
// import '../Styles/Admin.css';
// import team2 from '../Images/bob.png';

// const Admin = () => {
//   return (
//     <div className="admin-container">
//       <header className="admin-header">
//         <div className="logo">Admin Portal</div>
//         <div className="search-bar">
//           <input type="search" placeholder="Products" />
//         </div>
//         <button className="logout-button">Log Out</button>
//       </header>
      
//       <main className="admin-main">
//         <h1>Manage your inventory effortlessly.</h1>
//         <p>Easily add, delete, and organize your products. Boost efficiency with our user-friendly interface.</p>
//         <button className="get-started-button">Get Started</button>
//         <div className="image-container">
//           <img src={team2} alt="Drinks" />
//         </div>
//       </main>

//       <section className="bookings">
//         <h2>Bookings</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Customer Name</th>
//               <th>Phone</th>
//               <th>Email</th>
//               <th>Event Date</th>
//               <th>Event Time</th>
//               <th>Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td data-label="Customer Name">Akwasi Boadi</td>
//               <td data-label="Phone">0558831175</td>
//               <td data-label="Email">agyei123@gmail.com</td>
//               <td data-label="Event Date">06/07/24</td>
//               <td data-label="Event Time">9:00am</td>
//               <td data-label="Location">East Legon</td>
//             </tr>
//             <tr>
//               <td data-label="Customer Name">Afia Manu</td>
//               <td data-label="Phone">0558831175</td>
//               <td data-label="Email">agyei123@gmail.com</td>
//               <td data-label="Event Date">06/07/24</td>
//               <td data-label="Event Time">12:00pm</td>
//               <td data-label="Location">Abrepo-Kumasi</td>
//             </tr>
//             <tr>
//               <td data-label="Customer Name">Afram Del</td>
//               <td colSpan="5" className="event-details">Event Details</td>
//             </tr>
//           </tbody>
//         </table>
//       </section>

//       <section className='add-products'>
//         <h2>Add Products</h2>
//         <div className='form-row'>
//           <label>Product Name</label>
//           <input className='add-label' type='text' placeholder='Input Product Name' />
//         </div>
//         <div className='form-row'>
//           <label>Price</label>
//           <input className='add-label' type='text' placeholder='Input Product price' />
//         </div>
//         <div className='form-row'>
//           <label>Add Image</label>
//           <input className='add-label' type='file' placeholder='Input Product price' />
//         </div>
//         <button className='add-products-button'>Add Products</button>
//       </section>

//       <section className='delete-products-section'>
//   <h2>Remove/Delete Products</h2>
//   <div className='delete-products-form-row'>
//     <label className='delete-products-label'>Product Category</label>
//     <select className='delete-products-select'>
//       <option>Select</option>
//       <option>Cocktail</option>
//       <option>Moctail</option>
//       <option>Boba Drinks</option>
//     </select>
//   </div>
//   <div className='delete-products-form-row'>
//     <label className='delete-products-label'>Product Name</label>
//     <select className='delete-products-select'>
//       <option>Select</option>
//     </select>
//   </div>
//   <button className='delete-products-button'>Delete Products</button>
//   <div className='delete-products-nav'>
//     <a href="#">Add New Products</a>
//     <a href="#">Remove Products</a>
//     <a href="#">Inventory Management</a>
//     <a href="#">User Permissions</a>
//   </div>
// </section>

//     </div>
//   );
// };

// export default Admin;

// background: linear-gradient(to right, #6a11cb, #2575fc);

{/* <section className="about-us-team">
            <div className="container">
              <h2>Have You Enjoyed Any of These?</h2>
              <div className="team-members">
                <div className="team-member">
                  <div className="team-member-img-container">
                    <img src={team1} alt="John Doe" />
                  </div>
                  <h3>Boba</h3>
                  <p>Brown</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio commodi aperiam,
                    quaerat placeat, hic tempora omnis odio unde sed nihil quisquam laudantium modi corrupti
                    minus dolor.
                  </p>
                </div>
                <div className="team-member">
                  <div className="team-member-img-container">
                    <img src={team2} alt="Jane Smith" />
                  </div>
                  <h3>Cocktail</h3>
                  <p>Brown</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio commodi aperiam,
                    quaerat placeat, hic tempora omnis odio unde sed nihil quisquam laudantium modi corrupti
                    minus dolor.
                  </p>
                </div>
                <div className="team-member">
                  <div className="team-member-img-container">
                    <img src={team3} alt="Mike Johnson" />
                  </div>
                  <h3>Moctail</h3>
                  <p>Blue</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio commodi aperiam,
                    quaerat placeat, hic tempora omnis odio unde sed nihil quisquam laudantium modi corrupti
                    minus dolor.
                  </p>
                </div>
              </div>
            </div>
          </section> */}



        //   .about-us-team {
        //     background: #64a2ff;
        //     color: white;
        //     padding: 50px 0;
        //     text-align: center;
        //   }
          
        //   .about-us-team h2 {
        //     font-size: 2em;
        //     margin-bottom: 40px;
        //   }
          
        //   .team-members {
        //     display: flex;
        //     justify-content: center;
        //     flex-wrap: nowrap;
        //     gap: 20px;
        //   }
          
        //   .team-member {
        //     background-color: #3083ff;
        //     border-radius: 5px;
        //     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        //     transition: transform 0.3s ease, box-shadow 0.3s ease;
        //     width: 350px;
        //     text-align: center;
        //     overflow: hidden;
        //   }
          
        //   .team-member:hover {
        //     transform: translateY(-10px);
        //     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        //   }
          
        //   .team-member-img-container {
        //     width: 100%;
        //     height: 0;
        //     padding-top: 100%;
        //     position: relative;
        //     overflow: hidden;
        //   }
          
        //   .team-member-img-container img {
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 100%;
        //     object-fit: cover;
        //     transition: transform 0.3s ease;
        //   }
          
        //   .team-member:hover .team-member-img-container img {
        //     transform: scale(1.1);
        //   }
          
        //   .team-member h3 {
        //     margin: 15px 0 5px;
        //     font-size: 1.5em;
        //     color: #e91e63;
        //   }
          
        //   .team-member p {
        //     text-align: left;
        //     margin: 0 15px 15px;
        //     font-size: 1em;
        //     color: #fff;
        //   }


        
//   .image, .content {
//     width: 100%;
//     margin: 0 0 30px;
//   }


//   .image, .content {
//     width: 100%;
//     margin: 0 0 30px;
//   }
  
//   .team-members {
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//     gap: 2px;
//   }

