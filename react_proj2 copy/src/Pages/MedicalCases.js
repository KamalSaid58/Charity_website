import React, { useState, useRef } from 'react';
import { Button, Space, Table, Modal,message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useNavigate } from "react-router-dom";



const MedicalCases = () => {
  const [searchText, setSearchText] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  
  const info = (record) => {
    messageApi.info('You have chosen '+record.medicalspec+" in "+record.organizationname);
  };
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
   setIsModalOpen(true);
  };

  /*const handleQuantityChange = (record, quantity) => {
    setDonationQuantities({ ...donationQuantities, [record.key]: quantity });
  };*/

  const dataSource = [
    {
      key: '1',
      medicalspec:"Neurosurgical",
      organizationname: '57357',
      area: 'Al Sayeda Zeinab',
      governorate: 'Minister of Health',  
      patientname: 'Kareem',
      age:'20',
      gender:'Male',
      weight:'80',
      address:'Sekat Hadid Al Mahger, Zeinhom' , 
      casedesc:'Brain Tumor 2nd degree',
      src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11960.011323232875!2d31.227785871599313!3d30.02228469475244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458474801f2136f%3A0x5b7e6b7cbf39dd15!2sChildren%E2%80%99s%20Cancer%20Hospital%20Egypt%2057357!5e0!3m2!1sen!2seg!4v1715005224120!5m2!1sen!2seg",
    },
    {
        key: '2',
        medicalspec:'Cardiology',
        organizationname: 'Nasayeem',
        area: 'Fifth Settlement',
        governorate: 'Minister of Health',  
        patientname: 'Abdelrahman',
        age:'40',
        gender:'Male',
        weight:'77',
        address:'90 Street' , 
        casedesc:'Coronary heart disease',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.6276077426023!2d31.4345405!3d30.0188475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d9511c47395%3A0x291a34366112c220!2z2YXYs9iq2LTZgdmJINmG2LPYp9im2YU!5e0!3m2!1sen!2seg!4v1715005477310!5m2!1sen!2seg",
    },
    {
        key: '3',
        medicalspec:'Emergency medicine',
        organizationname: 'ElGawy',
        area: 'Fifth Settlement',
        governorate: 'Governer',  
        patientname: 'Salma',
        age:'34',
        gender:'Female',
        weight:'58',
        address:'90 Street' , 
        casedesc:'Broken arm',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.67389984829!2d31.43156967629111!3d30.01751867493716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cd75153e123%3A0xd6d98616e2c385f7!2sAir%20Force%20Specialized%20Hospital!5e0!3m2!1sen!2seg!4v1715005672810!5m2!1sen!2seg",
     },
    {
        key: '4',
        medicalspec:'Surgery',
        organizationname: 'ElGawy',
        area: 'Fifth Settlement',
        governorate: 'Governer',  
        patientname: 'Mostafa',
        age:'45',
        gender:'Male',
        weight:'70',
        address:'90 Street' , 
        casedesc:'Kidney transplant',
        src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.67389984829!2d31.43156967629111!3d30.01751867493716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cd75153e123%3A0xd6d98616e2c385f7!2sAir%20Force%20Specialized%20Hospital!5e0!3m2!1sen!2seg!4v1715005672810!5m2!1sen!2seg",
    },
  ];

  const columns = [
    {
        title: 'Key',
        dataIndex: 'key',
        key: 'key',
      },
    {
      title: 'Medical Speciality',
      dataIndex: 'medicalspec',
      key: 'medicalspec',
      ...getColumnSearchProps('medicalspec'),
    },
    {
      title: 'Organization Name',
      dataIndex: 'organizationname',
      key: 'organizationname',
      ...getColumnSearchProps('organizationname'),
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
        title: 'Choose',
        key: 'Choose',
        render: (text, record) => (
            <>
      {contextHolder}
      <Button type="primary" 
      className="btn btn-lg mb-6 text-white w-20 d-flex justify-content-center align-items-center" 
      style={{ background: "#9F8C76" }}
      onClick={()=>info(record)}>
        Choose
      </Button>
    </>
        ),
      },
   
  ];

  return (
    <div className="container">
      <h2>Medical Cases</h2>
      <Space style={{ marginBottom: 16 }}>
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
            <p>Patient Name: {selectedRecord.patientname}</p>
            <p>Age: {selectedRecord.age}</p>
            <p>Gender: {selectedRecord.gender}</p>
            <p>Weight: {selectedRecord.weight}</p>
            <p>Address: {selectedRecord.address}</p>
            <p>Case Description: {selectedRecord.casedesc}</p>
            <p>Specialty Needed: {selectedRecord.medicalspec}</p>
            <p>Organization Name: {selectedRecord.organizationname}</p>
            <p>Area: {selectedRecord.area}</p>
            <p>Governorate: {selectedRecord.governorate}</p>
            <Button type="link" onClick={() => setIsModalOpen(true)} style={{
                position:'absolute',
                left:'8px'
            }}>Location</Button>
          </div>
          
        )}
      </Modal>
      <Modal
      open={isModalOpen}
        title="Location"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalOpen(false)}>Close</Button>
        ]}
      >
        {selectedRecord && (
          <div>
            <iframe
            src = {selectedRecord.src}
        width="475"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
          </div>
          
        )}
      </Modal>
      
      
    </div>
  );
};

export default MedicalCases;