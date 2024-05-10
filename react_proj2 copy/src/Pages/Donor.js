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
} from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import styles from "./Donor.css";
import charityImage from "./donorCarousel/charityimage.jpg";
import maadiImage from "./donorCarousel/maadi.jpg";
import omeldonia from "./donorCarousel/omeldonia.jpg";

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

const DashboardButtons = () => {
  return (
    <Flex justify="space-between" align="center">
      <Button>Donate Now!</Button>
      <Button>Update Delivery Location</Button>
    </Flex>
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
