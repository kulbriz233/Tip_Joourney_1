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
            <div className="image-header" style={{ backgroundImage: `url(${headerImage})` }}>
                <div className="header-content">
                    <h1 className="title-header">Book Us For Your <br/>Events Now</h1>
                    <p className="subtext">This is a brief subtext that provides additional information about the main title, and it should be around 24 words long to ensure clarity and conciseness.</p>
                    <button className="cta-button" onClick={scrollToForm}>Make Order</button>
                </div>
            </div>

            <div className="booking-container" ref={formRef}>
                <form className="booking-form">
                    <div>
                        <label>Your Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Your Phone Number</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email Address (Optional)</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label>Products To Order</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Quantity Of Products</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>Event Date (dd/mm/yy)</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>Event Time</label>
                        <input type="time" />
                    </div>
                    <div>
                        <label>Event Details</label>
                        <textarea rows="4"></textarea>
                    </div>
                    <button type="submit">Book Us</button>
                </form>
            </div>
            </div>
    );
}

export default Booking;