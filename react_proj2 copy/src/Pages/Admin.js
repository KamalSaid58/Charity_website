import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import { Container, Row, Col, Card, CardText } from "react-bootstrap"; // Import Container, Row, Col, Card from react-bootstrap
import Donation from "../Donation.jpeg";
import "./Admin.css"; // Import the CSS file

import { DollarCircleOutlined } from "@ant-design/icons";
import OrganList from "../Pages/OrganList";
import DonorList from "../Pages/DonorList";

import {
  ShoppingCartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ShoppingOutlined,
  CoffeeOutlined,
  MedicineBoxOutlined,
  BookOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import AdminNavBar from "./AdminNavBar";
import { Button, Layout, Menu, theme } from "antd";

function Admin() {
  return <div>hello</div>;
}

export default Admin;
