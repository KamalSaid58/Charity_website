import React, { useState, useRef } from "react";
import { Button, Table, Modal, InputNumber, Input } from "antd"; // Import Input component
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useNavigate } from "react-router-dom";

const SchoolSupp = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
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
      category: "Books",
      item: "Notebooks",
      requestedQuantity: 100,
      quantityNeeded: 80,
    },
    {
      key: "2",
      category: "Stationary",
      item: "Pencils",
      requestedQuantity: 200,
      quantityNeeded: 150,
    },
    {
      key: "3",
      category: "Stationary",
      item: "Erasers",
      requestedQuantity: 50,
      quantityNeeded: 30,
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
          placeholder={`Search ${title}`}
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
              type={selectedKeys.includes("Books") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Books") ? [] : ["Books"])
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Books
            </Button>

            <Button
              type={selectedKeys.includes("Stationary") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Stationary") ? [] : ["Stationary"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Stationary
            </Button>
          </div>
        )}

        {title === "Item" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Notebooks") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Notebooks") ? [] : ["Notebooks"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Notebooks
            </Button>

            <Button
              type={selectedKeys.includes("Pencils") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Pencils") ? [] : ["Pencils"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Pencils
            </Button>
            <Button
              type={selectedKeys.includes("Erasers") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Erasers") ? [] : ["Erasers"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Erasers
            </Button>
          </div>
        )}
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{
            width: 90,
            marginRight: 8,
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
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={filtered ? { color: "#1890ff" } : {}} />
    ),
    onFilter: (value, record) => {
      return record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase());
    },
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
        const donatedQuantity = donationQuantities[record.key] || 0;
        return {
          ...item,
          quantityNeeded: item.quantityNeeded - donatedQuantity,
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
      title: "Item",
      dataIndex: "item",
      key: "item",
      ...getColumnSearchProps("item", "Item"),
    },
    {
      title: "Requested Quantity",
      dataIndex: "requestedQuantity",
      key: "requestedQuantity",
      ...getColumnSearchProps("requestedQuantity", "Requested Quantity"),
    },
    {
      title: "Quantity Needed",
      dataIndex: "quantityNeeded",
      key: "quantityNeeded",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Quantity Donated",
      key: "quantityDonated",
      render: (_, record) => (
        <InputNumber
          min={0}
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
      <h2>School Supplies Donations</h2>
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
            <p>Category: {selectedRecord.category}</p>
            <p>Item: {selectedRecord.item}</p>
            <p>Requested Quantity: {selectedRecord.requestedQuantity}</p>
            <p>Quantity Needed: {selectedRecord.quantityNeeded}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SchoolSupp;
