import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Select, Form, Input, message,Modal,Popover  } from "antd";
import { CompassOutlined } from '@ant-design/icons';

const { Option } = Select;

function ClassandSubjectSelectionTeacher() {
  const [form] = Form.useForm();
  const [category, setCategory] = useState("");
  const [categorytoys, setCategorytoys] = useState("");
  const [categoryfood, setCategoryfood] = useState("");
  const [categoryschool, setCategoryschool] = useState("");
  const [categorymedical, setCategorymedical] = useState("");
  const [Gender, setGender] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleIconAction = ( )=>{
    setIsModalOpen(true);
   };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };
  const content = (
    <div>
    
    </div>
  );
  const onFinish = (values) => {
    const requiredFields = ["Address"];
    const emptyFields = requiredFields.filter(field => !values[field]);
    if (emptyFields.length > 0) {
      message.error(`Please fill all required fields: ${emptyFields.join(", ")}`);
    } else {
      message.success('Your data has been entered successfully');
    }
  };

  return (
    <div className="container p-3 my-1">
      <h2>Class and Subject Selection</h2>
      <Form
        form={form}
        {...formItemLayout}
        onFinish={onFinish}
        variant="filled"
        style={{
          maxWidth: 900,
        }}
      >
        <Form.Item
      label="Subject"
      name="Subject"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>
        <Form.Item
      label="how many pro-bono classes you can teach"
      name="how many pro-bono classes you can teach"
      rules={[
        {
          required: true,
          message: 'Please input how many pro-bono classes you can teach!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      label="Maximum pro-bono Cases"
      name="Maximum pro-bono Cases"
      rules={[
        {
          required: true,
          message: 'Please input Maximum pro-bono Cases!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    
        <div className="divider d-flex align-items-center my-4">
          <Button type="primary" style={{ marginRight: "10px" }} onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          
        </div>
      </Form>
      <Modal
      open={isModalOpen}
        title="Location"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalOpen(false)}>Close</Button>
        ]}
      >
        { (
          <div>
            <iframe
            src = {category}
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
  );
}

export default ClassandSubjectSelectionTeacher;
