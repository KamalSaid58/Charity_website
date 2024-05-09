import React, { useState, useRef } from "react";
import { Button, Space, Table, Modal, InputNumber, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useAsyncError, useNavigate } from "react-router-dom";

const ListOfFood = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [donationQuantities, setDonationQuantities] = useState({});
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const navigate = useNavigate();
  const searchInput = useRef(null);

  const originalDataSource = [
    {
      key: "1",
      items: "Fruits",
      name: "Orange",
      quantity: "5",
      unit: "KG",
    },
    {
      key: "2",
      items: "Vegtebales",
      name: "Carrot",
      quantity: "3",
      unit: "KG",
    },
    {
      key: "3",
      items: "Canned Foods",
      name: "Beans",
      quantity: 8,
      unit: "",
    },
    {
      key: "4",
      items: "Fresh Meals",
      name: "Salad",
      quantity: 10,
      unit: "",
    },
    {
      key: "5",
      items: "Baked Goods",
      name: "Bread",
      quantity: 10,
      unit: "",
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

        {title === "Items" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Fruits") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Fruits") ? [] : ["Fruits"]
                )
              }
              style={{ marginBottom: 8 }}
            >
              Fruits
            </Button>

            <Button
              type={selectedKeys.includes("Vegtebales") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Vegtebales") ? [] : ["Vegtebales"]
                )
              }
              style={{ marginBottom: 8 }}
            >
              Vegtebales
            </Button>

            <Button
              type={
                selectedKeys.includes("Canned Foods") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Canned Foods") ? [] : ["Canned Foods"]
                )
              }
              style={{ marginBottom: 8 }}
            >
              Canned Foods
            </Button>
            <Button
              type={
                selectedKeys.includes("Canned Foods") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Canned Foods") ? [] : ["Canned Foods"]
                )
              }
              style={{ marginBottom: 8 }}
            >
              Canned Foods
            </Button>
            <Button
              type={
                selectedKeys.includes("Fresh Meals") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Fresh Meals") ? [] : ["Fresh Meals"]
                )
              }
              style={{ marginBottom: 8 }}
            >
              Fresh Meals
            </Button>
            <Button
              type={
                selectedKeys.includes("Baked Goods") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Baked Goods") ? [] : ["Baked Goods"]
                )
              }
              style={{ marginBottom: 8 }}
            >
              Baked Goods
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

  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };

  const handleBackButtonClick = () => {
    navigate("/Donor");
  };

  const handleActionClick = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
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
      title: "Items",
      dataIndex: "items",
      key: "items",
      ...getColumnSearchProps("items", "Items"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name", "Name"),
      //sorter: (a, b) => a.age - b.age,
      //sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
    },

    {
      title: "Fixed Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Editable Quantity",
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
      render: (text, record) => (
        <Button type="primary" onClick={() => handleDonate(record)}>
          Donate
        </Button>
      ),
    },
    {
      title: "View",
      key: "details",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleActionClick(record)}>
          Details
        </Button>
      ),
    },
  ];

  return (
    <div className="container">
      <h2>List of Food Donation Requests</h2>
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
            <p>Items: {selectedRecord.items}</p>
            <p>Name: {selectedRecord.name}</p>
            <p>
              Quantity: {selectedRecord.quantity + " " + selectedRecord.unit}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ListOfFood;
