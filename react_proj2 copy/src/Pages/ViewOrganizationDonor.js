import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
const columns = [
  {
    title: "Organization Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Organization Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Governate",
    dataIndex: "governate",
    key: "governate",
  },
  {
    title: "Area",
    dataIndex: "area",
    key: "area",
  },
];
const data = [
  {
    key: 1,
    name: "Kolo 5eer",
    type: "Charity",
    governate: "Cairo",
    area: "Maadi",
    description: "Address: x \n Place: y \n Location: z \n Pin: k",
  },
  {
    key: 2,
    name: "Feeha 5eer",
    type: "Charity",
    governate: "Cairo",
    area: "Tagamo3",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    key: 3,
    name: "Fein Aboya",
    type: "Orphanage",
    governate: "Cairo",
    area: "Maadi",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    key: 4,
    name: "A7san 5eer",
    type: "Charity",
    governate: "Bani Suef",
    area: "Kobry",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    key: 5,
    name: "Abo kamal",
    type: "Hospital",
    governate: "Cairo",
    area: "Tagamo3",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
];

const filterArea = [...new Set(data.map((item) => item.area))];
const filterGov = [...new Set(data.map((item) => item.governorate))];
const filterType = [...new Set(data.map((item) => item.type))];

const ViewOrganizationDonor = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const clearFilters = () => {
    setFilteredInfo({});
    setSearchText("");
  };
  const handleReset = (clearFilters) => {
    setSearchText("");
  };

  // search
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
        {title === "Type" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Charity") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Charity") ? [] : ["Charity"]
                )
              }
              style={{ marginBottom: 8 }}
            >
              Charity
            </Button>

            <Button
              type={selectedKeys.includes("Hospital") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Hospital") ? [] : ["Hospital"]
                )
              }
              style={{ marginBottom: 8 }}
            >
              Hospital
            </Button>

            <Button
              type={selectedKeys.includes("Orphanage") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Orphanage") ? [] : ["Orphanage"]
                )
              }
              style={{ marginBottom: 8 }}
            >
              Orphanage
            </Button>
          </div>
        )}
        {title === "Governate" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Bani Suef") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Bani Suef") ? [] : ["Bani Suef"]
                )
              }
              style={{ marginBottom: 8 }}
            >
              Bani Suef
            </Button>

            <Button
              type={selectedKeys.includes("Cairo") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Cairo") ? [] : ["Cairo"])
              }
              style={{ marginBottom: 8 }}
            >
              Cairo
            </Button>
          </div>
        )}

        {title === "Area" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Tagamo3") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Tagamo3") ? [] : ["Tagamo3"]
                )
              }
              style={{ marginBottom: 8 }}
            >
              Tagamo3
            </Button>
            <Button
              type={selectedKeys.includes("Maadi") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Maadi") ? [] : ["Maadi"])
              }
              style={{ marginBottom: 8 }}
            >
              Maadi
            </Button>

            <Button
              type={selectedKeys.includes("Kobry") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Kobry") ? [] : ["Kobry"])
              }
              style={{ marginBottom: 8 }}
            >
              Kobry
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
  // filter
  const [filteredInfo, setFilteredInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      // filteredValue is needed only if there are other columns with filters
      ...getColumnSearchProps("name", "Name"),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      ...getColumnSearchProps("type", "Type"),
    },
    {
      title: "Governate",
      dataIndex: "governate",
      key: "governate",
      ...getColumnSearchProps("governate", "Governate"),
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
      ...getColumnSearchProps("area", "Area"),
    },
  ];

  return (
    <>
      <Space
        style={{
          marginBottom: 16,
        }}
      ></Space>
      <Table columns={columns} dataSource={data} onChange={handleChange} />;
    </>
  );
};
export default ViewOrganizationDonor;
