import React, { useState, useRef } from "react";
import { Button, Space, Table, Modal, InputNumber, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useNavigate } from "react-router-dom";

const ListOfToys = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [donationQuantities, setDonationQuantities] = useState({});
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [showPicture, setShowPicture] = useState(false);
  const navigate = useNavigate();
  const searchInput = useRef(null);

  const originalDataSource = [
    {
      key: "1",
      age: "10",
      gender: "Male",
      category: "Board Games",
      quantity: "5",
      type: "Games of Displacement",
      //Description:'A classic Board Game',
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToToIm_6bI13QfJTU7JxPbZwGFU9mip9BWtSwxEaC4tg&s",
    },
    {
      key: "2",
      age: "6",
      gender: "Female",
      category: "Dolls",
      quantity: "3",
      type: "Barbie",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgJdgJ6-uSh3jhUHi9LIodLxYHsW4DxI8Xze-5fHhUA&s",
    },
    {
      key: "3",
      age: "8",
      gender: "Male",
      category: "Cars",
      quantity: "8",
      type: "Sports",
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JYRHeDDOaOhZKqIhWFHFqxbYf6V40TZsh1sOAUFRnQ&s",
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
        {title === "Category" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={
                selectedKeys.includes("Board Games") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Board Games") ? [] : ["Board Games"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Board Games
            </Button>

            <Button
              type={selectedKeys.includes("Dolls") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Dolls") ? [] : ["Dolls"])
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Dolls
            </Button>

            <Button
              type={selectedKeys.includes("Cars") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Cars") ? [] : ["Cars"])
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Cars
            </Button>
          </div>
        )}
        {title === "Gender" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Male") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Male") ? [] : ["Male"])
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Male
            </Button>

            <Button
              type={selectedKeys.includes("Female") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Female") ? [] : ["Female"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Female
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
  const handleViewPictureClick = () => {
    setShowPicture(true);
  };

  const handleHidePictureClick = () => {
    setShowPicture(false);
    setIsModalVisible(false);
  };

  const handleDonate = (record) => {
    const updatedDataSource = dataSource.map((item) => {
      if (item.key === record.key) {
        return {
          ...item,
          quantity: item.quantity - (donationQuantities[item.key] || 0),
        };
      }
      return item;
    });
    setDataSource(updatedDataSource);
    setDonationQuantities({});
  };

  const handleQuantityChange = (record, value) => {
    const newDonationQuantities = {
      ...donationQuantities,
      [record.key]: value,
    };
    setDonationQuantities(newDonationQuantities);
  };

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      ...getColumnSearchProps("category", "Category"),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      ...getColumnSearchProps("gender", "Gender"),
      //sorter: (a, b) => a.age - b.age,
      //sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
    },
    {
      title: "Quantity Needed",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Quantity Donated",
      key: "editableQuantity",
      render: (text, record) => (
        <InputNumber
          min={0}
          max={record.quantity}
          defaultValue={0}
          onChange={(value) => handleQuantityChange(record, value)}
        />
      ),
    },
    {
      title: "Donate",
      key: "donate",
      render: (_, record) => (
        <Button type="primary" onClick={() => handleDonate(record)}>
          Donate
        </Button>
      ),
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
      <h2>Toys Donations</h2>
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
          <Button key="close" onClick={handleHidePictureClick}>
            Close
          </Button>,
        ]}
      >
        {selectedRecord && (
          <div>
            <p>Age: {selectedRecord.age}</p>
            <p>Gender: {selectedRecord.gender}</p>
            <p>Category: {selectedRecord.category}</p>
            <p>Quantity: {selectedRecord.quantity}</p>
            <p>Type: {selectedRecord.type}</p>
            {showPicture && ( // Conditionally render the image
              <img
                src={selectedRecord.picture}
                alt={selectedRecord.category}
                style={{ width: 200 }}
              />
            )}
          </div>
        )}
        <Button onClick={handleViewPictureClick}>View Picture</Button>
      </Modal>
      ;
    </div>
  );
};

export default ListOfToys;
