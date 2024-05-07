import React, { useState, useRef } from 'react';
import { Button, Table, Modal, InputNumber, Input } from 'antd'; // Import Input component
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useNavigate } from "react-router-dom";


const ViewListOfClothReq = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
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
      key: '1',
      name: 'T-Shirt',
      age: 12,
      quantity: 5,
      type: 'Casual', // New detail
      gender: 'Male', // New detail
      season: 'Summer', // New detail
      material: 'Cotton', // New detail
      requestedQuantity: 20, // New detail
    },
    {
      key: '2',
      name: 'Short',
      age: 14,
      quantity: 20,
      type: 'Casual', // New detail
      gender: 'Female', // New detail
      season: 'Winter', // New detail
      material: 'Silk', // New detail
      requestedQuantity: 20, // New detail
    },
    // Add more items with additional details
  ];

  const [dataSource, setDataSource] = useState(originalDataSource);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
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
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        {title === 'Gender' && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              type={selectedKeys.includes('Male') ? 'primary' : 'default'}
              onClick={() => setSelectedKeys(selectedKeys.includes('Male') ? [] : ['Male'])}
              style={{ marginBottom: 8 }}
            >
              Male
            </Button>
            <Button
              type={selectedKeys.includes('Female') ? 'primary' : 'default'}
              onClick={() => setSelectedKeys(selectedKeys.includes('Female') ? [] : ['Female'])}
              style={{ marginBottom: 8 }}
            >
              Female
            </Button>
          </div>
        )}
        {title === 'Season' && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              type={selectedKeys.includes('Summer') ? 'primary' : 'default'}
              onClick={() => setSelectedKeys(selectedKeys.includes('Summer') ? [] : ['Summer'])}
              style={{ marginBottom: 8 }}
            >
              Summer
            </Button>
            <Button
              type={selectedKeys.includes('Winter') ? 'primary' : 'default'}
              onClick={() => setSelectedKeys(selectedKeys.includes('Winter') ? [] : ['Winter'])}
              style={{ marginBottom: 8 }}
            >
              Winter
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
      <SearchOutlined style={filtered ? { color: '#1890ff' } : {}} />
    ),
    onFilter: (value, record) => {
      if (title === 'Gender' || title === 'Season') {
        return record[dataIndex] === value;
      }
      return record[dataIndex].toString().toLowerCase().includes(value.toLowerCase());
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
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  
  
  


  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
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
      title: 'ID',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Item Type',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name', 'Item Type'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
      ...getColumnSearchProps('age', 'Age'),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      ...getColumnSearchProps('gender', 'Gender'),
    },
    {
      title: 'Season',
      dataIndex: 'season',
      key: 'season',
      ...getColumnSearchProps('season', 'Season'),
    },
    {
      title: 'View',
      key: 'details',
      render: (text, record) => (
        <Button type="primary" onClick={() => handleActionClick(record)}>
          Details
        </Button>
      ),
    },
    // Hidden columns for additional details
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      visible: false,
    },
    {
      title: 'Material',
      dataIndex: 'material',
      key: 'material',
      visible: false,
    },
    {
      title: 'Requested Quantity',
      dataIndex: 'requestedQuantity',
      key: 'requestedQuantity',
      visible: false,
    },
    {
      title: 'Quantity Needed',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Quantity Donated',
      key: 'editableQuantity',
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
      title: 'Donate',
      key: 'donate',
      render: (text, record) => (
        <Button type="primary" onClick={() => handleDonate(record)}>Donate</Button>
      ),
    },
  ];

  return (
    <div className="container">
      <h2>View Clothes Items</h2>
      <Table columns={columns.filter(col => col.visible !== false)} dataSource={dataSource} onChange={handleChange} />
      <Button
        type="button"
        className="btn btn-lg mb-4 text-white w-1"
        style={{ background: "#9F8C76" }}
        onClick={handleBackButtonClick}
      >
        Back
      </Button>
      <Modal
        title="Details"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>Close</Button>
        ]}
      >
        {selectedRecord && (
          <div>
            <p>Name: {selectedRecord.name}</p>
            <p>Age: {selectedRecord.age}</p>
            <p>Type: {selectedRecord.type}</p>
            <p>Gender: {selectedRecord.gender}</p>
            <p>Season: {selectedRecord.season}</p>
            <p>Material: {selectedRecord.material}</p>
            <p>Requested Quantity: {selectedRecord.requestedQuantity}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ViewListOfClothReq;
