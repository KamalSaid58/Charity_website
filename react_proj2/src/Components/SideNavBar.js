import React from "react";
import { Nav, NavItem,NavLink } from "react-bootstrap";
// import { NavLink } from "react-router-dom"; // For navigation
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

// Interface for navigation link data (replace with your actual data structure)


const navigationLinks= [
  // Replace with actual navigation data
  { path: "/dashboard", label: "Dashboard" },
  { path: "/products", label: "Products" },
  { path: "/orders", label: "Orders" },
  // ... add more links
];

function SideNavbar() {
  const navigate = useNavigate();
  return(
    <Nav className="sb-nav bg-darkBeige flex-column sb-nav-fixed h-100 " activeKey="/dashboard">
      <NavItem>
        <Nav.Link className="text-white" onClick={()=> navigate("/LoginTrial")}>Login</Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link className="text-white" onClick={()=> navigate("/Register")}>Register</Nav.Link>
      </NavItem>
      <NavItem>
        <Nav.Link className="text-white" onClick={()=> navigate("/")}>Log out</Nav.Link>
      </NavItem>
      {/* Add more navigation links here */}
    </Nav>
  );
}

export default SideNavbar;
