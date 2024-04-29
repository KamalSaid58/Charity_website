import React from "react";
import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <header
          style={{
            backgroundColor: "#d3b395",
            padding: "20px",
            color: "white",
          }}
        >
          <h1>Welcome</h1>
        </header>
        <main
          style={{ flexGrow: 1, padding: "20px", backgroundColor: "white" }}
        >
          <br />
          <Button
            variant="primary"
            size="sm"
            active
            onClick={() => navigate("/loginAdmin")}
          >
            Admin
          </Button>
          <br />
          <Button
            variant="primary"
            size="sm"
            active
            onClick={() => navigate("/WebDonor")}
          >
            Donor
          </Button>
          <br />
          <Button
            variant="primary"
            size="sm"
            active
            onClick={() => navigate("/WebOrganization")}
          >
            Organization
          </Button>
        </main>
        <footer
          style={{
            backgroundColor: "#231f20",
            padding: "20px",
            color: "white",
          }}
        >
          <p>Good Luck</p>
        </footer>
      </div>
    </>
  );
}
export default Index;
