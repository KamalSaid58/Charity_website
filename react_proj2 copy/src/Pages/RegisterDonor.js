import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Select } from "antd";
import UploadFile from "../Components/UploadFile";
import "../Styles/RegisterDonor.css";
import DonorData from "../DonorReg";
import { Card, Flex } from "antd";
import { Space, Row } from "antd";

function RegisterDonor() {
  const [selectedType, setSelectedType] = useState("");
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [fileList, setFileList] = useState([]);

  const handleTypeChange = (value) => {
    setSelectedType(value);
    setShowUploadButton(value === "Doctor" || value === "Teacher");
  };

  function checkNavigateTo() {
    const inputs = document.querySelectorAll(
      'input[type="text"], input[type="password"]'
    );
    let isEmpty = false;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isEmpty = true;
        return;
      }
    });
    const fileInput = document.getElementById("file-upload");
    if (!fileInput.files.length) {
      isEmpty = true;
    }

    DonorData.push({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: "",
      number: "",
      address: "",
      area: "",
      goveernate: "",
      pdf: fileList,
    });

    if (isEmpty) {
      alert("One of the inputs are empty");
    } else {
      alert("You have been accepted");
      navigate("/LoginTrial");
    }
  }

  const cardStyle = {
    hoverable: true,
    title: "Register!",
    bordered: true,
  };
  const flexTextBoxStyle = {
    gap: "small",
  };

  const TextBoxRow = ({ children }) => {
    return <Space>{children}</Space>;
  };

  const CardContent = () => {
    return (
      <Card style={cardStyle}>
        {/* flex below controls vertical allignment */}
        <Flex justify="space-between" gap="middle" vertical>
          {/* first name and last name */}

          <TextBoxRow>
            <input
              type="text"
              className="form-control form-control-sm"
              id="FirstName"
              placeholder="First Name"
            />
            <input
              type="text"
              className="form-control form-control-sm"
              id="LastName"
              placeholder="Last Name"
            />
          </TextBoxRow>

          <TextBoxRow>
            <input
              type="text"
              className="form-control form-control-sm"
              id="Email"
              placeholder="Email"
              style={{ width: "200%" }}
            />
          </TextBoxRow>

          <TextBoxRow>
            <input
              type="text"
              className="form-control form-control-sm"
              id="Address"
              placeholder="Address"
              style={{ width: "50%" }}
            />
            <input
              type="text"
              className="form-control form-control-sm"
              id="Area"
              placeholder="Area"
            />
            <input
              type="text"
              className="form-control form-control-sm"
              id="Governate"
              placeholder="Governate"
            />
          </TextBoxRow>
          <TextBoxRow>
            <input
              type="text"
              className="form-control form-control-sm"
              id="Number"
              placeholder="Phone Number"
            />
          </TextBoxRow>

          <TextBoxRow>
            Are you a Doctor?
            <Form.Item>
              <Select
                defaultValue="Donor type"
                className="defaultValue"
                onChange={handleTypeChange}
              >
                <Select.Option value="Regular donor">
                  Regular donor
                </Select.Option>
                <Select.Option value="Doctor">Doctor</Select.Option>
                <Select.Option value="Teacher">Teacher</Select.Option>
              </Select>
            </Form.Item>
            {showUploadButton && (
              <div className="mb-3">
                <input type="file" id="file-upload" hidden />
                <label for="file-upload" className="upload-link">
                  <UploadFile
                    fileList={fileList}
                    setFileList={setFileList}
                  ></UploadFile>
                </label>
              </div>
            )}
          </TextBoxRow>

          <TextBoxRow>
            <button
              type="button"
              className="btn btn-lg mb-4 text-white"
              style={{ background: "#9F8C76", marginRight: "10px" }}
              onClick={() => navigate("/Register")}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-lg mb-4 text-white"
              style={{ background: "#9F8C76" }}
              onClick={() => checkNavigateTo()}
            >
              Register
            </button>
          </TextBoxRow>
        </Flex>
      </Card>
    );
  };

  const navigate = useNavigate();

  return (
    <Flex align="center" justify="center">
      <CardContent />
    </Flex>
  );
}

export default RegisterDonor;

{
  // />
  /* <div className="mb-3">
<input
  type="text"
  className="form-control form-control-sm"
  id="Number"
  placeholder="Number"
/>
</div>
<div className="mb-3">

</div>




<div className="divider d-flex align-items-center my-4">

</div> */
}
