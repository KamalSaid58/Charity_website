import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Divider,
  Typography,
  Carousel,
  Flex,
  Button,
  Row,
  Col,
  Image,
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
    // lineHeight: "160px",
    // textAlign: "center",
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
    <Flex
      vertical
      justify="flex-start"
      align="flex-start"
      style={{ height: 180 }}
    >
      {/* spin={true} */}
      <Flex gap="5px" align="start">
        <HeartTwoTone twoToneColor="#eb2f96" style={{ marginTop: 5 }} />
        <h4>Donation Posts</h4>
      </Flex>
      <h4>Organization 1 has posted x</h4>
      <h4>Organization 2 has posted y</h4>
    </Flex>
  );
};

const UpcomingDeliveries = () => {
  return (
    <Flex vertical>
      <Flex gap="5px" align="start">
        <HeartTwoTone twoToneColor="#eb2f96" style={{ marginTop: 5 }} />
        <h4>Deliveries</h4>
      </Flex>
      <Flex gap="5px" align="start">
        bullet point: Mostafa is on his way to pick up your donation of clothes
        in 30 minutes at location x.
      </Flex>

      <Flex gap="5px" align="start">
        bullet point: Mostafa is coming up to pick up your donation of
        medication at 20/20/2025 at location y.
      </Flex>
    </Flex>
  );
};

const DashboardButtons = () => {
  return (
    <Flex>
      <Flex justify="flex-start">
        <Button>Donate Now!</Button>
      </Flex>
      <Flex justify="flex-end">
        <Button>Update Delivery Location</Button>
      </Flex>
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
        backgroundColor: "lightblue",
      }}
    >
      <Card
        style={{
          width: "96.5%",
          height: "auto",
          minHeight: 800,
          marginTop: 30,
          marginLeft: 30,
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
