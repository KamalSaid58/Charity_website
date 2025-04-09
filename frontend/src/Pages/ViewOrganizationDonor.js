import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Modal, Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import { CompassOutlined } from "@ant-design/icons";
const data = [
  {
    key: 1,
    name: "El Doctor",
    type: "Hospital",
    governate: "Bani Suef",
    area: "New Bani Suef",
    email: "DoctorNafso@gmail.com",
    phone: "12394815215102",
    address: "Qism Bani Sweif",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17079.073701355126!2d31.11523975587669!3d29.040063689442217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a25c821f9913b%3A0x4ebfd906dbc1efed!2sPearl%20Hospital!5e0!3m2!1sen!2seg!4v1715360490666!5m2!1sen!2seg",
  },
  {
    key: 2,
    name: "Fein Aboya",
    type: "Orphanage",
    governate: "Cairo",
    area: "Maadi",
    email: "aboya@gmail.com",
    phone: "123948102",
    address: "34 Street 206, Maadi as Sarayat Al Gharbeyah",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55298.98766625956!2d31.20863914489745!3d29.974063179280158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583812e50d4eeb%3A0xa50e699a378a9789!2sAwlady!5e0!3m2!1sen!2seg!4v1715359640873!5m2!1sen!2seg",
  },
  {
    key: 3,
    name: "Kolo 5eer",
    type: "Charity",
    governate: "Cairo",
    area: "Maadi",
    email: "5eer@gmail.com",
    phone: "123948102",
    address: "gamb kolo 5eer",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.67389984829!2d31.43156967629111!3d30.01751867493716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cd75153e123%3A0xd6d98616e2c385f7!2sAir%20Force%20Specialized%20Hospital!5e0!3m2!1sen!2seg!4v1714943268574!5m2!1sen!2seg",
  },
  {
    key: 4,
    name: "Feeha 5eer",
    type: "Charity",
    governate: "Cairo",
    area: "Tagamo3",
    email: "5eer@gmail.com",
    phone: "123948102",
    address: "gamb feeha 5eer",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13819.759245356123!2d31.418910159506442!3d30.009884593689325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d3d0f24bb19%3A0x9c2e29206cad7ea2!2sTown%20Hospital!5e0!3m2!1sen!2seg!4v1715359492945!5m2!1sen!2seg",
  },

  {
    key: 5,
    name: "Dr Abo kamal",
    type: "Hospital",
    governate: "Cairo",
    area: "Maadi",
    email: "MohandasKamal@gmail.com",
    phone: "29320932",
    address: "Ring Road",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14646.310052091709!2d31.32400042518346!3d29.977454992140498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458394c2be29789%3A0x7ff2df760097841f!2sPearl%20Hospital!5e0!3m2!1sen!2seg!4v1715359552729!5m2!1sen!2seg",
  },
];

const ViewOrganizationDonor = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleActionClick = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };
  const handleIconAction = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
    setSearchedColumn("");
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
              type={
                selectedKeys.includes("New Bani Suef") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("New Bani Suef")
                    ? []
                    : ["New Bani Suef"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              New Bani Suef
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
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
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
      title: "Location",
      key: "Loc",
      render: (_, record) => (
        <CompassOutlined
          style={{ fontSize: "40px", cursor: "pointer" }}
          onClick={() => handleIconAction(record)}
        />
      ),
    },
  ];

  return (
    <>
      <div className="container">
        <h2>Current Organizations</h2>
        <Space style={{ marginBottom: 16 }}></Space>
        <Table columns={columns} dataSource={data} onChange={handleChange} />
        <Modal
          open={isModalVisible}
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
              <p>Email: {selectedRecord.address}</p>
              <p>Phone Number: {selectedRecord.phone}</p>
              <p>Type: {selectedRecord.type}</p>
              <p>Governate: {selectedRecord.governate}</p>
              <p>Area: {selectedRecord.area}</p>
              <p>Address: {selectedRecord.address}</p>
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
export default ViewOrganizationDonor;
