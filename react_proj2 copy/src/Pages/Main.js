import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; // For navigation
import StartPage from '../Components/StartPage';

const mockProducts = [
  // Replace with actual product data
  { id: 1, name: "Product 1", price: 19.99, image: "product1.jpg" },
  { id: 2, name: "Product 2", price: 24.99, image: "product2.jpg" },
  // ... more products
];

const mockOrders = [
  // Replace with actual order data
  { id: 1, orderNumber: "12345", customerName: "John Doe", total: 59.98 },
  { id: 2, orderNumber: "67890", customerName: "Jane Smith", total: 34.5 },
  // ... more orders
];

function Main() {
<<<<<<< HEAD
  return (
    <div>
      <StartPage /> {/* Render the StartPage component */}
    </div>
  );
=======
  return (<>Omar</>);
>>>>>>> fc905a1f7ae2c98555e117682f0c9fab995dd2b2
    // Write code describing ur website
};

export default Main;
