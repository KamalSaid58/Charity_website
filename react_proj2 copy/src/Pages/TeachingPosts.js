import React, { useState, useRef } from "react";
import { Button, Space, Table, Modal, message, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useNavigate } from "react-router-dom";

const TeachingPosts = () => {
  const [searchText, setSearchText] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
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

  const info = (record) => {
    messageApi.info("You have chosen " + record.subject + " in " + record.area);
  };
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
        {title === "Subject" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Math") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Math") ? [] : ["Math"])
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Math
            </Button>
            <Button
              type={selectedKeys.includes("Physics") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Physics") ? [] : ["Physics"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Physics
            </Button>
            <Button
              type={selectedKeys.includes("Chemistry") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Chemistry") ? [] : ["Chemistry"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Chemistry
            </Button>
          </div>
        )}
        {title === "Area" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Tagamo3") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Tagamo3") ? [] : ["Tagamo3"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Tagamo3
            </Button>
            <Button
              type={selectedKeys.includes("Obour") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Obour") ? [] : ["Obour"])
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Obour
            </Button>
          </div>
        )}
        {title === "Governate" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Bani Suef") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Bani Suef") ? [] : ["Bani Suef"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Bani Suef
            </Button>

            <Button
              type={selectedKeys.includes("Cairo") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Cairo") ? [] : ["Cairo"])
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Cairo
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

  /*const handleQuantityChange = (record, quantity) => {
    setDonationQuantities({ ...donationQuantities, [record.key]: quantity });
  };*/

  const dataSource = [
    {
      key: "1",
      numberofstudents: "30",
      subject: "Math",
      area: "Tagamo3",
      governate: "Cairo",
      address: "90 street",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221158.1049348152!2d31.155591425000008!3d29.991055999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d360e7b79f9%3A0xe2334863278572c1!2sEgyptian%20Language%20School!5e0!3m2!1sen!2seg!4v1715000890317!5m2!1sen!2seg",
    },
    {
      key: "2",
      numberofstudents: "22",
      subject: "Physics",
      area: "Obour",
      governate: "Bani suef",
      address: "Ismalia Desert Rd",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5802.170093329363!2d31.441129290176615!3d30.151673933162055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145810a60524a231%3A0xe8d7ffe3daf3f959!2sNefertari%20International%20Schools!5e0!3m2!1sen!2seg!4v1715000703317!5m2!1sen!2seg",
    },
    {
      key: "3",
      numberofstudents: "25",
      subject: "Chemistery",
      area: "Tagamo3",
      governate: "Cairo",
      address: "Al Narges 5",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9772.298596890776!2d31.460797059798786!3d30.007314977134545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14582327af038d4d%3A0xb33a5f53ed30d038!2sCapital%20International%20Schools!5e0!3m2!1sen!2seg!4v1715001508311!5m2!1sen!2seg",
    },
  ];

  const columns = [
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      ...getColumnSearchProps("subject", "Subject"),
      // sorter: (a, b) => a.age - b.age,
      //sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
      ...getColumnSearchProps("area", "Area"),
    },
    {
      title: "Governate",
      dataIndex: "governate",
      key: "governate",
      ...getColumnSearchProps("governate", "Governate"),
    },
    {
      title: "View",
      key: "details",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleActionClick(record)}>
          View
        </Button>
      ),
    },
    {
      title: "Choose",
      key: "Choose",
      render: (_, record) => (
        <>
          {contextHolder}
          <Button type="primary" onClick={() => info(record)}>
            Choose
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className="container">
      <h2>Teaching Posts</h2>
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
            <p>Subject: {selectedRecord.subject}</p>
            <p>Number of Students: {selectedRecord.numberofstudents}</p>
            <p>Adress: {selectedRecord.address}</p>
            <Button
              type="link"
              onClick={() => setIsModalOpen(true)}
              style={{
                position: "absolute",
                left: "8px",
              }}
            >
              Location
            </Button>
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

export default TeachingPosts;
