import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Divider, Carousel, Flex, Button, Row, Col } from "antd";
import "./Donor.css";

const OrganizationsCarousel = () => {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel arrows autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

const NewDonationPosts = () => {
  return (
    <Flex vertical>
      <h1>New Donation Posts</h1>
      <h4>Organization 1 has posted x</h4>
      <h4>Organization 2 has posted y</h4>
    </Flex>
  );
};

const UpcomingDeliveries = () => {
  return (
    <Flex vertical>
      <h1>Deliveries</h1>
      <h4>Delivery coming in 5 minutes at location x! get Ready!</h4>
      <h4>You have a delivery day x y at location z! </h4>
    </Flex>
  );
};

const DashboardButtons = () => {
  return (
    <Flex>
      <Button>Donate Now!</Button>
      <div style={{ marginRight: 1150 }}></div>
      <Button>Update Delivery Location</Button>
    </Flex>
  );
};

function Donor() {
  const navigate = useNavigate();

  return (
    <Card style={{ width: 1500, height: 800 }}>
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
  );
}

export default Donor;
