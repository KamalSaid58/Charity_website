import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Tag,
  Space,
  Divider,
  Typography,
  Carousel,
  Flex,
  Button,
  Row,
  Col,
  Image,
  Table,
  Timeline,
  ConfigProvider,
  Drawer,
  Calendar,
  TimePicker,
  Collapse,
  Select,
  notification,
} from "antd";
import DatePicker from "react-multi-date-picker";
import { HeartTwoTone } from "@ant-design/icons";
import styles from "./Donor.css";
import charityImage from "./donorCarousel/charityimage.jpg";
import maadiImage from "./donorCarousel/maadi.jpg";
import omeldonia from "./donorCarousel/omeldonia.jpg";
import Toolbar from "react-multi-date-picker/plugins/toolbar";

const { Text, Link } = Typography;

const OrganizationsCarousel = () => {
  const contentStyle = {
    margin: 0,
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const SlideCarousel = ({ CarouselImage, textContent }) => {
    return (
      <h3 style={contentStyle}>
        <div className="head-text">
          <Image
            src={CarouselImage}
            alt="Freedom Blog"
            style={{ width: 1800 }}
          />
          <div className="text-background">
            <div className="text-on-image">
              <Text style={{ color: "white", textAlign: "left" }}>
                {textContent}
              </Text>
            </div>
          </div>
        </div>
      </h3>
    );
  };
  return (
    <Carousel arrows style={{ height: 400 }}>
      <div>
        <h3 style={contentStyle}>
          <SlideCarousel
            CarouselImage={maadiImage}
            textContent="A7san 5eer Charity is excited to announce that they are hosting
          a special fundraiser event in the heart of Cairo's vibrant Maadi
          district on May 29th, 2024 to provide food for the poor. Click
          here for more info."
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <SlideCarousel
            CarouselImage={charityImage}
            textContent="A7san 5eer Charity is excited to announce that they are hosting
          a special fundraiser event in the heart of Cairo's vibrant Maadi
          district on May 29th, 2024 to provide food for the poor. Click
          here for more info."
          />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <SlideCarousel
            CarouselImage={omeldonia}
            textContent="A7san 5eer Charity is excited to announce that they are hosting
          a special fundraiser event in the heart of Cairo's vibrant Maadi
          district on May 29th, 2024 to provide food for the poor. Click
          here for more info."
          />
        </h3>
      </div>
    </Carousel>
  );
};

const NewDonationPosts = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 20,
        },
      }}
    >
      <Flex vertical align="flex-start" gap="small">
        <h1>Donation Posts</h1>
        <Timeline
          items={[
            {
              children: "Fein Aboya Orphanage created a post asking for food",
            },
            {
              children: "I am looking for medication",
            },
            {
              children: "teeeeeeeeeeeeeeeeeeeeeeeeexttt",
            },
            {
              children: "ttttttttttttttttttttttttttttttttttttttttttttttttttttt",
            },
          ]}
        />
      </Flex>
    </ConfigProvider>
  );
};

const UpcomingDeliveries = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Contact {record.name}</a>
          <a>Cancel</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      time: "30 minutes",
      name: "Mo3tasm",
      address: "Ta7t beitak",
    },
    {
      key: "2",
      time: "20/20/2024",
      name: "Ana",
      address: "Ta7t beitak",
    },
    {
      key: "3",
      time: "20/20/2024",
      name: "aaaaaaaaaaa",
      address: "Ta7t beitak",
    },
  ];
  return (
    <div>
      <h1 align="left">Upcoming Deliveries</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

const ChooseDate = ({ onChange }) => {
  const today = new Date();
  const [values, setValues] = useState([]);
  const handleDateChange = (dates) => {
    onChange(dates);
  };
  return (
    <DatePicker
      minDate={today}
      multiple
      value={values}
      onChange={handleDateChange}
      plugins={[<Toolbar position="bottom" />]}
    />
  );
};

const SelectPickup = ({ onChange }) => {
  const handleChange = (value) => {
    onChange(value);
  };
  return (
    <Select
      type="text"
      className="defaultValue"
      style={{ width: 135 }}
      onChange={handleChange}
    >
      <Select.Option key="" value=""></Select.Option>
      <Select.Option key="motorcycle" value="motorcycle">
        Motorcycle
      </Select.Option>

      <Select.Option key="car" value="car">
        Car
      </Select.Option>

      <Select.Option key="truck" value="truck">
        Truck
      </Select.Option>
    </Select>
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

const DashboardButtons = () => {
  const [deliveryDrawer, setDeliveryDrawer] = useState(false);

  const [api, contextHolder] = notification.useNotification();
  const [pickupType, setPickupType] = useState("");
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedDates, setSelectedDates] = useState([]);

  const updatedDelivery = () => {
    let isEmpty = false;
    console.log(pickupType);
    console.log(selectedTime);
    console.log(selectedDates);
    let selectedTimeLength = 1;
    let selectedDateLength = 1;
    if (selectedTime === null || selectedTime.length === 0) {
      selectedTimeLength = 0;
    }
    if (selectedDates === null || selectedDates.length === 0) {
      selectedDateLength = 0;
    }
    if (
      (pickupType !== "" &&
        (selectedTimeLength === 0 || selectedDateLength === 0)) ||
      (selectedTimeLength !== 0 &&
        (pickupType === "" || selectedDateLength === 0)) ||
      (selectedDateLength !== 0 &&
        (pickupType === "" || selectedTimeLength === 0))
    ) {
      isEmpty = true;
    }
    if (!isEmpty) {
      api["success"]({
        message: "Successfully updated delivery date!",
        description:
          "All pending donation requests will now be planned around these dates.",
        placement: "top",
      });
      onClose();
    } else {
      api["error"]({
        message: "Some boxes are empty",
        description: "Either Fill out all the boxes or have them all empty",
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

  const handlePickupChange = (value) => {
    setPickupType(value);
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
      label: "What day(s) are you free at?",
      children: (
        <ChooseDate value={selectedDates} onChange={handleDateChange} />
      ),
    },
    {
      key: "2",
      label: "What time are you avaliable for these days?",
      children: <ChooseTime value={selectedTime} onChange={handleTimeChange} />,
    },
    {
      key: "3",
      label: "What type of pickup would you prefer?",
      children: (
        <SelectPickup value={pickupType} onChange={handlePickupChange} />
      ),
    },
  ];

  return (
    <>
      {contextHolder}
      <Flex justify="space-between" align="center">
        <Button>Donate Now!</Button>
        <Button onClick={showDeliveryDrawer}>Update Delivery Location</Button>
        <Drawer
          title="Delivery Details "
          onClose={onClose}
          open={deliveryDrawer}
          style={{ backgroundColor: "white" }}
        >
          <Flex vertical gap="small" justify="flex-end">
            <Collapse items={items} bordered={false} defaultActiveKey={["1"]} />
            <Button type="primary" onClick={() => updatedDelivery()}>
              Confirm Dates
            </Button>
          </Flex>
        </Drawer>
      </Flex>
    </>
  );
};

function Donor() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: "100%",
        overflowX: "auto",
        // backgroundColor: "lightblue",
      }}
    >
      <Card
        style={{
          width: "96.5%",
          height: "auto",
          minHeight: 800,
          marginTop: 30,
          marginLeft: 30,
          // backgroundColor: "lightblue",
        }}
      >
        {OrganizationsCarousel()}
        <Divider style={{ borderWidth: 1, borderColor: "black" }} />
        <Row>
          <Col span={11}>{NewDonationPosts()}</Col>
          <Col span={2}>
            <Divider
              type="vertical"
              style={{ borderWidth: 1, borderColor: "black", height: "100%" }}
            />
          </Col>
          <Col span={11}>{UpcomingDeliveries()}</Col>
        </Row>
        <Divider style={{ borderWidth: 1, borderColor: "black" }} />
        {DashboardButtons()}
      </Card>
    </div>
  );
}

export default Donor;
