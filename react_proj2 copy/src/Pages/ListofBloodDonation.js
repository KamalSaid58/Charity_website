import React, { useState, useRef } from "react";
import { Button, Space, Table, Modal, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useNavigate } from "react-router-dom";
import { CompassOutlined } from "@ant-design/icons";
import { Divider, Image } from "antd";

const ListofBloodDonation = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [donationQuantities, setDonationQuantities] = useState({});
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const navigate = useNavigate();
  const searchInput = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        {title === "Bloodtype" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("A positive") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("CharA positiveity")
                    ? []
                    : ["A positive"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              A positive
            </Button>

            <Button
              type={
                selectedKeys.includes("AB positive") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("AB positive") ? [] : ["AB positive"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              AB positive
            </Button>

            <Button
              type={selectedKeys.includes("O negative	") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("O negative	") ? [] : ["O negative	"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              O negative
            </Button>
            <Button
              type={selectedKeys.includes("A negative") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("A negative") ? [] : ["A negative"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              A negative
            </Button>
          </div>
        )}
        {title === "Type" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Charity") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Charity") ? [] : ["Charity"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Charity
            </Button>

            <Button
              type={selectedKeys.includes("Hospital") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Hospital") ? [] : ["Hospital"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Hospital
            </Button>

            <Button
              type={selectedKeys.includes("Orphanage") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Orphanage") ? [] : ["Orphanage"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Orphanage
            </Button>
          </div>
        )}

        {title === "Hospital" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Nasayeem") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Nasayeem") ? [] : ["Nasayeem"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Nasayeem
            </Button>

            <Button
              type={selectedKeys.includes("Cleopatra") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Cleopatra") ? [] : ["Cleopatra"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Cleopatra
            </Button>

            <Button
              type={selectedKeys.includes("Elgawy") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Elgawy") ? [] : ["Elgawy"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Elgawy
            </Button>
          </div>
        )}

        {title === "Area" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={
                selectedKeys.includes("Fifth settlment") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Fifth settlment")
                    ? []
                    : ["Fifth settlment"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Fifth settlment
            </Button>

            <Button
              type={selectedKeys.includes("Nasr city") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Nasr city") ? [] : ["Nasr city"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Nasr city
            </Button>
          </div>
        )}

        {title === "Governorate" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={
                selectedKeys.includes("Minister of health")
                  ? "primary"
                  : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Minister of health")
                    ? []
                    : ["Minister of health"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Minister of health
            </Button>

            <Button
              type={selectedKeys.includes("Governer") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Governer") ? [] : ["Governer"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Governer
            </Button>
          </div>
        )}

        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={filtered ? { color: "#1890ff" } : {}} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible && searchInput.current) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const handleBackButtonClick = () => {
    navigate("/Donor");
  };

  const handleActionClick = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };
  const handleIconAction = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const dataSource = [
    {
      key: "1",
      person: "Kareem",
      bloodtype: "A positive",
      hospital: "Nasayeem",
      area: "Fifth settlment",
      governorate: "Minister of health",
      address: "90 street",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.627608615749!2d31.431965576291237!3d30.01884747493663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d9511c47395%3A0x291a34366112c220!2z2YXYs9iq2LTZgdmJINmG2LPYp9im2YU!5e0!3m2!1sen!2seg!4v1714941342861!5m2!1sen!2seg",
    },
    {
      key: "2",
      person: "Kazeem",
      bloodtype: "AB positive",
      hospital: "Cleopatra",
      area: "Nasr city",
      governorate: "Governer",
      address: "Abaas elaad",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.038905897004!2d31.327240976293556!3d30.093072074899197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458158a930edb85%3A0x642c923f11f70af4!2zQ2xlb3BhdHJhIEhvc3BpdGFsINmF2LPYqti02YHZiSDZg9mE2YrZiNio2KfYqtix2KcgLSBDbGVvcGF0cmEgSG9zcGl0YWxzIEdyb3Vw!5e0!3m2!1sen!2seg!4v1714943200985!5m2!1sen!2seg",
    },
    {
      key: "3",
      person: "Abdelrahman",
      bloodtype: "O negative",
      hospital: "Nasayeem",
      area: "Fifth settlment",
      governorate: "Minister of health",
      address: "90 street",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.627608615749!2d31.431965576291237!3d30.01884747493663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d9511c47395%3A0x291a34366112c220!2z2YXYs9iq2LTZgdmJINmG2LPYp9im2YU!5e0!3m2!1sen!2seg!4v1714941342861!5m2!1sen!2seg",
    },
    {
      key: "4",
      person: "Ziad",
      bloodtype: "A negative",
      hospital: "Elgawy",
      area: "Fifth settlment",
      governorate: "Minister of health",
      address: "90 street",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.67389984829!2d31.43156967629111!3d30.01751867493716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cd75153e123%3A0xd6d98616e2c385f7!2sAir%20Force%20Specialized%20Hospital!5e0!3m2!1sen!2seg!4v1714943268574!5m2!1sen!2seg",
    },
  ];

  const columns = [
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Bloodtype",
      dataIndex: "bloodtype",
      key: "bloodtype",
      ...getColumnSearchProps("bloodtype", "Bloodtype"),
    },
    {
      title: "Hospital",
      dataIndex: "hospital",
      key: "hospital",
      ...getColumnSearchProps("hospital", "Hospital"),
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
      ...getColumnSearchProps("area", "Area"),
    },
    {
      title: "Governorate",
      dataIndex: "governorate",
      key: "governorate",
      ...getColumnSearchProps("governorate", "Governorate"),
    },
    {
      title: "View",
      key: "details",
      render: (_, record) => (
        <Button type="primary" onClick={() => handleActionClick(record)}>
          Details
        </Button>
      ),
    },
    {
      title: "Location",
      key: "Loc",
      render: (_, record) => (
        <CompassOutlined
          style={{ fontSize: "40px", cursor: "pointer" }}
          onClick={() => handleIconAction(record)}
        />
      ),
    },
  ];

  return (
    <div className="container">
      <h2>Blood Donation Requests</h2>
      <Space style={{ marginBottom: 16 }}></Space>
      <Table
        columns={columns}
        dataSource={dataSource}
        onChange={handleChange}
      />

      <Modal
        open={isModalVisible}
        title="Details"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedRecord && (
          <div>
            <p>Name: {selectedRecord.person}</p>
            <p>BloodType: {selectedRecord.bloodtype}</p>
            <p>Hospital Name: {selectedRecord.hospital}</p>
            <p>Area: {selectedRecord.area}</p>
            <p>Hospital Address: {selectedRecord.address}</p>
            <p>Hospital Governorate: {selectedRecord.governorate}</p>
          </div>
        )}
      </Modal>
      <Modal
        open={isModalOpen}
        title="Location"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedRecord && (
          <div>
            <iframe
              src={selectedRecord.src}
              width="475"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ListofBloodDonation;
