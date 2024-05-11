import React, { useState } from "react";
import { FaUser } from "react-icons/fa"; // Import the user icon from Font Awesome
import "./NavigationBar.css"; // Import CSS file for styling

const NavigationBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle the visibility of the dropdown menu
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navigation-bar">
      <div className="container">
        <div className="dropdown" onClick={toggleDropdown}>
          <button className="dropbtn">
            <FaUser className="profile-icon" />{" "}
            {/* User icon from Font Awesome */}
          </button>
          {/* Dropdown content */}
          {dropdownVisible && (
            <div className="dropdown-content">
              <button
                className="dropdown-button"
                onClick={() => (window.location.href = "/")}
              >
                Home
              </button>
              <button
                className="dropdown-button"
                onClick={() => (window.location.href = "/AboutUs")}
              >
                Notifications
              </button>
              <button
                className="dropdown-button"
                onClick={() => (window.location.href = "/ContactUs")}
              >
                Contact Us
              </button>
              <button
                className="dropdown-button logout-button"
                onClick={() => (window.location.href = "/Options")}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
