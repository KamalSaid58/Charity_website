import React, { useState, useRef } from "react";
import { Button, Space, Table, Modal, InputNumber, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { useAsyncError, useNavigate } from "react-router-dom";

const ListOfMedicalSupplies = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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
      supplies: "Medical Devices",
      type: "Single Use",
      use: "Inject Medication",
      quantity: 5,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzdGWdbzpAevLfvxp9Zf0smnHSqCcE31MdU2-yJBWgg&s",
    },
    {
      key: "2",
      supplies: "Medical Equipments",
      type: "First Aid",
      use: "Treat Minor Injuries",
      quantity: 3,
      picture:
        "https://www.lakesidemedical.ca/app/uploads/featuredimage-The-Importance-of-Having-a-First-Aid-Kit-in-Your-Home-or-Place-of-Business.jpg",
    },
    {
      key: "3",
      supplies: "Medication",
      type: "Tablets",
      use: "Deliver Oral Medication",
      quantity: 8,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq_elvANB1QD58CDfS-XWxvTAr1TW_SQO2omwDS9lFA&s",
    },
    // {
    //   key: "4",
    //   supplies: "Medical Devices",
    //   type: "Imaging",
    //   use: "Identify disease or injury",
    //   quantity: 10,
    //   picture:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GGXwGYUBYoUAqU-DzLvi7RyY1mEAY_RCuLULBldsnw&s",
    // },
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
        {title === "Supplies" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={
                selectedKeys.includes("Medical Devices") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Medical Devices")
                    ? []
                    : ["Medical Devices"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Medical Devices
            </Button>

            <Button
              type={
                selectedKeys.includes("Medical Equipments")
                  ? "primary"
                  : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Medical Equipments")
                    ? []
                    : ["Medical Equipments"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Medical Equipments
            </Button>

            <Button
              type={selectedKeys.includes("Medication") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Medication") ? [] : ["Medication"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Medication
            </Button>
          </div>
        )}

        {title === "Type" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Single Use") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Single Use") ? [] : ["Single Use"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Single Use
            </Button>

            <Button
              type={selectedKeys.includes("First Aid") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("First Aid") ? [] : ["First Aid"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              First Aid
            </Button>

            <Button
              type={selectedKeys.includes("Tablets") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Tablets") ? [] : ["Tablets"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Tablets
            </Button>
          </div>
        )}
        {title === "Use" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={
                selectedKeys.includes("Inject Medication")
                  ? "primary"
                  : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Inject Medication")
                    ? []
                    : ["Inject Medication"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Inject Medication
            </Button>

            <Button
              type={
                selectedKeys.includes("Deliver Oral Medication")
                  ? "primary"
                  : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Deliver Oral Medication")
                    ? []
                    : ["Deliver Oral Medication"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Deliver Oral Medication
            </Button>

            <Button
              type={
                selectedKeys.includes("Treat Minor Injuries")
                  ? "primary"
                  : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Treat Minor Injuries")
                    ? []
                    : ["Treat Minor Injuries"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Treat Minor Injuries
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
      title: "Supplies",
      dataIndex: "supplies",
      key: "supplies",
      ...getColumnSearchProps("supplies", "Supplies"),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      ...getColumnSearchProps("type", "Type"),
    },
    {
      title: "Use",
      dataIndex: "use",
      key: "use",
      ...getColumnSearchProps("use", "Use"),
    },
    {
      title: "Fixed Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Editable Quantity",
      key: "editableQuantity",
      render: (_, record) => (
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
      <h2>List of Medical Supplies Donation Requests</h2>
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
            <p>Supplies: {selectedRecord.supplies}</p>
            <p>Type: {selectedRecord.type}</p>
            <p>Use: {selectedRecord.use}</p>
            <p>Quantity: {selectedRecord.quantity}</p>
            {showPicture && (
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
    </div>
  );
};

export default ListOfMedicalSupplies;
