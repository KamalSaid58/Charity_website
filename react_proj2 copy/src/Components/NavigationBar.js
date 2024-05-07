import React from "react";
import "./NavigationBar.css"; // Import CSS file for styling

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="container">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/AboutUs">About</a>
          </li>
          <li>
            <a href="/donate">Donate</a>
          </li>
          <li>
            <a href="/ContactUs">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
