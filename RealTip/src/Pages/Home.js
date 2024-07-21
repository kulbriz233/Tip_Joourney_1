import React, { useEffect } from 'react';
import '../Styles/Home.css';
import image from '../Images/bob.png';
import bablue from '../Images/bobo2.png';
import bobablu from '../Images/bobo3.png';
import bobabl from '../Images/bobo1.png';
import bobab from '../Images/bobo4.png';
import bobatea from '../Images/bobatea.png';
import Cocktailalcohol from '../Images/cocktail alcohol.png';
import mocktailalcohol from '../Images/mocktail alcohol.png';
import straw from '../Images/strawberry.png';
import nonalco from '../Images/Nonalcohol.png';
import mockn from '../Images/mocknon.png';
import reviewImage from '../Images/profile.jpeg';

const images = [bablue, bobablu, bobabl, bobab];

const Home = () => {
  useEffect(() => {
    const homepage = document.getElementById('homepage');
    let currentImageIndex = 0;

    homepage.style.backgroundImage = `url(${images[currentImageIndex]})`;
    const changeBackgroundImage = () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      homepage.style.backgroundImage = `url(${images[currentImageIndex]})`;
      homepage.classList.add('slide-in');
      setTimeout(() => {
        homepage.classList.remove('slide-in');
      }, 3000); 
    };
    const intervalId = setInterval(changeBackgroundImage, 4000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="homepage" id="homepage">
        <div className="content" id="content">
          <h1 className="title" id="title">Joy in Every <br /> Tipsy Alley.</h1>
          <p className="description" id="description">
            Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt<br /> 
            ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam.
          </p>
          <button id="cta-button" className="cta-button"><a href="./products">Explore</a></button>
        </div>
      </div>
      <div className="section2" id="section2">
        <div className="image-container">
          <img src={image} alt="Drinks" />
        </div>
        <div className="text-container">
          <h3>What is that special thing about us?</h3>
          <h2>Our Bubble Tale</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <button className="cta-button">
            <a href="./about">Load More</a>
          </button>
        </div>
      </div>
      <div className="section3" id="section3">
        <div className="header">
          <h2>Tipsy of Joy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className="grid">
          <div className="grid-item">
            <div className="circle">
              <img src={bobatea} alt="Boba drink" />
            </div>
            <p>Boba Tea</p>
          </div>
          <div className="grid-item">
            <div className="circle">
              <img src={Cocktailalcohol} alt="Cocktail" />
            </div>
            <p>Cocktails (Alcoholic)</p>
          </div>
          <div className="grid-item">
            <div className="circle">
              <img src={mocktailalcohol} alt="Mocktail" />
            </div>
            <p>Mocktails</p>
          </div>
          <div className="grid-item">
            <div className="circle">
              <img src={straw} alt="Strawberry boba" />
            </div>
            <p>Strawberry Boba Drink</p>
          </div>
          <div className="grid-item">
            <div className="circle">
              <img src={nonalco} alt="Non-Alcoholic Cocktail" />
            </div>
            <p>Cocktails (Non-Alcoholic)</p>
          </div>
          <div className="grid-item">
            <div className="circle">
              <img src={mockn} alt="Non-Alcoholic Mocktail" />
            </div>
            <p>Mocktails (Non-Alcoholic)</p>
          </div>
        </div>
        <button id="cta-button" className="cta-button">
          <a href="./products">More Products</a>
        </button>
      </div>
      <div className="section4" id="section4">
        <div className="header">
          <h2>Reviews</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className="reviews">
          <div className="review-card">
            <img src={reviewImage} alt="Reviewer" className="review-image" />
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
            <img src={reviewImage} alt="Reviewer" className="review-image" />
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
