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
const data = [
  {
    key: 1,
    name: 'Kolo 5eer',
    type: 'Charity',
    governorate: 'Cairo',
    area: 'Maadi',
    description: 'Address: x \n Place: y \n Location: z \n Pin: k',
  },
  {
    key: 2,
    name: 'Feeha 5eer',
    type: 'Charity',
    governorate: 'Cairo',
    area: 'Tagamo3',
    description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
    key: 3,
    name: 'Fein Aboya',
    type: 'Orphanage',
    governorate: 'Cairo',
    area: 'Maadi',
    description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
  {
    key: 4,
    name: 'A7san 5eer',
    type: 'Charity',
    governorate: 'Bani Suef',
    area: 'Kobry',
    description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
];

const ViewOrganizationDonor = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
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
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: '20%',
      ...getColumnSearchProps('type'),
    },
    {
      title: 'Governorate',
      dataIndex: 'governorate',
      key: 'governorate',
      ...getColumnSearchProps('governorate'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area'
    }
  ];
  return <Table columns={columns} dataSource={data} />;
};
export default ViewOrganizationDonor;