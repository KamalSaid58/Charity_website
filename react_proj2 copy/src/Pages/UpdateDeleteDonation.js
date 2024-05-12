import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Table,
  Modal,
  notification,
} from "antd";

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable && title !== "operation") {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const UpdateDeleteDonation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [api, contextHolder] = notification.useNotification();

  const handleEditSave = () => {
    setIsModalVisible(false);
  };

  const [dataSource, setDataSource] = useState([
    {
      key: "1", //moda,
      category: "Food",
      categoryoffood: "Canned food", //modal
      itemname: "Dolphin tuna can ", //modal
      quantity: "4",
    },
    {
      key: "2", //modal
      category: "Medical supply",
      categoryoffood: "Medication", //modal
      itemname: "Tablets", //modal
      use: "Drugs", //modal
      quantity: "4",
    },
    {
      key: "3", //modal
      category: "Toys",
      categoryoffood: "Board games", //modal
      age: "10", //modal
      gender: "Male", //modal
      quantity: "2",
    },
    {
      key: "4", //moda,
      category: "Food",
      categoryoffood: "Fresh food", //modal
      itemname: "Orange", //modal
      quantity: "4 Kg",
    },
  ]);
  const [count, setCount] = useState(2);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleSave = (row) => {
    const unfilledDataNotification = () => {
      api.error(
        {
          message: "Please fill out all the boxes",
          placement: "top",
          duration: 3,
        },
        500
      );
    };
    let isEmpty = false;
    if (row.category === "Food") {
      if (row.categoryoffood === "" || row.itemname === "") isEmpty = true;
    } else if (row.category === "Toys") {
      if (row.categoryoffood === "" || row.age === "" || row.gender === "")
        isEmpty = true;
    } else if (row.category === "Medical supply") {
      if (row.categoryoffood === "" || row.itemname === "" || row.use === "")
        isEmpty = true;
    }
    if (isEmpty) {
      unfilledDataNotification();
    } else {
      const newData = [...dataSource];
      const index = newData.findIndex((item) => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      setDataSource(newData);
    }
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const handleActionClick = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };
  const columns = [
    {
      title: "Key",
      dataIndex: "key",
      width: "30%",
      editable: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      editable: true,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      editable: true,
    },

    {
      title: "View",
      key: "details",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleActionClick(record)}>
          Details
        </Button>
      ),
    },
    {
      title: "",
      dataIndex: "",
      render: (_, record) =>
        dataSource.length >= 1 && record.key !== "deleteRow" ? (
          <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button type="primary" danger shape="rectangle">
              Delete
            </Button>
          </Popconfirm>
        ) : null,
    },
  ].map((col) => ({
    ...col,
    onCell: (record) => ({
      record,
      editable: col.editable,
      dataIndex: col.dataIndex,
      title: col.title,
      handleSave,
    }),
  }));

  return (
    <>
      {contextHolder}
      <h2>Donation Posts</h2>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
      <Modal
        title="Details"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>,
          <Button key="edit" type="primary" onClick={handleEditSave}>
            Save
          </Button>,
        ]}
      >
        {selectedRecord && (
          <div>
            <p>Key: {selectedRecord.key}</p>
            <p>Category: {selectedRecord.category}</p>
            <p>Quantity: {selectedRecord.quantity}</p>
            {selectedRecord.category === "Food" && (
              <>
                <Form.Item label="Category of Food" name="categoryoffood">
                  <Input defaultValue={selectedRecord.categoryoffood} />
                </Form.Item>
                <Form.Item label="Item Name" name="itemname">
                  <Input defaultValue={selectedRecord.itemname} />
                </Form.Item>
              </>
            )}
            {selectedRecord.category === "Medical supply" && (
              <>
                <Form.Item label="Category of Medicine" name="categoryoffood">
                  <Input defaultValue={selectedRecord.categoryoffood} />
                </Form.Item>
                <Form.Item label="Item Name" name="itemname">
                  <Input defaultValue={selectedRecord.itemname} />
                </Form.Item>
                <Form.Item label="Use" name="use">
                  <Input defaultValue={selectedRecord.use} />
                </Form.Item>
              </>
            )}
            {selectedRecord.category === "Toys" && (
              <>
                <Form.Item label="Category of Toys" name="categoryoffood">
                  <Input defaultValue={selectedRecord.categoryoffood} />
                </Form.Item>
                <Form.Item label="Age" name="age">
                  <Input defaultValue={selectedRecord.age} />
                </Form.Item>
                <Form.Item label="Gender" name="gender">
                  <Input defaultValue={selectedRecord.gender} />
                </Form.Item>
              </>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default UpdateDeleteDonation;
