import React, { useState, useRef } from "react";
import { Button, Input, Space, Table, Modal, Popconfirm, Checkbox } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { PDFDocument, rgb } from "pdf-lib";

const OrganList = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const originalDataSource = [
    {
      key: "1",
      RepName: "Kamal Said",
      RepGender: "Male",
      RepEmail: "@kamal.said",
      RepNumber: "01147193000",
      OrganName: "KamalClothes",
      OrganType: "Clothes",
      OrganAddress: "Cairo",
    },
    {
      key: "2",
      RepName: "Wafaa Said",
      RepGender: "Female",
      RepEmail: "@wafaa.said",
      RepNumber: "01140155400",
      OrganName: "WafaaFire",
      OrganType: "Fire heal",
      OrganAddress: "Alexandria",
    },
    {
      key: "3",
      RepName: "Said Faramawy",
      RepGender: "Male",
      RepEmail: "@said.faramawy",
      RepNumber: "01028288077",
      OrganName: "SaidOrphanage",
      OrganType: "Orphanage",
      OrganAddress: "Fifth settlement",
    },
  ];

  const [dataSource, setDataSource] = useState(originalDataSource);

  const handleActionClick = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleBackButtonClick = () => {
    navigate("/Admin");
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
    setSearchedColumn("");
  };

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    alert("You have successfuly rejected the organization request");
  };
  const handleAccept = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    alert("You have successfuly accepted the organization request");
  };
  const handleSelect = (record, selected) => {
    const newSelectedRowKeys = selected
      ? [...selectedRowKeys, record.key]
      : selectedRowKeys.filter((key) => key !== record.key);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const handleSelectAll = (selected) => {
    setIsAllSelected(selected);
    const newSelectedRowKeys = selected
      ? dataSource.map((record) => record.key)
      : [];
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const handleDownload = async () => {
    const selectedRecords = dataSource.filter((record) =>
      selectedRowKeys.includes(record.key)
    );

    if (selectedRecords.length === 0) {
      console.error("No records selected for download");
      return;
    }

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 1000]);
    const { width, height } = page.getSize();

    let y = height - 40;

    page.drawText("Selected Records", {
      x: 50,
      y: height - 20,
      size: 18,
      color: rgb(0, 0, 0),
    });
    let recordCount = 1;
    selectedRecords.forEach((record) => {
      y -= 40;
      page.drawText("Record " + recordCount, {
        x: 50,
        y,
        size: 12,
        color: rgb(0, 0, 0),
      });
      y -= 20;
      page.drawText(`Organization Name: ${record.OrganName}`, {
        x: 50,
        y,
        size: 12,
        color: rgb(0, 0, 0),
      });
      y -= 20;
      page.drawText(`Oranization Type: ${record.OrganType}`, {
        x: 50,
        y,
        size: 12,
        color: rgb(0, 0, 0),
      });
      y -= 20;
      page.drawText(`Organ Address: ${record.OrganAddress}`, {
        x: 50,
        y,
        size: 12,
        color: rgb(0, 0, 0),
      });
      y -= 20;
      page.drawText(`Representative Name: ${record.RepName}`, {
        x: 50,
        y,
        size: 12,
        color: rgb(0, 0, 0),
      });
      y -= 20;
      page.drawText(`Representative Gender: ${record.RepGender}`, {
        x: 50,
        y,
        size: 12,
        color: rgb(0, 0, 0),
      });
      y -= 20;
      page.drawText(`Representative Email: ${record.RepEmail}`, {
        x: 50,
        y,
        size: 12,
        color: rgb(0, 0, 0),
      });
      y -= 20;
      page.drawText(`Representative Number: ${record.RepNumber}`, {
        x: 50,
        y,
        size: 12,
        color: rgb(0, 0, 0),
      });

      recordCount++;
    });

    const pdfBytes = await pdfDoc.save();

    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const newWindow = window.open(pdfUrl, "_blank");
    if (!newWindow) {
      console.error("Failed to open PDF in new window");
      return;
    }
  };

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

        {title === "Name" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={
                selectedKeys.includes("KamalClothes") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("KamalClothes") ? [] : ["KamalClothes"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              KamalClothes
            </Button>

            <Button
              type={selectedKeys.includes("WafaaFire") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("WafaaFire") ? [] : ["WafaaFire"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              WafaaFire
            </Button>

            <Button
              type={
                selectedKeys.includes("SaidOrphanage") ? "primary" : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("SaidOrphanage")
                    ? []
                    : ["SaidOrphanage"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              SaidOrphanage
            </Button>
          </div>
        )}
        {title === "Type" && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              type={selectedKeys.includes("Clothes") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Clothes") ? [] : ["Clothes"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Clothes
            </Button>

            <Button
              type={selectedKeys.includes("Fire heal") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Fire heal") ? [] : ["Fire heal"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Fire heal
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
              type={selectedKeys.includes("Cairo") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(selectedKeys.includes("Cairo") ? [] : ["Cairo"])
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Cairo
            </Button>

            <Button
              type={selectedKeys.includes("Alexandria") ? "primary" : "default"}
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Alexandria") ? [] : ["Alexandria"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Alexandria
            </Button>

            <Button
              type={
                selectedKeys.includes("Fifth settlement")
                  ? "primary"
                  : "default"
              }
              onClick={() =>
                setSelectedKeys(
                  selectedKeys.includes("Fifth settlement")
                    ? []
                    : ["Fifth settlement"]
                )
              }
              style={{ marginBottom: 8 }}
              size="small"
            >
              Fifth settlement
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

  const columns = [
    {
      title: (
        <Checkbox
          checked={isAllSelected}
          onChange={(e) => handleSelectAll(e.target.checked)}
        />
      ),
      dataIndex: "key",
      key: "key",
      render: (_, record) => (
        <Checkbox
          checked={selectedRowKeys.includes(record.key)}
          onChange={(e) => handleSelect(record, e.target.checked)}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "OrganName",
      key: "OrganName",
      ...getColumnSearchProps("OrganName", "Name"),
    },
    {
      title: "Type",
      dataIndex: "OrganType",
      key: "OrganType",
      ...getColumnSearchProps("OrganType", "Type"),
    },
    {
      title: "Address",
      dataIndex: "OrganAddress",
      key: "OrganAddress",
      ...getColumnSearchProps("OrganAddress", "Address"),
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
      title: "Accept/Reject",
      dataIndex: "Accept/Reject",
      key: "Accept/Reject",
      render: (_, record) => (
        <div>
          <Popconfirm
            title="Are you sure you want to accept this record?"
            onConfirm={() => handleAccept(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              shape="circle"
              icon={<CheckOutlined />}
              style={{ marginRight: 8, background: "green" }}
            />
          </Popconfirm>
          <Popconfirm
            title="Are you sure you want to reject this record?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              shape="circle"
              icon={<CloseOutlined />}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <h2>Organizations Requests</h2>
      <Table columns={columns} dataSource={dataSource} />
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
            <p>Name: {selectedRecord.OrganName}</p>
            <p>Type: {selectedRecord.OrganType}</p>
            <p>Address: {selectedRecord.OrganAddress}</p>
            <p>Representative Name: {selectedRecord.RepName}</p>
            <p>Representative Gender: {selectedRecord.RepGender}</p>
            <p>Representative Email: {selectedRecord.RepEmail}</p>
            <p>Representative Number: {selectedRecord.RepNumber}</p>
          </div>
        )}
      </Modal>
      <Button
        type="primary"
        onClick={handleDownload}
        disabled={selectedRowKeys.length === 0}
      >
        Download
      </Button>
    </div>
  );
};

export default OrganList;
