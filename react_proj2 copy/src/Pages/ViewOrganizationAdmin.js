import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Popconfirm, Modal } from "antd";
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
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const ViewOrganizationAdmin = () => {
  const [data, setData] = useState([
    {
      key: 1,
      name: "Kolo 5eer",
      type: "Charity",
      address: "Maadi",
      number: "0114719300",
      email: "kamal@yahoo",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221158.1049348152!2d31.155591425000008!3d29.991055999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d360e7b79f9%3A0xe2334863278572c1!2sEgyptian%20Language%20School!5e0!3m2!1sen!2seg!4v1715000890317!5m2!1sen!2seg",
    },
    {
      key: 2,
      name: "Feeha 5eer",
      type: "Charity",
      address: "Tagamo3",
      number: "0114715300",
      email: "george@yahoo",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5802.170093329363!2d31.441129290176615!3d30.151673933162055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145810a60524a231%3A0xe8d7ffe3daf3f959!2sNefertari%20International%20Schools!5e0!3m2!1sen!2seg!4v1715000703317!5m2!1sen!2seg",
    },
    {
      key: 3,
      name: "Fein Aboya",
      type: "Orphanage",
      address: "Maadi",
      number: "0115719300",
      email: "omar@yahoo",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5802.170093329363!2d31.441129290176615!3d30.151673933162055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145810a60524a231%3A0xe8d7ffe3daf3f959!2sNefertari%20International%20Schools!5e0!3m2!1sen!2seg!4v1715000703317!5m2!1sen!2seg",
    },
    {
      key: 4,
      name: "A7san 5eer",
      type: "Charity",
      address: "Kobry",
      number: "0114719310",
      email: "ahmed@yahoo",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5802.170093329363!2d31.441129290176615!3d30.151673933162055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145810a60524a231%3A0xe8d7ffe3daf3f959!2sNefertari%20International%20Schools!5e0!3m2!1sen!2seg!4v1715000703317!5m2!1sen!2seg",
    },
    {
      key: 5,
      name: "El Doctor",
      type: "Hospital",
      address: "Kobry",
      number: "0114715300",
      email: "boollaa@yahoo",
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5802.170093329363!2d31.441129290176615!3d30.151673933162055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145810a60524a231%3A0xe8d7ffe3daf3f959!2sNefertari%20International%20Schools!5e0!3m2!1sen!2seg!4v1715000703317!5m2!1sen!2seg",
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

  const [selectedRecord, setSelectedRecord] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleActionClick = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };
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

        {title === "Address" && (
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
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address", "Address"),
    },
    {
      title: "View",
      key: "details",
      render: (_, record) => (
        <Button type="primary" onClick={() => handleActionClick(record)}>
          Details
        </Button>
      ),
    },
    {
      title: "",
      key: "delete",
      render: (_, record) => (
        <div>
          <Popconfirm
            title="Are you sure you want to delete this account?"
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
        <h2>Current Organizations</h2>
        <Table columns={columns} dataSource={data} onChange={handleChange} />

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
              <p>Name: {selectedRecord.name}</p>
              <p>Number: {selectedRecord.number}</p>
              <p>Email: {selectedRecord.email}</p>
              <p>Address: {selectedRecord.address}</p>
              <Button
                type="link"
                onClick={() => setIsModalOpen(true)}
                style={{
                  position: "absolute",
                  left: "8px",
                }}
              >
                View Location
              </Button>
            </div>
          )}
        </Modal>
        <Modal
          open={isModalOpen}
          title="Location"
          visible={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={[
            <Button key="close" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>,
          ]}
        >
          {selectedRecord && (
            <div>
              <iframe
                src={selectedRecord.src}
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
    </>
  );
};
export default ViewOrganizationAdmin;
