import React from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom"; // For navigation

// Interface for navigation link data (replace with your actual data structure)


const navigationLinks= [
  // Replace with actual navigation data
  { path: "/dashboard", label: "Dashboard" },
  { path: "/products", label: "Products" },
  { path: "/orders", label: "Orders" },
  // ... add more links
];

function Sidebar() {
  return (
    <Nav
      className="sb-nav bg-dark flex-column sb-nav-fixed"
      activeKey="/dashboard"
    >
      {navigationLinks.map((link) => (
        <NavItem key={link.path}>
          <NavLink href={link.path}>{link.label}</NavLink>
        </NavItem>
      ))}
    </Nav>
  );
}

export default Sidebar;
