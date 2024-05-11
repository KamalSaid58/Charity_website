import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./SideNavBarDonor.css"; // Import the CSS file
import ViewOrganizationDonor from "../Pages/ViewOrganizationDonor";
import SchoolSupp from "../Pages/SchoolSupp";
import Donor from "../Pages/Donor";
import ViewListOfClothReq from "../Pages/ViewListOfClothReq";
import {
  DollarCircleOutlined,
  EditOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ViewReqDon from "../Pages/ViewReqDonor";
import ListOfFood from "../Pages/ListOfFood";
import ListofBloodDonation from "../Pages/ListofBloodDonation";
import ListOfToys from "../Pages/ListOfToys";
import ListOfMedicalSupplies from "../Pages/ListOfMedicalSupplies";
import TeachingPosts from "../Pages/TeachingPosts";
import AccountSettings from "../Pages/AccountSettings";

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
  TeamOutlined,
} from "@ant-design/icons";
import NavigationBar from "./NavigationBar";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;

const SideNavBarTeacher = ({ defaultCollapsed = true }) => {
  // Set the initial state of collapsed based on the defaultCollapsed prop
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };
  const [currentPage, setCurrentPage] = useState("Donor");

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
              onClick={() => handleButtonClick("ViewReqDon")}
              icon={<DollarCircleOutlined />}
            >
              Donations Lists {/* Changed the icon here */}
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => handleButtonClick("ViewListOfClothReq")}
              icon={<ShoppingCartOutlined />}
            >
              Clothes {/* Changed the icon here */}
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => handleButtonClick("ListOfToys")}
              icon={<ShoppingOutlined />}
            >
              Toys
            </Menu.Item>
            <Menu.Item
              key="4"
              onClick={() => handleButtonClick("ListOfFood")}
              icon={<CoffeeOutlined />}
            >
              Food
            </Menu.Item>
            <Menu.Item
              key="5"
              onClick={() => handleButtonClick("ViewOrganizationDonor")}
              icon={<UserOutlined />}
            >
              Organizations
            </Menu.Item>
            <Menu.Item
              key="6"
              onClick={() => handleButtonClick("SchoolSupp")}
              icon={<BookOutlined />}
            >
              School Supplies
            </Menu.Item>
            <Menu.Item
              key="7"
              onClick={() => handleButtonClick("ListofBloodDonation")}
              icon={<HeartOutlined />}
            >
              Blood Donations
            </Menu.Item>
            <Menu.Item
              key="8"
              onClick={() => handleButtonClick("ListOfMedicalSupplies")}
              icon={<MedicineBoxOutlined />}
            >
              Medical Supplies
            </Menu.Item>
            <Menu.Item
              key="9"
              onClick={() => handleButtonClick("TeachingPosts")}
              icon={<TeamOutlined />}
            >
              Teaching Posts
            </Menu.Item>
            <Menu.Item
              key="10"
              // onClick={() => handleButtonClick("AccountSettings")}
              icon={<EditOutlined />}
            >
              Specify Details
            </Menu.Item>
            <Menu.Item
              key="11"
              onClick={() => handleButtonClick("AccountSettings")}
              icon={<SettingOutlined />}
            >
              Settings
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
                onClick={() => setCurrentPage("Donor")}
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
              {currentPage === "Donor" && <Donor />}
              {currentPage === "ViewReqDon" && <ViewReqDon />}
              {currentPage === "ViewOrganizationDonor" && (
                <ViewOrganizationDonor />
              )}
              {currentPage === "ViewListOfClothReq" && <ViewListOfClothReq />}
              {currentPage === "ListOfFood" && <ListOfFood />}
              {currentPage === "ListOfToys" && <ListOfToys />}
              {currentPage === "SchoolSupp" && <SchoolSupp />}
              {currentPage === "ListofBloodDonation" && <ListofBloodDonation />}
              {currentPage === "AccountSettings" && <AccountSettings />}
              {currentPage === "ListOfMedicalSupplies" && (
                <ListOfMedicalSupplies />
              )}
              {currentPage === "TeachingPosts" && <TeachingPosts />}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SideNavBarTeacher;
