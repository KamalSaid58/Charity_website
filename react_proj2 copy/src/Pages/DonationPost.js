import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Select, Form, Input, message } from "antd";
const { Option } = Select;

function DonationPost() {
  const [form] = Form.useForm();
  const [category, setCategory] = useState("");
  const [categorytoys, setCategorytoys] = useState("");
  const [categoryfood, setCategoryfood] = useState("");
  const [categoryschool, setCategoryschool] = useState("");
  const [categorymedical, setCategorymedical] = useState("");
  const [Gender, setGender] = useState("");
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
    const requiredFields = ["category"];
    const emptyFields = requiredFields.filter(field => !values[field]);
    if (emptyFields.length > 0) {
      message.error(`Please fill all required fields: ${emptyFields.join(", ")}`);
    } else {
      message.success('Your data has been entered successfully');
      setCategory("");
      navigate("/DonationPost");
    }
  };

  return (
    <div className="container p-3 my-1">
      <h2>Create Donation Post</h2>
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
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: 'Please select a category!',
            },
          ]}
        >
          <Select onChange={value => setCategory(value)} value={category}>
            <Option value="toys">Toys</Option>
            <Option value="clothes">Clothes</Option>
            <Option value="food">Food</Option>
            <Option value="medicalsupplies">Medical Supplies</Option>
            <Option value="schoolsupplies">School Supplies</Option>
            <Option value="blooddonations">Blood Donations</Option>
          </Select>
        </Form.Item>

        {category === "toys" && (
          <div>
            <Form.Item
              label="Type"
              name="type"
              rules={[
                {
                  required: true,
                  message: 'Please enter type!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[
                {
                  required: true,
                  message: 'Please enter age!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: 'Please select gender!',
                },
              ]}
            >
              <Select onChange={value => setGender(value)} value={Gender}>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Category Toy"
              name="toyCategory"
              rules={[
                {
                  required: true,
                  message: 'Please select toy category!',
                },
              ]}
            >
              <Select onChange={value => setCategorytoys(value)} value={categorytoys}>
                <Option value="board games">Board games</Option>
                <Option value="stuffed toys">Stuffed toys</Option>
                <Option value="dolls">Dolls</Option>
                <Option value="sports">Sports</Option>
                <Option value="cars">Cars</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: 'Please enter quantity!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
        )}

        {category === "clothes" && (
          <div>
            <Form.Item
              label="Type"
              name="type"
              rules={[
                {
                  required: true,
                  message: 'Please enter type!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[
                {
                  required: true,
                  message: 'Please enter age!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: 'Please select gender!',
                },
              ]}
            >
              <Select onChange={value => setGender(value)} value={Gender}>
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Season"
              name="season"
              rules={[
                {
                  required: true,
                  message: 'Please select season!',
                },
              ]}
            >
              <Select onChange={value => setCategorytoys(value)} value={categorytoys}>
                <Option value="summer">Summer</Option>
                <Option value="winter">Winter</Option>
                <Option value="spring">Spring</Option>
                <Option value="autumn">Autumn</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Material"
              name="material"
              rules={[
                {
                  required: true,
                  message: 'Please enter material!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: 'Please enter quantity!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
        )}

        {category === "food" && (
          <div>
            <Form.Item
              label="Food Category"
              name="foodCategory"
              rules={[
                {
                  required: true,
                  message: 'Please select food category!',
                },
              ]}
            >
              <Select onChange={value => setCategoryfood(value)} value={categoryfood}>
                <Option value="fruits">Fruits</Option>
                <Option value="vegetables">Vegetables</Option>
                <Option value="canned food">Canned Food</Option>
                <Option value="fresh meals">Fresh Meals</Option>
                <Option value="baked goods">Baked Goods</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: 'Please enter quantity!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
        )}

        {category === "medicalsupplies" && (
          <div>
            <Form.Item
              label="Medical Supplies"
              name="medicalSupplies"
              rules={[
                {
                  required: true,
                  message: 'Please select medical supplies!',
                },
              ]}
            >
              <Select onChange={value => setCategorymedical(value)} value={categorymedical}>
                <Option value="medical devices">Medical Devices</Option>
                <Option value="medical equipments">Medical Equipments</Option>
                <Option value="medication">Medication</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Device Type"
              name="deviceType"
              rules={[
                {
                  required: true,
                  message: 'Please enter device type!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Use"
              name="use"
              rules={[
                {
                  required: true,
                  message: 'Please enter use!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: 'Please enter quantity!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
        )}

        {category === "schoolsupplies" && (
          <div>
            <Form.Item
              label="Category of school supplies"
              name="schoolSuppliesCategory"
              rules={[
                {
                  required: true,
                  message: 'Please select school supplies category!',
                },
              ]}
            >
              <Select onChange={value => setCategoryschool(value)} value={categoryschool}>
                <Option value="stationary">Stationary</Option>
                <Option value="books">Books</Option>
              </Select>
            </Form.Item>

            {categoryschool === "stationary" && (
              <div>
                <Form.Item
                  label="Type"
                  name="stationaryType"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter type!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Amount"
                  name="amount"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter amount!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            )}
            {categoryschool === "books" && (
              <div>
                <Form.Item
                  label="Book Name"
                  name="bookName"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter book name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                {/* Other form items for books */}
              </div>
            )}
          </div>
        )}

        {category === "blooddonations" && (
          <div>
            <Form.Item
              label="Patient Name"
              name="patientName"
              rules={[
                {
                  required: true,
                  message: 'Please enter patient name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Blood Type"
              name="bloodType"
              rules={[
                {
                  required: true,
                  message: 'Please enter blood type!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Hospital Name"
              name="hospitalName"
              rules={[
                {
                  required: true,
                  message: 'Please enter hospital name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Hospital Area"
              name="hospitalArea"
              rules={[
                {
                  required: true,
                  message: 'Please enter hospital area!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Governorate"
              name="governorate"
              rules={[
                {
                  required: true,
                  message: 'Please enter governorate!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Hospital Address"
              name="hospitalAddress"
              rules={[
                {
                  required: true,
                  message: 'Please enter hospital address!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
        )}

        <div className="divider d-flex align-items-center my-4">
          <Button type="primary" style={{ marginRight: "10px" }} onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default DonationPost;
