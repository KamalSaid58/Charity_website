import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./Options.css";
import { Container } from "react-bootstrap";

const Options = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Define functions to handle navigation when buttons are clicked
  const handleLogin = () => {
    navigate("/LoginTrial");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleContactUs = () => {
    navigate("/ContactUs");
  };

  const handleAboutUs = () => {
    navigate("/AboutUs");
  };

  return (
    <div className="options-container">
      <div className="options-content">
        <Container className="text-center">
          <h2 className="title">Explore Your Options</h2>
        </Container>
        <p className="intro">
          Donations play a crucial role in supporting various causes and
          initiatives around the world. Your contribution, no matter how small,
          can make a significant difference in improving the lives of others.
          Whether it's supporting education, healthcare, environmental
          conservation, or humanitarian aid, every donation counts. Thank you
          for considering the importance of giving back to your community and
          beyond.
        </p>
        <div className="options-list">
          {/* Attach onClick handlers to navigate to respective pages */}
          <button className="option-btn" onClick={handleLogin}>
            Login
          </button>
          <button className="option-btn" onClick={handleRegister}>
            Register
          </button>
          <button className="option-btn" onClick={handleContactUs}>
            Contact Us
          </button>
          <button className="option-btn" onClick={handleAboutUs}>
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
