import React, { useRef } from 'react';
import '../Styles/Booking.css';
import headerImage from '../Images/bobablue.png';

const Booking = () => {
    const formRef = useRef(null);

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='main-book'>
            <div className="homepage" id='book'>
                <div className="content">
                    <h1 className="title">Book Us For<br /> Your Events.</h1>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt<br /> 
                    ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam.
                    </p>
                    <button className="cta-button" onClick={scrollToForm}>Book Now</button>
                </div>
            </div>

            <div className="booking-container" ref={formRef}>
                <form className="booking-form">
                    <div>
                        <label>Your Name</label>
                        <input type="text" placeholder='Enter full name'/>
                    </div>
                    <div>
                        <label>Your Phone Number</label>
                        <input type="text" placeholder='Input phone number'/>
                    </div>
                    <div>
                    <div>
                        <label>Email Address (Optional)</label>
                        <input type="email" placeholder='Enter Email'/>
                    </div>
                    <div>
                        <label>Event Location</label>
                        <input type='text' placeholder='Enter specific Location'></input>
                    </div>
                        <label>Event Date (dd/mm/yy)</label>
                        <input type="date"/>
                    </div>
                    <div>
                        <label>Event Time</label>
                        <input type="time" />
                    </div>
                    <div>
                        <label>Event Details</label>
                        <textarea rows="4" placeholder='Add more information about the event'></textarea>
                    </div>
                    <button type="submit">Book Us</button>
                </form>
            </div>
            </div>
    );
}

export default Booking;