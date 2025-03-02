import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with IEEE Alfaisal Student Branch</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <i className="fa fa-map-marker"></i>
            <div>
              <h3>Location</h3>
              <p>IEEE Student Branch Office</p>
              <p>Engineering Building, Room E-123</p>
              <p>Alfaisal University, Riyadh, Saudi Arabia</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fa fa-envelope"></i>
            <div>
              <h3>Email</h3>
              <p>ieee@alfaisal.edu</p>
              <p>For membership: membership.ieee@alfaisal.edu</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fa fa-clock-o"></i>
            <div>
              <h3>Office Hours</h3>
              <p>Sunday to Thursday</p>
              <p>10:00 AM - 3:00 PM</p>
            </div>
          </div>
          
          <div className="info-item">
            <i className="fa fa-share-alt"></i>
            <div>
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook"></i> IEEE.Alfaisal
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i> @IEEE_Alfaisal
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i> ieee_alfaisal
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin"></i> IEEE Alfaisal
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
      
      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          {/* Replace with actual Google Maps embed code */}
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/map.jpg`} 
            alt="Map to Alfaisal University" 
            className="map-placeholder" 
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;