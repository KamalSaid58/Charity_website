import React, { useState, useRef } from "react";
import { Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ViewReqDonor = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const navigate = useNavigate(); // Define navigate using useNavigate
  const searchInput = useRef(null);

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
              type={selectedKeys.includes("Clothes") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Clothes") ? [] : ["Clothes"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Clothes
            </Button>

            <Button
              type={selectedKeys.includes("Toys") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Toys") ? [] : ["Toys"])
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Toys
            </Button>

            <Button
              type={selectedKeys.includes("Food") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Food") ? [] : ["Food"])
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Food
            </Button>
            <Button
              type={
                selectedKeys.includes("Medical Supplies")
                  ? "primary"
                  : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Medical Supplies")
                    ? []
                    : ["Medical Supplies"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Medical Supplies
            </Button>
            <Button
              type={
                selectedKeys.includes("Blood Supplies") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Blood Supplies")
                    ? []
                    : ["Blood Supplies"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Blood Supplies
            </Button>
            <Button
              type={
                selectedKeys.includes("School Supplies") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("School Supplies")
                    ? []
                    : ["School Supplies"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              School Supplies
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
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
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

  const dataSource = [
    {
      key: "1",
      category: "Clothes",
      ItemN: "T-Shirt",
      item: 32,
    },
    {
      key: "2",
      category: "Toys",
      ItemN: "Car",
      item: 42,
    },
    {
      key: "3",
      category: "Food",
      ItemN: "Meat",
      item: 10,
    },
    {
      key: "4",
      category: "School Supplies",
      ItemN: "Pencils",
      item: 100,
    },
    {
      key: "5",
      category: "School Supplies",
      ItemN: "Books",
      item: 43,
    },
    {
      key: "6",
      category: "Blood Supplies",
      ItemN: "Different Blood Types",
      item: 7,
    },
    {
      key: "7",
      category: "Clothes",
      ItemN: "Pantalons",
      item: 100,
    },
    {
      key: "8",
      category: "Medical Supplies",
      ItemN: "Panadol",
      item: 20,
    },
  ];

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      ...getColumnSearchProps("category", "Category"),
    },

    {
      title: "Item Name",
      dataIndex: "ItemN",
      key: "ItemN",
      ...getColumnSearchProps("ItemN", "Item Name"),
    },
    {
      title: "Items Quantity",
      dataIndex: "item",
      key: "item",
      sorter: (a, b) => a.item - b.item,
    },
  ];

  return (
    <div className="container">
      <h2>View Requested Donation Items</h2>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default ViewReqDonor;
