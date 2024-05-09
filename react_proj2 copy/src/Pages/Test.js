import React, { Children, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Select } from "antd";
import UploadFile from "../Components/UploadFile";
import "../Styles/RegisterDonor.css";
import DonorData from "../DonorReg";
import { Card, Flex, Button } from "antd";
import { Space, Input, Radio, notification, Tooltip } from "antd";

function Test() {
  const [firstName, setFirstName] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleEmptyBox = () => {
    setIsInputFocused(true);
  };
  const handleChange = (value) => {
    setFirstName(value.target.value);
  };
  return (
    <Form.Item
      name="FirstName"
      rules={[{ required: true, message: "Enter your first name" }]}
      validateStatus={!firstName ? "error" : null}
      help={null}
      style={{ marginBottom: 0 }}
    >
      <Tooltip
        title={!firstName ? "e  rrorMessage" : ""}
        visible={(isFormSubmitted || isInputFocused) && !{ firstName }}
      >
        <Input
          type="text"
          className="form-control form-control-sm"
          id="FirstName"
          placeholder="FirstName"
          value={firstName}
          onChange={handleChange}
          onBlur={handleEmptyBox}
          style={{ width: 300 }}
        />
      </Tooltip>
    </Form.Item>
  );
}
export default Test;
