import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
const columns = [
  {
    title: 'Organization Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Organization Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Governorate',
    dataIndex: 'governorate',
    key: 'governorate',
  },
  {
    title: 'Area',
    dataIndex: 'area',
    key: 'area',
  },
];



const ViewOrganizationAdmin = () => {

  const [data, setData] = useState([
    {
      key: 1,
      name: 'Kolo 5eer',
      type: 'Charity',
      governorate: 'Cairo',
      area: 'Maadi',
    },
    {
      key: 2,
      name: 'Feeha 5eer',
      type: 'Charity',
      governorate: 'Cairo',
      area: 'Tagamo3',
    },
    {
      key: 3,
      name: 'Fein Aboya',
      type: 'Orphanage',  
      governorate: 'Cairo',
      area: 'Maadi',
    },
    { 
      key: 4,
      name: 'A7san 5eer',
      type: 'Charity',
      governorate: 'Bani Suef',
      area: 'Kobry',
    },
    {
      key: 5,
      name: 'El Doctor',
      type: 'Hospital',
      governorate: 'Bani Suef',
      area: 'Kobry',
    },
  ]);

  const handleDeletionClick = (record) =>
    {
      const newData = [...data];
      
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].key === record.key) {
          newData.splice(i, 1);
          break; // Exit loop since we found and removed the item
        }
    }
    setData(newData);
  }
  const filterArea = [...new Set(data.map(item => item.area))];
  const filterGov = [...new Set(data.map(item => item.governorate))];
  const filterType = [...new Set(data.map(item => item.type))];
  



  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();  
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const clearFilters = () => {
    setFilteredInfo({});
    setSearchText('');
  };


  // search
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
  // filter
  const [filteredInfo, setFilteredInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
  };


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      // filteredValue is needed only if there are other columns with filters
      filteredValue:filteredInfo.name || null,
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: '20%',
      filters: filterType.map(option => ({
        text: option,
        value: option,
      })),
      filteredValue: filteredInfo.type || null,
      onFilter: (value, record) => record.type.includes(value),
      ellipsis: true,
    },
    {
      title: 'Governorate',
      dataIndex: 'governorate',
      key: 'governorate',
      filters: filterGov.map(option => ({
        text: option,
        value: option,
      })),
      filteredValue: filteredInfo.governorate || null,
      onFilter: (value, record) => record.governorate.includes(value),
      ellipsis: true,
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
      filters: filterArea.map(option => ({
        text: option,
        value: option,
      })),
      filteredValue: filteredInfo.area || null,
      onFilter: (value, record) => record.area.includes(value),
      ellipsis: true,
    },
    {
      title: '',
      key: 'delete',
      render: (text, record) => (
        <Button type="primary" onClick={() => handleDeletionClick(record)}>
          Delete
        </Button>
      ),
    },

  ];

return (
  <>
    <Space
      style={{
        marginBottom: 16,
      }}
    >
      <Button onClick={clearFilters}>Clear All Filters</Button>
    </Space>
    <Table
  columns={columns}
  dataSource={data} onChange={handleChange}
/>;
  </>
);
};
export default ViewOrganizationAdmin;