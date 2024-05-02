import React from 'react';
import Carousel from './products'; // Import the Carousel component
import './Servicepage.css'; // Import the CSS file for your service page

const ServicePage = () => {
  return (
    <div className="service-page">
      <h2>Our Services</h2>
      <p>Explore our range of products and services:</p>
      <Carousel /> {/* Render the Carousel component */}
    </div>
  );
};

export default ServicePage;
