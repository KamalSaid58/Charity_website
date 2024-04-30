import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; // For navigation


const mockProducts = [
  // Replace with actual product data
  { id: 1, name: "Product 1", price: 19.99, image: "product1.jpg" },
  { id: 2, name: "Product 2", price: 24.99, image: "product2.jpg" },
  // ... more products
];

const mockOrder = [
  // Replace with actual order data
  { id: 1, orderNumber: "12345", customerName: "John Doe", total: 59.98 },
  { id: 2, orderNumber: "67890", customerName: "Jane Smith", total: 34.5 },
  // ... more orders
];

const Index() => {
  return (
    <Container fluid className="py-4">
      <Row>
        {/* Content column */}
        <Col xs={12} md={9} lg={10}>
          <h1 className="h1 mb-4">Top Products</h1>
          <Row>
            {mockProducts.map((product) => (
              <Col xs={6} md={4} lg={3} key={product.id}>
                {/* <ProductCard product={product} />{" "} */}
                {/* Use ProductCard component */}
              </Col>
            ))}
          </Row>
          <h1 className="h1 mb-4">Recent Orders</h1>
          <ul className="list-group">
            {mockOrders.map((order) => (
              <li key={order.id} className="list-group-item">
                {/* <OrderListItem order={order} />{" "} */}
                {/* Use OrderListItem component */}
              </li>
            ))}
          </ul>
        </Col>

        {/* Sidebar column - replace with Sidebar component */}
        <Col xs={12} md={3} lg={2}>
          {/* ... (sidebar content) ... */}
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
