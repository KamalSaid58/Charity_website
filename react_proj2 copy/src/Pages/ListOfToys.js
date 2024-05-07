import React, { useState, useRef } from 'react';
import { Button, Space, Table, Modal, InputNumber, Descriptions } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useAsyncError, useNavigate } from "react-router-dom";

const ListOfToys = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
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
        key: '1',
        Age: '10',
        Gender: 'Male',
        Category: 'Board Games',
        quantity: '5',
        Type:'Games of Displacement',
        //Description:'A classic Board Game',
        Picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToToIm_6bI13QfJTU7JxPbZwGFU9mip9BWtSwxEaC4tg&s',
      },
      {
        key: '2',
        Age: '6',
        Gender: 'Female',
        Category:'Dolls',
        quantity: '3',
        Type:'Barbie',
        Picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgJdgJ6-uSh3jhUHi9LIodLxYHsW4DxI8Xze-5fHhUA&s',
      },
      {
        key: '3',
        Age: '8',
        Gender: 'Male',
        Category:'Cars',
        quantity: '8',
        Type:'Sports',
        Picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JYRHeDDOaOhZKqIhWFHFqxbYf6V40TZsh1sOAUFRnQ&s',
      },
      {
        key: '4',
        Age: '12',
        Gender: 'Female',
        Category:'Sports',
        Type:'Basketball',
        quantity: '10',
        Picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXStlxui6Y2nfbkbSlrS8OmCO7Fqatd-mE_UYon_F-QQ&s',
      },
      {
        key: '5',
        Age: '5',
        Gender: 'Male',
        Category:'Stuffed Toys',
        Type:'Plush Puppets',
        quantity: 10,
        Picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO12eUrAGwHRtDn3J9edmQte2KhLlBtmHSn8aeIwEmpw&s',
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
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <input
          ref={searchInput}
          placeholder={'Search ${dataIndex}'}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
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
      <SearchOutlined style={filtered ? { color: '#1890ff' } : {}} />
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

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
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
      title: 'Age',
      dataIndex: 'Age',
      key: 'Age',
      ...getColumnSearchProps('Age'),
       sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'Age' ? sortedInfo.order : null,
    },
    {
      title: 'Gender',
      dataIndex: 'Gender',
      key: 'Gender',
      ...getColumnSearchProps('Gender'),
      //sorter: (a, b) => a.age - b.age,
      //sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      key: 'Category',
      ...getColumnSearchProps('Category'),
    },
    {
      title: 'Fixed Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Editable Quantity',
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
    {
      title: 'View',
      key: 'details',
      render: (text, record) => (
        <Button type="primary" onClick={() => handleActionClick(record)}>
          Details
        </Button>
      ),
    },
  ];
  

  return (
    <div className="container">
      <h2>List of Toy Donation Requests</h2>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={dataSource} onChange={handleChange} />
      <Button
        type="primary"
        //className="btn btn-lg mb-4 text-white w-1"
        //style={{ background: "#9F8C76" }}
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
            <p>Age: {selectedRecord.Age}</p>
            <p>Gender: {selectedRecord.Gender}</p>
            <p>Category: {selectedRecord.Category}</p>
            <p>Quantity: {selectedRecord.quantity}</p>
            <p>Type: {selectedRecord.Type}</p>
            
             {/* Render the picture only if showPicture is true */}
          {showPicture && <img src={selectedRecord.Picture} alt={selectedRecord.Category} style={{ width: 200 }} />}
          </div>
        )}
         <Button onClick={handleViewPictureClick}>View Picture</Button>
      </Modal>
    </div>
  );
};

export default ListOfToys;