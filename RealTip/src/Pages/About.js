import React from 'react';
import '../Styles/About.css';
import team1 from '../Images/bo4.png';
import team2 from '../Images/bob5.png';
import team3 from '../Images/bob6.png';
import Bobg from '../Images/bobg.png';

const About = () => {
  return (
    <div className="about-us">
      <section className="about-us-intro">
  <div className="container">
    <div className="heading">
      <h1>ABOUT US</h1>
    </div>
    <div className="wrapper">
      <div className="image">
        <img className="image" src={Bobg} alt="Company Background" />
      </div>
      <div className="content">
        <h2>Outstanding solutions for your needs</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio commodi aperiam,
          quaerat placeat, hic tempora omnis odio unde sed nihil quisquam laudantium modi corrupti
          minus dolor, officia aut nam magnam nesciunt temporibus autem cupiditate! Hic temporibus
          ipsa nulla non sunt dolor similique, voluptatem voluptas rem possimus, incidunt
          necessitatibus atque?
        </p>
        <a href="#" className="btn">Get a BoBa Now</a>
      </div>
    </div>
  </div>
</section>
<section className="about-us-team">
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
</section>
    </div>
  );
};

export default About;
