import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadFile from "../Components/UploadFile";
import OrgData from "../OrgReg";
import {
  Card,
  Flex,
  Button,
  Space,
  Input,
  Radio,
  notification,
  Tooltip,
  Form,
  Select,
} from "antd";
import "../Styles/RegisterOrgan.css";
const TextBoxRow = ({ children }) => {
  return <Space>{children}</Space>;
};

const SingleTextBox = ({
  formName,
  errorMessage,
  inputPlaceHolder,
  value,
  onChangeMethod,
  textboxSize,
  isFormSubmitted,
  setIsInputFocused,
}) => {
  const handleEmptyBox = (event) => {
    setIsInputFocused(true);
    onChangeMethod(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onChangeMethod(event.target.value);
    }
  };
  return (
    <Form.Item
      name={formName}
      rules={[{ required: true, message: errorMessage }]}
      validateStatus={isFormSubmitted && !value ? "error" : null}
      help={null}
      style={{ marginBottom: 0 }}
    >
      <Tooltip
        title={isFormSubmitted && !value ? errorMessage : ""}
        // visible={(isFormSubmitted || isInputFocused) && !value}
      >
        <Input
          type="text"
          className="form-control form-control-sm"
          id={formName}
          placeholder={inputPlaceHolder}
          value={value}
          onChange={(e) => onChangeMethod(e.target.value)}
          onBlur={handleEmptyBox}
          onKeyDown={handleKeyDown}
          style={{ width: textboxSize }}
        />
      </Tooltip>
    </Form.Item>
  );
};

const CardContent = () => {
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("male");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [selectedOrganizationType, setselectedOrganizationType] =
    useState(undefined);
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState(undefined);

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

  function checkNavigateTo() {
    // const fileInput = document.getElementById("file-upload");
    // if (!fileInput.files.length) {
    //   isEmpty = true;
    // }

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

    const inputs = document.querySelectorAll(
      'input[type="text"], input[type="password"]'
    );

    let isEmpty = false;

    OrgData.push({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      password: "",
      number: "",
      OrgName: "",
      OrgType: "",
      OrgAddress: "",
      Area: "",
      Goveernate: "",
      pdf: fileList,
    });
    if (
      gender === "" ||
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      city === undefined ||
      area === "" ||
      address === "" ||
      phone === "" ||
      organizationName === "" ||
      selectedOrganizationType === ""
    ) {
      isEmpty = true;
    }

    if (isEmpty) {
      unfilledDataNotification();
    } else {
      navigate("/LoginTrial", { state: { Register: true } });
    }
  }
  const handleGoverChange = (value) => {
    setCity(value);
  };

  const handleTypeChange = (value) => {
    setselectedOrganizationType(value);
  };

  const [showUploadButton, setShowUploadButton] = useState(false);

  const useCheckContentAndRedirect = (values) => {
    setIsFormSubmitted(true);
    checkNavigateTo();
  };

  return (
    <>
      {contextHolder}
      <Card
        style={{ width: 400, marginTop: 25 }}
        bordered="true"
        title="Create Organization Account"
      >
        {/* flex below controls vertical allignment */}
        <Flex justify="space-between" gap={15} vertical>
          <TextBoxRow>
            <SingleTextBox
              formName="FirstName"
              errorMessage="Enter your first name"
              inputPlaceHolder="First Name"
              value={firstName}
              onChangeMethod={setFirstName}
              isFormSubmitted={isFormSubmitted}
              setIsInputFocused={setIsInputFocused}
            ></SingleTextBox>

            <SingleTextBox
              formName="LastName"
              errorMessage="Enter your last name"
              inputPlaceHolder="Last Name"
              value={lastName}
              onChangeMethod={setLastName}
              isFormSubmitted={isFormSubmitted}
              setIsInputFocused={setIsInputFocused}
            />
          </TextBoxRow>

          <TextBoxRow>
            <Tooltip title={!gender ? "Select a gender" : ""}>
              <Radio.Group
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <Radio.Button value="male" style={{ width: 175 }}>
                  Male
                </Radio.Button>
                <Radio.Button value="female" style={{ width: 175 }}>
                  Female
                </Radio.Button>
              </Radio.Group>
            </Tooltip>
          </TextBoxRow>

          <TextBoxRow>
            <SingleTextBox
              formName="Email"
              errorMessage="Enter an Email"
              inputPlaceHolder="Email"
              value={email}
              onChangeMethod={setEmail}
              textboxSize={350}
              isFormSubmitted={isFormSubmitted}
              setIsInputFocused={setIsInputFocused}
            />
          </TextBoxRow>
          <TextBoxRow>
            <SingleTextBox
              formName="Password"
              errorMessage="Enter a password"
              inputPlaceHolder="Password"
              value={password}
              onChangeMethod={setPassword}
              textboxSize={350}
              isFormSubmitted={isFormSubmitted}
              setIsInputFocused={setIsInputFocused}
            />
          </TextBoxRow>
          <SingleTextBox
            formName="phoneNumber"
            errorMessage="Enter your number"
            inputPlaceHolder="Phone Number"
            value={phone}
            onChangeMethod={setPhone}
            textboxSize={350}
            isFormSubmitted={isFormSubmitted}
            setIsInputFocused={setIsInputFocused}
          />
          <TextBoxRow>
            <SingleTextBox
              formName="organizationName"
              errorMessage="Enter the organization name"
              inputPlaceHolder="Organization Name"
              value={organizationName}
              onChangeMethod={setOrganizationName}
              isFormSubmitted={isFormSubmitted}
              setIsInputFocused={setIsInputFocused}
            />
            <Form.Item
              name={"selectedOrganizationType"}
              rules={[{ required: true, message: "Select Organization Type" }]}
              validateStatus={
                isFormSubmitted && !selectedOrganizationType ? "error" : null
              }
              help={null}
              style={{ marginBottom: 0 }}
            >
              <Tooltip
                title={
                  isInputFocused && !selectedOrganizationType
                    ? "Select an Organization Type"
                    : ""
                }
              >
                <Select
                  className="defaultValue"
                  placeholder="Organization Type"
                  value={selectedOrganizationType}
                  onChange={handleTypeChange}
                  style={{ width: 161 }}
                >
                  <Select.Option value="Charity">Charity</Select.Option>
                  <Select.Option value="Hospital">Hospital</Select.Option>
                  <Select.Option value="Place of Worship">
                    Place of Worship
                  </Select.Option>
                  <Select.Option value="Orphanage">Orphanage</Select.Option>
                  <Select.Option value="Public School">
                    Public School
                  </Select.Option>
                </Select>
              </Tooltip>
            </Form.Item>
          </TextBoxRow>
          <TextBoxRow>
            <Form.Item
              name={"City"}
              rules={[{ required: true, message: "Select a city" }]}
              validateStatus={isFormSubmitted && !city ? "error" : null}
              help={null}
              style={{ marginBottom: 0, display: "flex" }}
            >
              <Tooltip title={isInputFocused && !city ? "Select a city" : ""}>
                <Select
                  type="text"
                  className="defaultValue"
                  showSearch
                  value={city}
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
              </Tooltip>
            </Form.Item>
            <SingleTextBox
              formName="Area"
              errorMessage="Enter your area"
              inputPlaceHolder="Area"
              value={area}
              onChangeMethod={setArea}
              textboxSize={206}
              isFormSubmitted={isFormSubmitted}
              setIsInputFocused={setIsInputFocused}
            />
          </TextBoxRow>
          <TextBoxRow>
            <SingleTextBox
              formName="Address"
              errorMessage="Enter your Address"
              inputPlaceHolder="Address"
              value={address}
              onChangeMethod={setAddress}
              textboxSize={350}
              isFormSubmitted={isFormSubmitted}
              setIsInputFocused={setIsInputFocused}
            />
          </TextBoxRow>
          <TextBoxRow>
            {showUploadButton && (
              <>
                <input type="file" id="file-upload" hidden />
                <label for="file-upload" className="upload-link">
                  <UploadFile
                    fileList={fileList}
                    setFileList={setFileList}
                  ></UploadFile>
                </label>
              </>
            )}
          </TextBoxRow>

          <TextBoxRow>
            <p>Organization proof: </p>
            <div className="mb-3">
              <input type="file" id="file-upload" hidden />
              <label for="file-upload" className="upload-link">
                <UploadFile
                  fileList={fileList}
                  setFileList={setFileList}
                ></UploadFile>
              </label>
            </div>
          </TextBoxRow>

          <TextBoxRow>
            <Space size={200}>
              <Button onClick={() => navigate("/Register")}>Back</Button>
              <Button
                type="primary"
                // onClick={() => checkNavigateTo()}
                onClick={useCheckContentAndRedirect}
              >
                Register
              </Button>
            </Space>
          </TextBoxRow>
        </Flex>
      </Card>
    </>
  );
};

function RegisterOrgan() {
  const navigate = useNavigate();
  return (
    <Flex align="center" justify="center">
      <CardContent />
    </Flex>
  );
}

export default RegisterOrgan;
