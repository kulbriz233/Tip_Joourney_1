import React from 'react';
import '../Styles/About.css';
import team1 from '../Images/bo4.png';
import team2 from '../Images/bob5.png';
import team3 from '../Images/bob6.png';
import Bobg from '../Images/bob.png';

const About = () => {
  return (
      <div className="about-us">
        <section>
            <div className="homepage" id='about'>
              <div className="content">
                <h1 className="title">How Well <br />Do <span className='U-text'>U </span>Know Tipsy</h1>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt<br /> 
                  ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam.
                </p>
                <button className="cta-button">Know More</button>
              </div>
            </div>
            <div className="section2">
              <div className="image-container">
                <img src={Bobg} alt="Drinks" />
              </div>
              <div className="text-container">
                <h3>What is that special thing about us?</h3>
                <h1>Our Bubble Tale</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <button className="cta-button">Always A Happy Hour</button>
              </div>
            </div>
        </section>
        <section id="about-us-what">
              <div>
                  <h2>Why Choose Us</h2>
                  <div id="features">
                      <div className="feature">
                          <i class="fas fa-flask"></i>
                          <p>Chemical Free</p>
                      </div>
                      <div className="feature">
                          <i class="fas fa-heartbeat"></i>
                          <p>Healthy Facts</p>
                      </div>
                      <div className="feature">
                          <i class="fas fa-leaf"></i>
                          <p>Eco-Besties</p>
                      </div>
                      <div className="feature">
                          <i class="fas fa-candy-cane"></i>
                          <p>Sugar Free</p>
                      </div>
                  </div>
              </div>
          </section>
          
      </div>
  );
};

export default About;
