import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ShoppingOutlined,
  CoffeeOutlined,
  MedicineBoxOutlined,
  BookOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import NavigationBar from "./NavigationBar";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

// Interface for navigation link data (replace with your actual data structure)

function SideNavbarAdmin({ children }) {
  const navigate = useNavigate();
  const { Header, Sider, Content } = Layout;

  const SideNavBarDonor = ({ defaultCollapsed = true }) => {
    // Set the initial state of collapsed based on the defaultCollapsed prop
    const [collapsed, setCollapsed] = useState(defaultCollapsed);
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // Define the handleCategorySelect function
    const handleCategorySelect = (categoryName) => {
      console.log(`Selected category: ${categoryName}`);
      // Add your logic for handling the selected category here
    };

    return (
      <div style={{ height: "100vh" }}>
        <Layout style={{ height: "100%" }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              top: 0,
              zIndex: 1,
              marginTop: 0,
            }}
          >
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ borderRight: 0, fontSize: "20px" }}
            >
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link
                  to="/ViewListOfClothReq"
                  style={{ textDecoration: "none" }}
                >
                  Clothes
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<ShoppingOutlined />}>
                <Link to="/toys" style={{ textDecoration: "none" }}>
                  Toys
                </Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<CoffeeOutlined />}>
                <Link to="/food" style={{ textDecoration: "none" }}>
                  Food
                </Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<MedicineBoxOutlined />}>
                <Link to="/medical-supplies" style={{ textDecoration: "none" }}>
                  Medical Supplies
                </Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<BookOutlined />}>
                <Link to="/school-supplies" style={{ textDecoration: "none" }}>
                  School Supplies
                </Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<HeartOutlined />}>
                <Link to="/blood-donations" style={{ textDecoration: "none" }}>
                  Blood Donations
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            style={{
              marginLeft: collapsed ? 80 : 200,
              transition: "margin-left 0.2s",
            }}
          >
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "50px",
                    width: 64,
                    height: 64,
                    color: "black", // initial color
                  }}
                  className="custom-button" // Add a class for styling
                  // CSS for hover
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "lightblue")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
                />
              </div>
              <NavigationBar />
            </Header>
            <Content>{children}</Content>
          </Layout>
        </Layout>
      </div>
    );
  };
}

export default SideNavbarAdmin;
