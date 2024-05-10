import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Popconfirm } from "antd";
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
    title: "Governorate",
    dataIndex: "governorate",
    key: "governorate",
  },
  {
    title: "Area",
    dataIndex: "area",
    key: "area",
  },
];

const ViewOrganizationAdmin = () => {
  const [data, setData] = useState([
    {
      key: 1,
      name: "Kolo 5eer",
      type: "Charity",
      governate: "Cairo",
      area: "Maadi",
    },
    {
      key: 2,
      name: "Feeha 5eer",
      type: "Charity",
      governate: "Cairo",
      area: "Tagamo3",
    },
    {
      key: 3,
      name: "Fein Aboya",
      type: "Orphanage",
      governate: "Cairo",
      area: "Maadi",
    },
    {
      key: 4,
      name: "A7san 5eer",
      type: "Charity",
      governate: "Bani Suef",
      area: "Kobry",
    },
    {
      key: 5,
      name: "El Doctor",
      type: "Hospital",
      governate: "Bani Suef",
      area: "Kobry",
    },
  ]);

  const handleDeletionClick = (record) => {
    const newData = [...data];

    for (let i = 0; i < newData.length; i++) {
      if (newData[i].key === record.key) {
        newData.splice(i, 1);
        break; // Exit loop since we found and removed the item
      }
    }
    setData(newData);
  };
  const filterArea = [...new Set(data.map((item) => item.area))];
  const filterGov = [...new Set(data.map((item) => item.governorate))];
  const filterType = [...new Set(data.map((item) => item.type))];

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
              size="small"
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
              size="small"
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
              size="small"
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
              size="small"
            >
              Bani Suef
            </Button>

            <Button
              type={selectedKeys.includes("Cairo") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Cairo") ? [] : ["Cairo"])
              }
              style={{ marginBottom: 8 }}
              size="small"
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
              size="small"
            >
              Tagamo3
            </Button>
            <Button
              type={selectedKeys.includes("Maadi") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Maadi") ? [] : ["Maadi"])
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Maadi
            </Button>

            <Button
              type={selectedKeys.includes("Kobry") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Kobry") ? [] : ["Kobry"])
              }
              style={{ marginBottom: 8 }}
              size="small"
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
            Close
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
      width: "30%",
      // filteredValue is needed only if there are other columns with filters
      ...getColumnSearchProps("name", "Name"),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: "20%",
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
    {
      title: "",
      key: "delete",
      render: (_, record) => (
        <div>
          <Popconfirm
            title="Are you sure you want to delete this record?"
            onConfirm={() => handleDeletionClick(record)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger shape="rectangle">
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="container">
        <h2>View Current Organizations</h2>
        <Table columns={columns} dataSource={data} onChange={handleChange} />
      </div>
    </>
  );
};
export default ViewOrganizationAdmin;
