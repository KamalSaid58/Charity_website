import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Select, Form, Input, message, Modal, Popover } from "antd";
import { CompassOutlined } from "@ant-design/icons";
import FormRange from "react-bootstrap/esm/FormRange";

const { Option } = Select;

function ClinicLocationForm() {
  const [form] = Form.useForm();
  const [category, setCategory] = useState("");
  const [categorytoys, setCategorytoys] = useState("");
  const [categoryfood, setCategoryfood] = useState("");
  const [categoryschool, setCategoryschool] = useState("");
  const [categorymedical, setCategorymedical] = useState("");
  const [Gender, setGender] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleIconAction = () => {
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
  const content = <div></div>;
  const onFinish = (values) => {
    const requiredFields = ["Address"];
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
      <Form
        form={form}
        {...formItemLayout}
        onFinish={onFinish}
        variant="filled"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          label="Address"
          name="Address"
          rules={[
            {
              required: true,
              message: "Please input Address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Area"
          name="Area"
          rules={[
            {
              required: true,
              message: "Please input Address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Governorate"
          name="Governorate"
          rules={[
            {
              required: true,
              message: "Please input Address!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: "Please select a Location!",
            },
          ]}
        >
          <Select onChange={(value) => setCategory(value)} value={category}>
            <Option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13818.508021258298!2d31.416086432212246!3d30.01886479247728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d9511c47395%3A0x291a34366112c220!2z2YXYs9iq2LTZgdmJINmG2LPYp9im2YU!5e0!3m2!1sen!2seg!4v1715446462983!5m2!1sen!2seg">
              Nasayeem
            </Option>
            <Option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4828374247077!2d31.235299574158766!3d30.02300281958881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458474801f2136f%3A0x5b7e6b7cbf39dd15!2sChildren%E2%80%99s%20Cancer%20Hospital%20Egypt%2057357!5e0!3m2!1sen!2seg!4v1715446563691!5m2!1sen!2seg">
              57357
            </Option>
            <Option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.6737380373647!2d31.43156967415857!3d30.01752331984822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cd75153e123%3A0xd6d98616e2c385f7!2sAir%20Force%20Specialized%20Hospital!5e0!3m2!1sen!2seg!4v1715446748047!5m2!1sen!2seg">
              ElGawy
            </Option>
            <Option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.0387438406096!2d31.327240974162113!3d30.093076716267362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458158a930edb85%3A0x642c923f11f70af4!2zQ2xlb3BhdHJhIEhvc3BpdGFsINmF2LPYqti02YHZiSDZg9mE2YrZiNio2KfYqtix2KcgLSBDbGVvcGF0cmEgSG9zcGl0YWxzIEdyb3Vw!5e0!3m2!1sen!2seg!4v1715446625695!5m2!1sen!2seg">
              Cleopatra
            </Option>
            <Option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.934535616732!2d30.93186897416089!3d30.067410917484718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585856f39bac69%3A0xd5805ca116dcdc71!2zRWwgTmFkYSBIb3NwaXRhbCBTaGVpa2ggWmF5ZWQgLSDZhdiz2KrYtNmB2Ykg2KfZhNmG2K_ZiSDYp9mE2LTZitiuINiy2KfZitiv!5e0!3m2!1sen!2seg!4v1715446862955!5m2!1sen!2seg">
              ElNada
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Specialty"
          name="Specialty"
          rules={[
            {
              required: true,
              message: "Please input Specialty!",
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
              message: "Please input Maximum pro-bono Cases!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Popover content={content} title="Location Marker">
          <CompassOutlined
            style={{ fontSize: "40px", cursor: "pointer" }}
            onClick={handleIconAction}
          />
        </Popover>
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

export default ClinicLocationForm;
