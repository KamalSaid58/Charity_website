import React from "react";
import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

function WebDonor() {
  const navigate = useNavigate();
  return (
    <Home>
      <br />
      <Button
        variant="primary"
        size="sm"
        active
        onClick={() => navigate("/loginDonor")}
      >
        LoginDonor
      </Button>
      <br />
      <Button
        variant="primary"
        size="sm"
        active
        onClick={() => navigate("/registerDonor")}
      >
        RegisterDonor
      </Button>
    </Home>
  );
}
export default WebDonor;
