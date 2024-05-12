import React, { useState, useRef } from "react";
import { Button, Space, Table, Modal, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useNavigate } from "react-router-dom";

const VolunteerPosts = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const navigate = useNavigate();
  const searchInput = useRef(null);

  const originalDataSource = [
    {
      key: "1",
      Name: "Abduallah Ayman",
      DonorType: "Teacher",
      PhoneNumber: "01120241643",
      Email: "abduallahayman@gmail.com",
      Address: "Fifth Settlment",
    },
    {
      key: "2",
      Name: "Aly Basyouni",
      DonorType: "Doctor",
      PhoneNumber: "01064007653",
      Email: "alybasyouni@gmail.com",
      Address: "Fifth Settlment",
    },
    {
      key: "3",
      Name: "Omar Mohamed",
      DonorType: "Teacher",
      PhoneNumber: "01111146949",
      Email: "omarmohamed@gmail.com",
      Address: "Fifth Settlment",
    },
    {
      key: "4",
      Name: "Kamal Said",
      DonorType: "Doctor",
      PhoneNumber: "01111146949",
      Email: "kamalsaid@gmail.com",
      Address: "Fifth Settlment",
    },
    {
      key: "5",
      Name: "Youssef Amro",
      DonorType: "Doctor",
      PhoneNumber: "01092911669",
      Email: "youssefamr@gmail.com",
      Address: "Maadi",
    },
  ];

  const [dataSource, setDataSource] = useState(originalDataSource);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
    setSearchedColumn("");
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
        {title === "Donor Type" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Teacher") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Teacher") ? [] : ["Teacher"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Teacher
            </Button>
            <Button
              type={selectedKeys.includes("Doctor") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Doctor") ? [] : ["Doctor"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Doctor
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

  const handleActionClick = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: "key",
      dataIndex: "key",
      key: "key",
    },

    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      ...getColumnSearchProps("Name"),
    },
    {
      title: "Donor Type",
      dataIndex: "DonorType",
      key: "DonorType",
      ...getColumnSearchProps("DonorType", "Donor Type"),
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
  ];

  return (
    <div className="container">
      <h2>Complete Volunteer Posts</h2>
      <Space style={{ marginBottom: 16 }}></Space>
      <Table
        columns={columns}
        dataSource={dataSource}
        onChange={handleChange}
      />

      <Modal
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
            <p>Name: {selectedRecord.Name}</p>
            <p>DonorType: {selectedRecord.DonorType}</p>
            <p>PhoneNumber: {selectedRecord.PhoneNumber}</p>
            <p>Email: {selectedRecord.Email}</p>
            <p>Address: {selectedRecord.Address}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default VolunteerPosts;
