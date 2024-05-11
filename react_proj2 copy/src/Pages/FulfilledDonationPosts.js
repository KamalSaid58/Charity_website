import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Table ,Modal} from 'antd';

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
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable && title !== 'operation') {
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

const FulfilledDonationPosts = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
  
   
  
    const handleEditSave = () => {
      // Implement your logic to save the edited record
      setIsModalVisible(false);
    };
  const [dataSource, setDataSource] = useState([
    {
      key: '1',//moda,
      category: 'Food',
      categoryoffood:'Canned food',//modal
      itemname: 'Dolphin tuna can ',//modal
      quantity: '4',
    },
    {
        key: '2',//modal
        category:'Medical supply',
        categoryoffood:'Medication',//modal
        itemname: 'Tablets',//modal
        use:'Drugs',//modal
        quantity: '4',
    },
    {
        key: '3',//modal
        category:'Toys',
        categoryoffood:'Board games',//modal
        age: '10',//modal
        gender:'Male',//modal
        quantity: '2',
    },
    {
        key: '4',//moda,
        category: 'Food',
        categoryoffood:'Fresh food',//modal
        itemname: 'Orange',//modal
        quantity: '4 Kg',
        
      },
      {
        key: '5',//modal
        category:'Toys',
        categoryoffood:'Dolls',//modal
        age: '2',//modal
        gender:'Female',//modal
        quantity: '1',
    },
    
  ]);
  const [count, setCount] = useState(2);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

 

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
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
      title: 'Key',
      dataIndex: 'key',
      width: '30%',
      
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 && record.key !== 'deleteRow' ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
    {
        title: 'View',
        key: 'details',
        render: (text, record) => (
          <Button type="primary" 
          onClick={() => handleActionClick(record)}>
            Details
          </Button>
        ),
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
    <div>
        <h2>Fulfilled Doantion Posts</h2>
      <Table
        components={components}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    <Modal
        title="Details"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>Close</Button>,
        ]}
      >
        {selectedRecord && (
          <div>
            <p>Key: {selectedRecord.key}</p>
            <p>Category: {selectedRecord.category}</p>
            <p>Quantity: {selectedRecord.quantity}</p>
            {selectedRecord.category === 'Food' && (
              <>
            <p>Category of Food: {selectedRecord.categoryoffood}</p>

            <p>Item Name: {selectedRecord.itemname}</p>

              </>
            )}
            {selectedRecord.category === 'Medical supply' && (
              <>
             <p>Category of Medicine: {selectedRecord.categoryoffood}</p>

             <p>Item Name: {selectedRecord.itemname}</p>

             <p>Use: {selectedRecord.use}</p>

              </>
            )}
            {selectedRecord.category === 'Toys' && (
              <>
            <p>Category of Toys: {selectedRecord.categoryoffood}</p>
            <p>Age: {selectedRecord.age}</p>
            <p>Gender: {selectedRecord.gender}</p>
            
              </>
            )}
          </div>
        )}
      </Modal>

    </div>
  );
};

export default FulfilledDonationPosts;
