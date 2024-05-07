import React, { useState } from 'react';
import './ContactUs.css';
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleBack = () => {
    // Handle back button action here (e.g., redirect to previous page)
    navigate("/Options"); // Use navigate to redirect
  };

  return (
    <div className="ContactUs-container">
      <div className="ContactUs-contact-details">
        <h2>Contact Details</h2>
        <p>Phone: +123456789</p>
        <p>Email: example@example.com</p>
        {/* Add additional contact details here */}
      </div>
      <form className="ContactUs-form-container" onSubmit={handleSubmit}>
        <h2>Report A Problem</h2>
        <div className="ContactUs-form-group">
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="ContactUs-form-input" placeholder="Your Name" required />
        </div>
        <div className="ContactUs-form-group">
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="ContactUs-form-input" placeholder="Your Email" required />
        </div>
        <div className="ContactUs-form-group">
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="ContactUs-form-input" placeholder="Your Phone Number" />
        </div>
        <div className="ContactUs-form-group">
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="ContactUs-form-input" placeholder="Subject" required />
        </div>
        <div className="ContactUs-form-group">
          <textarea name="message" value={formData.message} onChange={handleChange} className="ContactUs-form-textarea" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="ContactUs-form-submit">Submit</button>
      </form>
      <button type="button" onClick={handleBack} className="ContactUs-back-button">Back To Options</button>
    </div>
  );
};

export default ContactUs;
