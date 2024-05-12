import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import organizationImage from "../organization.png";
import donorImage from "../donor.png";

function Register() {
  const navigate = useNavigate();

  const handleOrganizationClick = () => {
    navigate("/RegisterOrgan");
  };

  const handleDonorClick = () => {
    navigate("/RegisterDonor");
  };

  return (
    <Container>
      <Row className="justify-content-center mt-0" style={{ marginTop: 500 }}>
        <Col md={4} className="mb-4">
          <Card
            style={{
              width: "20rem",
              border: "2px solid #000",
              borderRadius: "10px",
              marginTop: 100,
            }}
          >
            <Card.Img
              variant="top"
              src={organizationImage}
              className="d-flex justify-content-center"
              height={"240rem"}
            />
            <Card.Body>
              <Card.Title>Register as Organization</Card.Title>
              <Card.Text>
                Register as an organization to post donation requests.
              </Card.Text>
              <div className="text-center">
                <Button type="primary" onClick={handleOrganizationClick}>
                  Register
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 d-flex justify-content-center">
          <Card
            style={{
              width: "20rem",
              border: "2px solid #000",
              borderRadius: "10px",
              marginTop: 100,
            }}
          >
            <Card.Img
              variant="top"
              src={donorImage}
              className="d-flex justify-content-center"
              height={"240rem"}
            />
            <Card.Body>
              <Card.Title>Register as Donor</Card.Title>
              <Card.Text>
                Register as a donor to donate items to organizations.
              </Card.Text>
              <div className="text-center">
                <Button type="primary" onClick={handleDonorClick}>
                  Register
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Button
          type="primary"
          onClick={() => navigate("/Options")}
          style={{ marginRight: 50, marginTop: 50 }}
        >
          Back
        </Button>
      </div>
    </Container>
  );
}

export default Register;
