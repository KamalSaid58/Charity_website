import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup, Form, CardBody, Row, Col } from "react-bootstrap";

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("account-info");

  const TabLinks = ({ activeTab, setActiveTab }) => {
    return (
      <div className="list-group list-group-flush account-settings-links">
        <a
          className={`list-group-item list-group-item-action ${
            activeTab === "account-info" ? "active" : ""
          }`}
          data-toggle="list"
          href="#account-info"
          onClick={() => setActiveTab("account-info")}
        >
          Account Info
        </a>
        <a
          className={`list-group-item list-group-item-action ${
            activeTab === "account-change-password" ? "active" : ""
          }`}
          data-toggle="list"
          href="#account-change-password"
          onClick={() => setActiveTab("account-change-password")}
        >
          Change password
        </a>
        <a
          className={`list-group-item list-group-item-action ${
            activeTab === "account-change-address" ? "active" : ""
          }`}
          data-toggle="list"
          href="#account-general"
          onClick={() => setActiveTab("account-change-address")}
        >
          Change address
        </a>
        <a
          className={`list-group-item list-group-item-action `}
          data-toggle="list"
          href="#account-general"
          onClick={() => alert("All your changes have been saved successfuly")}
        >
          Save
        </a>
      </div>
    );
  };

  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <TabLinks activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="col-md-9">
            <TabContent activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

const TabContent = ({ activeTab, setActiveTab }) => {
  switch (activeTab) {
    case "account-info":
      return <InfoTab />;
    case "account-change-password":
      return (
        <div>
          <ChangePasswordTab setActiveTab={setActiveTab} />
        </div>
      );
    case "account-change-address":
      return (
        <div>
          <ChangeAddressTab setActiveTab={setActiveTab} />
        </div>
      );
      return null;
  }
};

const InfoTab = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Changes saved successfully");
  };

  const handleCancel = (event) => {
    event.preventDefault();
    alert("No changes occured");
  };
  return (
    <div className="tab-pane active show" id="account-general">
      <div className="card-body media align-items-center">
        <div className="media-body ml-4"></div>
      </div>
      <hr className="border-light m-0" />
      <Row>
        <Col>
          <CardBody className="pb-2">
            <Form.Label>First Name</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                name="first_name"
                defaultValue="Kamal"
              />
            </InputGroup>
          </CardBody>
        </Col>
        <Col>
          <CardBody className="pb-2">
            <Form.Label>Last Name</Form.Label>
            <InputGroup>
              <Form.Control type="text" name="last_name" defaultValue="Said" />
            </InputGroup>
          </CardBody>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardBody className="pb-2">
            <Form.Label>E-mail</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                name="email"
                defaultValue="Kamalsk@yahoo.com"
              />
            </InputGroup>
          </CardBody>
        </Col>
        <Col>
          <CardBody className="pb-2">
            <Form.Label>Phone Number</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                name="phone"
                defaultValue="123-456-7890"
              />
            </InputGroup>
          </CardBody>
        </Col>
      </Row>
      <div className="text-right mt-3">
        <button
          type="submit"
          className="btn btn-primary m-3"
          onClick={(e) => handleSubmit(e)}
        >
          Save changes
        </button>
        <button
          type="button"
          className="btn btn-default"
          onClick={(e) => handleCancel(e)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
const ChangePasswordTab = ({ setActiveTab }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const currentPassword = document
      .querySelector('input[name="currentPassword"]')
      .value.trim();
    const newPassword = document
      .querySelector('input[name="newPassword"]')
      .value.trim();
    const repeatNewPassword = document
      .querySelector('input[name="repeatNewPassword"]')
      .value.trim();

    if (!currentPassword || !newPassword || !repeatNewPassword) {
      alert("Please fill in all the fields");
      return;
    } else if (newPassword !== repeatNewPassword) {
      alert("Passwords do not match");
      return;
    } else {
      alert("Password changed successfully");
      setActiveTab("account-info");
    }
  };
  const handleCancel = (event) => {
    event.preventDefault();
    alert("No changes occured");
    setActiveTab("account-info");
  };

  return (
    <div className="tab-pane" id="account-info">
      <Form>
        <CardBody className="pb-2">
          <Form.Label>Current password</Form.Label>
          <InputGroup>
            <Form.Control type="password" name="currentPassword" />
          </InputGroup>

          <Form.Label>New password</Form.Label>
          <InputGroup>
            <Form.Control type="password" name="newPassword" />
          </InputGroup>

          <Form.Label>Repeat new password</Form.Label>
          <InputGroup>
            <Form.Control type="password" name="repeatNewPassword" />
          </InputGroup>
        </CardBody>
        <div className="text-right mt-3">
          <button
            type="submit"
            className="btn btn-primary m-3"
            onClick={(e) => handleSubmit(e)}
          >
            Save changes
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={(e) => handleCancel(e)}
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
};
const ChangeAddressTab = ({ setActiveTab }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const city = document.querySelector('input[name="city"]').value.trim();
    const street = document.querySelector('input[name="street"]').value.trim();
    const building = document
      .querySelector('input[name="building"]')
      .value.trim();
    const floor = document.querySelector('input[name="floor"]').value.trim();

    if (!city || !street || !building || !floor) {
      alert("Please fill in all the fields");
      return;
    }
    alert("Changes saved successfully");
    setActiveTab("account-info");
  };
  const handleCancel = (event) => {
    event.preventDefault();
    alert("No changes occured");
    setActiveTab("account-info");
  };
  return (
    <div className="tab-pane" id="account-info">
      <Form>
        <Row>
          <Col>
            <CardBody className="pb-2">
              <Form.Label>City</Form.Label>
              <InputGroup>
                <Form.Control type="text" name="city" defaultValue="Cairo" />
              </InputGroup>
            </CardBody>
          </Col>
          <Col>
            <CardBody className="pb-2">
              <Form.Label>Street</Form.Label>
              <InputGroup>
                <Form.Control type="text" name="street" defaultValue="Gezira" />
              </InputGroup>
            </CardBody>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardBody className="pb-2">
              <Form.Label>Building</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  name="building"
                  defaultValue="Villa 403"
                />
              </InputGroup>
            </CardBody>
          </Col>
          <Col>
            <CardBody className="pb-2">
              <Form.Label>Floor</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  name="floor"
                  defaultValue="1st Floor"
                />
              </InputGroup>
            </CardBody>
          </Col>
        </Row>
        <div className="text-right mt-3">
          <button
            type="submit"
            className="btn btn-primary m-3"
            onClick={(e) => handleSubmit(e)}
          >
            Save changes
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={(e) => handleCancel(e)}
          >
            Cancel
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AccountSettings;
