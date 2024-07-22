import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ViewOrganizationAdmin from "../Pages/ViewOrganizationAdmin";
import OrganList from "../Pages/OrganList";
import DonorList from "../Pages/DonorList";
import ViewDonorsAdmin from "../Pages/ViewDonorsAdmin";
import Admin from "../Pages/Admin";
import AccountSettings from "../Pages/AccountSettings";
import {
  ProfileOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BankOutlined,
} from "@ant-design/icons";
import NavigationBar from "./AdminNavBar";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;

const SideNavBarAdmin = ({ defaultCollapsed = true }) => {
  // Set the initial state of collapsed based on the defaultCollapsed prop
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };
  const [currentPage, setCurrentPage] = useState("Admin");

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
              icon={<BankOutlined />}
            >
              Organizations
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => handleButtonClick("ViewDonorsAdmin")}
              icon={<UserOutlined />}
            >
              Donors
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => handleButtonClick("OrganList")}
              icon={<ProfileOutlined />}
            >
              Pending Organizations
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={() => handleButtonClick("DonorList")}
              icon={<UserOutlined />}
            >
              Pending Donors
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
                onClick={() => setCurrentPage("Admin")}
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
              {currentPage === "Admin" && <Admin />}

              {currentPage === "ViewOrganizationAdmin" && (
                <ViewOrganizationAdmin />
              )}
              {currentPage === "OrganList" && <OrganList />}
              {currentPage === "DonorList" && <DonorList />}
              {currentPage === "ViewDonorsAdmin" && <ViewDonorsAdmin />}
              {currentPage === "AccountSettings" && <AccountSettings />}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SideNavBarAdmin;
