import React, { useState, useRef } from "react";
import { Space, Table } from "antd";

const ListOfFood = () => {
  const originalDataSource = [
    {
      key: "1",
      name: "Mostafa",
      vehicle: "Motorcycle",
      item: "Notebooks",
      phone: "2030230223",
      time: "Arrived!",
    },
    {
      key: "2",
      name: "Ahmed",
      vehicle: "Motorcycle",
      item: "Notebooks",
      phone: "21030230223",
      time: "30 Minutes",
    },
    {
      key: "1",
      name: "Mohamed",
      vehicle: "Car",
      item: "Canned Food",
      phone: "2030230223",
      time: "28th May, 9:00 PM",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Vehicle",
      dataIndex: "vehicle",
      key: "vehicle",
    },
    {
      title: "Item for Delivery",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Contact Information",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Estimated time of arrival",
      dataIndex: "time",
      key: "time",
    },
  ];
  const [dataSource, setDataSource] = useState(originalDataSource);

  return (
    <div className="container">
      <h2>List of Upcoming Deliveries</h2>
      <Space style={{ marginBottom: 16 }}></Space>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default ListOfFood;
