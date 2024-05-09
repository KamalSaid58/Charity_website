import React, { useState, useRef } from "react";
import { Button, Space, Table, Modal, InputNumber } from "antd";
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
      Supplies: "Medical Devices",
      Type: "Single Use",
      Use: "Inject Medication",
      quantity: 5,
      Picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzdGWdbzpAevLfvxp9Zf0smnHSqCcE31MdU2-yJBWgg&s",
    },
    {
      key: "2",
      Supplies: "Medical Equipments",
      Type: "First Aid",
      Use: "Treat Minor Injuries",
      quantity: 3,
      Picture:
        "https://www.lakesidemedical.ca/app/uploads/featuredimage-The-Importance-of-Having-a-First-Aid-Kit-in-Your-Home-or-Place-of-Business.jpg",
    },
    {
      key: "3",
      Supplies: "Medication",
      Type: "Tablets",
      Use: "Deliver Oral Medication",
      quantity: 8,
      Picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq_elvANB1QD58CDfS-XWxvTAr1TW_SQO2omwDS9lFA&s",
    },
    {
      key: "4",
      Supplies: "Medical Devices",
      Type: "Imaging",
      Use: "Identify disease or injury",
      quantity: 10,
      Picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GGXwGYUBYoUAqU-DzLvi7RyY1mEAY_RCuLULBldsnw&s",
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

  const getColumnSearchProps = (dataIndex) => ({
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
        <input
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
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
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
  const handleViewPictureClick = () => {
    setShowPicture(true);
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
      dataIndex: "Supplies",
      key: "Supplies",
      ...getColumnSearchProps("Supplies"),
    },
    {
      title: "Type",
      dataIndex: "Type",
      key: "Type",
      ...getColumnSearchProps("Type"),
      //sorter: (a, b) => a.age - b.age,
      //sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
    },
    {
      title: "Use",
      dataIndex: "Use",
      key: "Use",
      ...getColumnSearchProps("Use"),
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
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedRecord && (
          <div>
            <p>Supplies: {selectedRecord.Supplies}</p>
            <p>Type: {selectedRecord.Type}</p>
            <p>Use: {selectedRecord.Use}</p>
            <p>Quantity: {selectedRecord.quantity}</p>
            {showPicture && (
              <img
                src={selectedRecord.Picture}
                alt={selectedRecord.Category}
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
