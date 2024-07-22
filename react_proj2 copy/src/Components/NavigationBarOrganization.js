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
  Checkbox,
  Row,
  Col,
  Badge,
  notification,
} from "antd";
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
    "Mohamed has fufilled your donation post of clothes!",
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

const ChooseDate = ({ onChange }) => {
  const handleCheckboxChange = (checkedValues) => {
    onChange(checkedValues);
  };
  const daysOfWeek = [
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
  ];

  return (
    <Checkbox.Group onChange={handleCheckboxChange}>
      <Row>
        {daysOfWeek.map((day) => (
          <Col key={day.value} span={24}>
            <Checkbox value={day.value}>{day.label}</Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
};

const ChooseTime = ({ onChange }) => {
  const handleTimeChange = (timeString) => {
    onChange(timeString);
  };

  return (
    <TimePicker.RangePicker
      use12Hours
      format="h a"
      onChange={handleTimeChange}
    />
  );
};

const DeliveryButton = () => {
  const [deliveryDrawer, setDeliveryDrawer] = useState(false);

  const [api, contextHolder] = notification.useNotification();
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);

  const updatedDelivery = () => {
    let isEmpty = false;

    let selectedTimeLength = 1;
    let selectedDateLength = 1;
    if (selectedTime === null || selectedTime.length === 0) {
      selectedTimeLength = 0;
    }
    if (selectedDates === null || selectedDates.length === 0) {
      selectedDateLength = 0;
    }
    if (
      (selectedTimeLength !== 0 && selectedDateLength === 0) ||
      (selectedDateLength !== 0 && selectedTimeLength === 0)
    ) {
      isEmpty = true;
    }
    if (!isEmpty) {
      api["success"]({
        message: "Successfully updated delivery date!",
        description:
          "All upcoming received donations will be delivered during these times.",
        placement: "top",
      });
      onClose();
    } else {
      api["error"]({
        message: "Some boxes are empty",
        description: "Either fill out all the boxes or have them all empty",
        placement: "top",
      });
    }
  };

  const showDeliveryDrawer = () => {
    setDeliveryDrawer(true);
  };

  const onClose = () => {
    setDeliveryDrawer(false);
  };

  const handleTimeChange = (value) => {
    setSelectedTime(value);
  };
  const handleDateChange = (newDates) => {
    setSelectedDates(newDates);
  };
  const items = [
    {
      key: "1",
      label: "What days is your organization open at?",
      children: (
        <ChooseDate value={selectedDates} onChange={handleDateChange} />
      ),
    },
    {
      key: "2",
      label: "What time are you open for these days?",
      children: <ChooseTime value={selectedTime} onChange={handleTimeChange} />,
    },
  ];

  return (
    <>
      {contextHolder}
      <Button
        onClick={showDeliveryDrawer}
        style={{ backgroundColor: "transparent", borderColor: "transparent" }}
      >
        Update Delivery Details
      </Button>
      <Drawer
        title="Delivery Details "
        onClose={onClose}
        open={deliveryDrawer}
        style={{ backgroundColor: "white" }}
      >
        <Flex vertical gap="small" justify="flex-end">
          <Collapse items={items} bordered={false} defaultActiveKey={["1"]} />
          <Button onClick={() => updatedDelivery()}>Confirm Dates</Button>
        </Flex>
      </Drawer>
    </>
  );
};

const NavigationBarOrganization = () => {
  const menu = (
    <Menu style={{ textAlign: "center" }}>
      <Menu.Item onClick={() => (window.location.href = "/")}>Home</Menu.Item>
      <Menu.Item style={{ padding: 0 }}>
        <DeliveryButton />
      </Menu.Item>

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

export default NavigationBarOrganization;
