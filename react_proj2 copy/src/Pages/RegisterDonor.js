import React, { Children, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Select } from "antd";
import UploadFile from "../Components/UploadFile";
import "../Styles/RegisterDonor.css";
import DonorData from "../DonorReg";
import { Card, Flex } from "antd";
import { Space, Button, Radio } from "antd";

function RegisterDonor() {
  const [fileList, setFileList] = useState([]);

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

  const TextBoxRow = ({ children }) => {
    return <Space>{children}</Space>;
  };

  const CardContent = () => {
    const mo7fazatMasr = [
      { value: "Alexandria", label: "Alexandria" },
      { value: "Aswan", label: "Aswan" },
      { value: "Asyut", label: "Asyut" },
      { value: "Beheira", label: "Beheira" },
      { value: "Beni Suef", label: "Beni Suef" },
      { value: "Cairo", label: "Cairo" },
      { value: "Dakahlia", label: "Dakahlia" },
      { value: "Damietta", label: "Damietta" },
      { value: "Faiyum", label: "Faiyum" },
      { value: "Gharbia", label: "Gharbia" },
      { value: "Giza", label: "Giza" },
      { value: "Ismailia", label: "Ismailia" },
      { value: "Kafr El Sheikh", label: "Kafr El Sheikh" },
      { value: "Luxor", label: "Luxor" },
      { value: "Matrouh", label: "Matrouh" },
      { value: "Minya", label: "Minya" },
      { value: "Monufia", label: "Monufia" },
      { value: "New Valley", label: "New Valley" },
      { value: "North Sinai", label: "North Sinai" },
      { value: "Port Said", label: "Port Said" },
      { value: "Qalyubia", label: "Qalyubia" },
      { value: "Qena", label: "Qena" },
      { value: "Red Sea", label: "Red Sea" },
      { value: "Sharqia", label: "Sharqia" },
      { value: "Sohag", label: "Sohag" },
      { value: "South Sinai", label: "South Sinai" },
      { value: "Suez", label: "Suez" },
    ];

    const [gender, setGender] = useState("");

    const [selectedGover, setselectedGover] = useState(undefined);
    const handleGoverChange = (value) => {
      setselectedGover(value);
    };
    const [showUploadButton, setShowUploadButton] = useState(false);
    const [selectedDonorType, setselectedDonorType] = useState(undefined);
    const handleDonorTypeChange = (value) => {
      setselectedDonorType(value);
      setShowUploadButton(value === "Doctor" || value === "Teacher");
    };
    return (
      <Card style={{ width: 400 }} bordered="true" title="Create Donor Account">
        {/* flex below controls vertical allignment */}
        <Flex justify="space-between" gap="middle" vertical>
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
            <Radio.Group
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <Radio.Button value="start" style={{ width: 175 }}>
                Male
              </Radio.Button>
              <Radio.Button value="end" style={{ width: 175 }}>
                Female
              </Radio.Button>
            </Radio.Group>
          </TextBoxRow>

          <TextBoxRow>
            <input
              type="text"
              className="form-control form-control-sm"
              id="Email"
              placeholder="Email"
              style={{ width: 350 }}
            />
          </TextBoxRow>
          <TextBoxRow>
            <input
              type="Password"
              className="form-control form-control-sm"
              id="Password"
              placeholder="Password"
              style={{ width: 350 }}
            />
          </TextBoxRow>
          <TextBoxRow>
            <Select
              className="defaultValue"
              showSearch
              value={selectedGover}
              placeholder="City"
              onChange={handleGoverChange}
              style={{ width: 135 }}
            >
              {mo7fazatMasr.map((gover) => (
                <Select.Option key={gover.value} value={gover.value}>
                  {gover.label}
                </Select.Option>
              ))}
            </Select>

            <input
              type="text"
              className="form-control form-control-sm"
              id="Area"
              placeholder="Area"
              style={{ width: 206 }}
            />
          </TextBoxRow>
          <TextBoxRow>
            <input
              type="text"
              className="form-control form-control-sm"
              id="Address"
              placeholder="Address"
              style={{ width: 350 }}
            />
          </TextBoxRow>
          <TextBoxRow>
            <input
              type="text"
              className="form-control form-control-sm"
              id="Number"
              placeholder="Phone Number"
              style={{ width: 350 }}
            />
          </TextBoxRow>

          <TextBoxRow></TextBoxRow>
          <TextBoxRow>
            <Select
              className="defaultValue"
              placeholder="Profession"
              value={selectedDonorType}
              onChange={handleDonorTypeChange}
              style={{ width: 168 }}
            >
              <Select.Option value="Regular donor">None</Select.Option>
              <Select.Option value="Doctor">Doctor</Select.Option>
              <Select.Option value="Teacher">Teacher</Select.Option>
            </Select>

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
