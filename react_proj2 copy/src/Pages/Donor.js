import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Divider, Carousel, Flex, Button, Row, Col } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

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
    <Flex vertical justify="flex-start" align="flex-start">
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
      <Button>Donate Now!</Button>
      <div style={{ marginRight: 1150 }}></div>
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
