import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';

const StartPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Options');
  };

  return (
    <div className="start-page">
      <div className="content">
        <h1>Welcome to Our Donation Website</h1>
        <p>This is the start where we can change someone's life.</p>
        <p>Donate now and make a difference!</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default StartPage;
