import React, { useState, useRef } from 'react';
import { Button, Input, Space, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ViewReqDonor = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const navigate = useNavigate(); // Define navigate using useNavigate
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
        <Input
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
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
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

  const dataSource = [
    {
      key: '1',
      category: 'Clothes',
      item: 32,
      ItemN: 'T-Shirt',
    },
    {
      key: '2',
      category: 'Toys',
      item: 42,
      ItemN: 'Car',
    },
    {
      key: '3',
      category: 'Food',
      item: 10,
      ItemN: 'Meat',
    },
    {
      key: '4',
      category: 'School Supplies',
      item: 100,
      ItemN: 'Pencils',
    },
    {
      key: '5',
      category: 'School Supplies',
      item: 43,
      ItemN: 'Books',
    },
    {
      key: '6',
      category: 'Blood Supplies',
      item: 7,
      ItemN: 'Different Blood Types',
    },
    {
      key: '7',
      category: 'Clothes',
      item: 100,
      ItemN: 'Pantalons',
    },
    {
      key: '8',
      category: 'Medical Supplies',
      item: 20,
      ItemN: 'Panadol',
    },
  ];

  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      ...getColumnSearchProps('category'),
    },
    {
      title: 'Items Quantity',
      dataIndex: 'item',
      key: 'item',
      sorter: (a, b) => a.item - b.item,
    },
    {
      title: 'Item Name',
      dataIndex: 'ItemN',
      key: 'ItemN',
      ...getColumnSearchProps('address'),
    },
  ];

  const handleBackButtonClick = () => {
    navigate("/Donor"); // Assuming "/" is the path to navigate back
  };

  return (
    <div className="container">
      <h2>View Requested Donation Items</h2>
      <Table columns={columns} dataSource={dataSource} />
      <Button
        type="button"
        className="btn btn-lg mb-4 text-white w-1"
        style={{ background: "#9F8C76" }}
        onClick={handleBackButtonClick}
      >
        Back
      </Button>
    </div>
  );
};

export default ViewReqDonor;
