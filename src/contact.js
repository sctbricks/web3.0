import React from 'react';
import './contact.css'; // Import CSS file for styling
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'; // Import Font Awesome icons

const ContactUs = () => {
  const handleWhatsApp = () => {
    // Implement functionality to open WhatsApp
    window.open('https://api.whatsapp.com/send?phone=+918428560078', '_blank');
  };

  const handleCall = () => {
    // Implement functionality to initiate a call
    window.open('tel:+918428560078');
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>For inquiries or assistance, feel free to reach out to us:</p>
      <div className="contact-info">
        <p><FaMapMarkerAlt /> Address: Shrii chinnamman trader, Perundurai Rd, opp. to Nandha medical college, Erode, Tamil Nadu 638052</p>
        <p><FaPhoneAlt /> Phone: +918428560078</p>
      </div>
      <p>Explore our services and get in touch:</p>
      <div className="button-container">
        <button className="whatsapp-btn" onClick={handleWhatsApp}><FaWhatsapp /> WhatsApp</button>
        <button className="call-btn" onClick={handleCall}><FaPhoneAlt /> Call</button>
      </div>
    </div>
  );
};

export default ContactUs;
