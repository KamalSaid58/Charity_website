import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message, Modal } from "antd";

function ClassandSubjectSelectionTeacher() {
  const [form] = Form.useForm();
  const [category, setCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
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
  const onFinish = (values) => {
    const requiredFields = ["Subjects", "Maximum pro-bono Classes"];
    const emptyFields = requiredFields.filter((field) => !values[field]);
    if (emptyFields.length > 0) {
      message.error(
        `Please fill all required fields: ${emptyFields.join(", ")}`
      );
    } else {
      message.success("Your data has been entered successfully");
      form.resetFields();
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
          label="Subjects"
          name="Subjects"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Maximum pro-bono Classes"
          name="Maximum pro-bono Classes"
          rules={[
            {
              required: true,
              message: "Please input Maximum pro-bono Classes!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <div className="divider d-flex align-items-center my-4">
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
          <Button key="close" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>,
        ]}
      >
        {
          <div>
            <iframe
              src={category}
              width="475"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        }
      </Modal>
    </div>
  );
}

export default ClassandSubjectSelectionTeacher;
