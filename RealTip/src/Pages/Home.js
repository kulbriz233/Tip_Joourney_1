import React from 'react';
import '../Styles/Home.css';
import image from '../Images/bob.png';
import reviewImage from '../Images/bob5.png';

const Home = () => {
  return (
    <>
    <div className="homepage">
      <div className="content">
        <h1 className="title">Joy in Every <br /> Tipsy Alley.</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt<br /> 
          ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam.
        </p>
        <button className="cta-button">Know More</button>
      </div>
    </div>
    <div className="section2">
      <div className="image-container">
        <img src={image} alt="Drinks" />
      </div>
      <div className="text-container">
        <h3>What is that special thing about us?</h3>
        <h1>Our Bubble Tale</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <button className="cta-button">Load more</button>
      </div>
    </div>
    <div className="section3">
      <div className="header">
        <h1>Tipsy of Joy</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
      <div className="grid">
        <div className="grid-item">
          <div className="circle"></div>
          <p>Boba Tea</p>
        </div>
        <div className="grid-item">
          <div className="circle"></div>
          <p>Cocktails (Alcoholic)</p>
        </div>
        <div className="grid-item">
          <div className="circle"></div>
          <p>Mocktails (Non-Alcoholic)</p>
        </div>
        <div className="grid-item">
          <div className="circle"></div>
          <p>Boba Tea</p>
        </div>
        <div className="grid-item">
          <div className="circle"></div>
          <p>Cocktails (Alcoholic)</p>
        </div>
        <div className="grid-item">
          <div className="circle"></div>
          <p>Mocktails (Non-Alcoholic)</p>
        </div>
      </div>
      <button className="cta-button">More Products</button>
    </div>
    <div className="section4">
      <div className="header">
        <h1>Reviews</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
      <div className="reviews">
        <div className="review-card">
          <img src={reviewImage} alt="Reviewer" className="review-image"/>
          <div className="review-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            <p>- Anne Frank -</p>
            <div className="stars">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
          </div>
        </div>
        <div className="review-card">
          <img src={reviewImage} alt="Reviewer" className="review-image"/>
          <div className="review-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            <p>- Anne Frank -</p>
            <div className="stars">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
