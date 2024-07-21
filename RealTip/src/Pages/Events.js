import React, { useEffect } from 'react';
import '../Styles/Events.css';
import eventImage1 from '../Images/bob1.png';
import eventImage2 from '../Images/bob1.png';
import eventImage3 from '../Images/bob1.png';
import eventImage4 from '../Images/bob1.png';

const Events = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.event-card');
      const triggerBottom = window.innerHeight / 5 * 4;

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
          card.classList.add('show');
        } else {
          card.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="events-container">
      <div className="homepage">
      <div className="content">
        <h1 className="title">Tipsy <br/>Makes Every <br/>Event Special.</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt<br /> 
          ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam.
        </p>
        <button className="cta-button">Know More</button>
      </div>
    </div>
      <h1 className="events-title">Events</h1>
      <div className="events-content">
        <div className="event-card">
          <img src={eventImage1} alt="Event 1" className="event-image" />
          <p className="event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam.</p>
        </div>
        <div className="event-card">
          <p className="event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam.</p>
          <img src={eventImage2} alt="Event 2" className="event-image" />
        </div>
        <div className="event-card">
          <img src={eventImage3} alt="Event 3" className="event-image" />
          <p className="event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam.</p>
        </div>
        <div className="event-card">
          <p className="event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam.</p>
          <img src={eventImage4} alt="Event 4" className="event-image" />
        </div>
      </div>
    </div>
  );
};

export default Events;
