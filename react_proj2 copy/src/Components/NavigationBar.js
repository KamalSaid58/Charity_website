import React, { useState } from "react";
import { FaUser } from "react-icons/fa"; // Import the user icon from Font Awesome
import "./NavigationBar.css"; // Import CSS file for styling
import { Button, Flex, Popover, Card } from "antd";
import { CloseOutlined, BellOutlined, CarOutlined } from "@ant-design/icons";

const NotificationCard = ({ text, onClose }) => {
  return (
    <Card style={{ marginBottom: 10 }}>
      <Flex gap="middle" align="center">
        <CarOutlined /> {text}
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={onClose}
          style={{ marginLeft: "auto" }}
        />
      </Flex>
    </Card>
  );
};

const NotificationsBell = () => {
  const [notifications, setNotifications] = useState([
    "Mostafa has arrived to pickup your donation of medication!",
    "Ahmed is coming by in 30 minutes to pickup your donation of clothes!",
  ]);

  const removeNotification = (index) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((_, i) => i !== index)
    );
  };

  const notificationCards = notifications.map((text, index) => (
    <NotificationCard
      key={index}
      text={text}
      onClose={() => removeNotification(index)}
    />
  ));

  return (
    <Popover
      content={<div>{notificationCards}</div>}
      title="Notifications"
      trigger="click"
      overlayStyle={{ width: "400px", minWidth: "400px" }}
      placement="bottomLeft"
    >
      <Button icon={<BellOutlined />} className="notification-button" />
    </Popover>
  );
};

const NavigationBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle the visibility of the dropdown menu
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navigation-bar">
      <div className="container">
        <Flex align="center" gap="large">
          <NotificationsBell />
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
                  className="dropdown-button"
                  onClick={() => (window.location.href = "/AccountSettings")}
                >
                  Settings
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
        </Flex>
      </div>
    </nav>
  );
};

export default NavigationBar;
