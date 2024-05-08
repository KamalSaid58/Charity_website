import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Select } from "antd";
import UploadFile from "../Components/UploadFile";
import "../Styles/RegisterDonor.css";
import DonorData from "../DonorReg";
import { Card } from "antd";

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

  const navigate = useNavigate();

  return (
    <Card
      title="Card title"
      bordered={false}
      style={{
        width: 500,
        height: 750,

        display: "flex",
        hoverable: "true",
        background: "grey",
      }}
    >
      <div className="container p-3 my-1">
        <div className="col-4 col-md-6 ">
          <div className="row">
            <div className="mb-3 ">
              <input
                type="text"
                className="form-control form-control-sm"
                id="FirstName"
                placeholder="FirstName"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                id="LastName"
                placeholder="LastName"
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                id="Gender"
                placeholder="Gender"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                id="Email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="Password"
                className="form-control form-control-sm"
                id="Password"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                id="Number"
                placeholder="Number"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                id="Address"
                placeholder="Address"
              />
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
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
            </div>
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

            <div className="divider d-flex align-items-center my-4">
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
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default RegisterDonor;
