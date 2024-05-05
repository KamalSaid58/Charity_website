import React, { useState, useRef } from 'react';
import { Button, Space, Table, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useNavigate } from "react-router-dom";
import { CompassOutlined } from '@ant-design/icons';
import { Divider, Image } from 'antd';
 

const ListofBloodDonation = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
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
          placeholder={`Search ${dataIndex}`}
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

 /* const setAgeSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    });
  };*/

  const handleBackButtonClick = () => {
    navigate("/Donor");
  };

  const handleActionClick = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };
  const handleIconAction = (record )=>{
   setSelectedRecord(record);
   navigate(record.location);
  };

  /*const handleQuantityChange = (record, quantity) => {
    setDonationQuantities({ ...donationQuantities, [record.key]: quantity });
  };*/

  const dataSource = [
    {
      key: '1',
      person:"Kareem",
      bloodtype: 'A positive',
      hospital: 'Nasayeem',
      area: 'Fifth settlment',
      governorate: 'Minister of health',
      address:"90 street" ,      
      location:"/Nasayeem",                           
    },
    {
      key: '2',
      person:"Kazeem",
      bloodtype: 'AB positive',
      hospital: 'Cleopatra',
      area: 'Nasr city',
      governorate: 'Governer',
      address:"Abaas elaad" , 
      location:"/Cleopatra",   
    },
    {
      key: '3',
      person:"Abdelrahman",
      bloodtype: 'O negative',
      hospital: 'Nasayeem',
      area: 'Fifth settlment',
      governorate: 'Minister of health',
      address:"90 street" ,  
      location:"/Nasayeem",  
    },
    {
      key: '4',
      person:"Ziad",
      bloodtype: 'A negative',
      hospital: 'Elgawy',
      area: 'Fifth settlment',
      governorate: 'Minister of health',
      address:"90 street" ,
      location:"/ElGawy",    
    },
  ];

  const columns = [
    {
      title: 'Bloodtype',
      dataIndex: 'bloodtype',
      key: 'bloodtype',
    },
    {
      title: 'Hospital',
      dataIndex: 'hospital',
      key: 'hospital',
      ...getColumnSearchProps('hospital'),
     // sorter: (a, b) => a.age - b.age,
      //sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
      ...getColumnSearchProps('area'),
    },
    {
      title: 'Governorate',
      dataIndex: 'governorate',
      key: 'governorate',
      ...getColumnSearchProps('governorate'),
    },
    {
      title: 'View',
      key: 'details',
      render: (text, record) => (
        <Button type="primary" 
        className="btn btn-lg mb-6 text-white w-20 d-flex justify-content-center align-items-center" 
        style={{ background: "#9F8C76" }}
        onClick={() => handleActionClick(record)}>
          Details
        </Button>
      ),
    },
    {
      title: 'Location',
      key: 'Loc',
      render: (text, record) => (
        
        <CompassOutlined 
    style={{ fontSize: '40px', cursor: 'pointer' }} 
    onClick={()=>handleIconAction(record)} 
  />
      ),
    },
  ];

  return (
    <div className="container">
      <h2>View Blood Donation Requests</h2>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={clearFilters}>Clear filters</Button>
      </Space>
      <Table columns={columns} dataSource={dataSource} onChange={handleChange} />
      <Button
        type="button"
        className="btn btn-lg mb-6 text-white w-20 d-flex justify-content-center align-items-center"
        style={{ background: "#9F8C76" }}
        onClick={handleBackButtonClick}
      >
        Back
      </Button>
      
      <Modal
      open={isModalVisible}
        title="Details"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>Close</Button>
        ]}
      >
        {selectedRecord && (
          <div>
            <p>Name: {selectedRecord.person}</p>
            <p>BloodType: {selectedRecord.bloodtype}</p>
            <p>Hospital Name: {selectedRecord.hospital}</p>
            <p>Area: {selectedRecord.area}</p>
            <p>Hospital Address: {selectedRecord.address}</p>
            <p>Hospital Governorate: {selectedRecord.governorate}</p>
          </div>
          
        )}
      </Modal>
      
      
    </div>
  );
};

export default ListofBloodDonation;