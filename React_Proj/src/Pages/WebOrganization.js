import React from "react";
import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

function WebOrganization() {
  const navigate = useNavigate();
  return (
    <Home>
      <br />
      <Button
        variant="primary"
        size="sm"
        active
        onClick={() => navigate("/loginOrganization")}
      >
        LoginOrganization
      </Button>
      <br />
      <Button
        variant="primary"
        size="sm"
        active
        onClick={() => navigate("/registerOrganization")}
      >
        RegisterOrganization
      </Button>
    </Home>
  );
}
export default WebOrganization;
