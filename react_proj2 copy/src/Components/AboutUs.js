// AboutUs.js

import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          Welcome to <span className="highlight">Our Donation Platform</span>, where every contribution counts towards creating positive change in the world. Our platform is dedicated to connecting compassionate donors with meaningful causes, empowering individuals and communities to make a difference.
        </p>
        <p className="about-us-description">
          At <span className="highlight">Our Donation Platform</span>, we believe in the transformative power of generosity. Through the collective efforts of our donors, partners, and volunteers, we strive to address a wide range of social, environmental, and humanitarian challenges.
        </p>
        <p className="about-us-description">
          Our platform serves as a hub for philanthropy, offering a diverse range of donation opportunities across various sectors including education, healthcare, environmental conservation, disaster relief, and more. Whether you're passionate about supporting local communities, protecting the environment, or advocating for human rights, there's a cause for everyone to rally behind.
        </p>
        <p className="about-us-description">
          Every donation, no matter how big or small, has the power to make a meaningful impact. From providing essential supplies to those in need, to funding life-saving research and development, your contributions help create positive change and improve the lives of individuals and communities around the globe.
        </p>
        <p className="about-us-description">
          Join us in our mission to build a more compassionate and equitable world. Together, we can make a difference and leave a lasting legacy of hope, kindness, and generosity for future generations to come.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
