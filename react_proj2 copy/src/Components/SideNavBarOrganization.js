import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ViewOrganizationAdmin from "../Pages/ViewOrganizationAdmin";
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
  DollarCircleOutlined,
} from "@ant-design/icons";
import NavigationBar from "./NavigationBar";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const SideNavBarOrganization = ({ defaultCollapsed = true }) => {
  // Set the initial state of collapsed based on the defaultCollapsed prop
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };
  const [currentPage, setCurrentPage] = useState("Donor");

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
            style={{ borderRight: 0, fontSize: "15px" }}
          >
            <Menu.Item
              key="1"
              onClick={() => handleButtonClick("ViewOrganizationAdmin")}
              icon={<DollarCircleOutlined />}
            >
              Registered Organizations
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => handleButtonClick("OrganList")}
              icon={<ShoppingCartOutlined />}
            >
              Organization Submissions
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => handleButtonClick("DonorList")}
              icon={<ShoppingOutlined />}
            >
              Donor Submissions
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
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
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
              <Link
                to="/donor" // Link to 'Donor' page
                className="title"
                style={{ cursor: "pointer", textDecoration: "none" }} // Change cursor to pointer on hover
              >
                GOAT
              </Link>
            </div>
            <NavigationBar />
          </Header>

          <Content>
            <div>
              {currentPage === "ViewOrganizationAdmin" && (
                <ViewOrganizationAdmin />
              )}
              {currentPage === "OrganList" && <OrganList />}
              {currentPage === "DonorList" && <DonorList />}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SideNavBarOrganization;