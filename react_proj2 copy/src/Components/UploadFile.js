import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
const UploadFile = ({ fileList, setFileList }) => {
  const handleChange = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };

  const handleBeforeUpload = (file) => {
    // Add the file to the fileList without uploading
    setFileList([...fileList, file]);
    return false; // Returning false prevents default upload behavior
  };

  const handleRemove = (file) => {
    // Remove the file from the fileList
    const newFileList = fileList.filter((f) => f !== file);
    setFileList(newFileList);
  };

  const props = {
    beforeUpload: handleBeforeUpload,
    customRequest: () => {}, // Prevent actual upload
    fileList: fileList,
    onChange: handleChange,
    multiple: true,
  };
  return (
    <Upload {...props} fileList={fileList}>
      <Button icon={<UploadOutlined />}>Upload Documents</Button>
    </Upload>
  );
};
export default UploadFile;
