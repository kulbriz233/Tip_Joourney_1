import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Admin.css';
import team2 from '../Images/bob.png';

const Admin = ({ setAuth }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productNames, setProductNames] = useState([]);
  const navigate = useNavigate();

  const productData = {
    Cocktail: ['Margarita', 'Martini', 'Mojito'],
    Moctail: ['Virgin Mojito', 'Shirley Temple', 'Nojito'],
    Boba_Drinks: ['Classic Milk Tea', 'Taro Milk Tea', 'Matcha Latte'],
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setProductNames(productData[category] || []);
  };

  const handleLogout = () => {
    setAuth(false);
    localStorage.removeItem('isAuth');
    navigate('/login');
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="logo">Admin Portal</div>
        <div className="search-bar">
          <input type="search" placeholder="Products" />
        </div>
        <button className="logout-button" onClick={handleLogout}>Log Out</button>
      </header>
      
      <main className="admin-main">
        <h1>Manage your inventory effortlessly.</h1>
        <p>Easily add, delete, and organize your products. Boost efficiency with our user-friendly interface.</p>
        <button className="get-started-button">Get Started</button>
        <div className="image-container">
          <img src={team2} alt="Drinks" />
        </div>
      </main>

      <section className="bookings">
        <h2>Bookings</h2>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Event Date</th>
              <th>Event Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Customer Name">Akwasi Boadi</td>
              <td data-label="Phone">0558831175</td>
              <td data-label="Email">agyei123@gmail.com</td>
              <td data-label="Event Date">06/07/24</td>
              <td data-label="Event Time">9:00am</td>
              <td data-label="Location">East Legon</td>
            </tr>
            <tr>
              <td data-label="Customer Name">Afia Manu</td>
              <td data-label="Phone">0558831175</td>
              <td data-label="Email">agyei123@gmail.com</td>
              <td data-label="Event Date">06/07/24</td>
              <td data-label="Event Time">12:00pm</td>
              <td data-label="Location">Abrepo-Kumasi</td>
            </tr>
            <tr>
              <td data-label="Customer Name">Afram Del</td>
              <td colSpan="5" className="event-details">Event Details</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className='add-products'>
        <h2>Add Products</h2>
        <div className='form-row'>
          <label>Product Name</label>
          <input className='add-label' type='text' placeholder='Input Product Name' />
        </div>
        <div className='form-row'>
          <label>Price</label>
          <input className='add-label' type='text' placeholder='Input Product price' />
        </div>
        <div className='form-row'>
          <label>Add Image</label>
          <input className='add-label' type='file' accept="image/*" />
        </div>
        <button className='add-products-button'>Add Products</button>
      </section>

      <section className='delete-products-section'>
        <h2>Remove/Delete Products</h2>
        <div className='delete-products-form-row'>
          <label className='delete-products-label'>Product Category</label>
          <select className='delete-products-select' value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Moctail">Moctail</option>
            <option value="Boba_Drinks">Boba Drinks</option>
          </select>
        </div>
        <div className='delete-products-form-row'>
          <label className='delete-products-label'>Product Name</label>
          <select className='delete-products-select'>
            <option value="">Select</option>
            {productNames.map((productName, index) => (
              <option key={index} value={productName}>{productName}</option>
            ))}
          </select>
        </div>
        <button className='delete-products-button'>Delete Products</button>
        <div className='delete-products-nav'>
          <a href="#">Add New Products</a>
          <a href="#">Remove Products</a>
          <a href="#">Inventory Management</a>
          <a href="#">User Permissions</a>
        </div>
      </section>

    </div>
  );
};

export default Admin;
