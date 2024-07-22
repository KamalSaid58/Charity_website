import React, { useState } from "react";
import { FaUser } from "react-icons/fa"; // Import the user icon from Font Awesome
import "./NavigationBar.css"; // Import CSS file for styling
import { CloseOutlined, BellOutlined, CarOutlined } from "@ant-design/icons";
import "./NavigationBar.css"; // Import CSS file for styling
import {
  Card,
  Popover,
  Dropdown,
  Menu,
  Flex,
  Button,
  Drawer,
  TimePicker,
  Collapse,
  Select,
  Badge,
  notification,
} from "antd";
import DatePicker from "react-multi-date-picker";
import Toolbar from "react-multi-date-picker/plugins/toolbar";
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
    "SaidOrphanage has sent a request to be accepted as an orphanage, please check out pending organizations",
    "Maha Farouk has sent a request to be accepted as a doctor, please check out pending donors",
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
  const badgeCount = notifications.length;
  return (
    <Badge count={badgeCount}>
      <Popover
        content={<div>{notificationCards}</div>}
        title="Notifications"
        trigger="click"
        overlayStyle={{ width: "400px", minWidth: "400px" }}
        placement="bottomLeft"
      >
        <Button
          icon={<BellOutlined />}
          className="notification-button"
          style={{ height: 40, width: 50, border: "none" }}
        />
      </Popover>
    </Badge>
  );
};

const AdminNavBar = () => {
  const menu = (
    <Menu style={{ textAlign: "center" }}>
      <Menu.Item onClick={() => (window.location.href = "/")}>Home</Menu.Item>

      <Menu.Item
        onClick={() => (window.location.href = "/Options")}
        danger={true}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <nav className="navigation-bar">
      <div className="container">
        <Flex align="center" gap="large">
          <NotificationsBell />
          <Dropdown
            overlay={menu}
            placement="bottomRight"
            trigger={["click"]}
            style={{ marginTop: 50 }}
          >
            <Button style={{ height: 40, border: "none" }}>
              <FaUser className="profile-icon" />{" "}
            </Button>
          </Dropdown>
        </Flex>
      </div>
    </nav>
  );
};

export default AdminNavBar;
