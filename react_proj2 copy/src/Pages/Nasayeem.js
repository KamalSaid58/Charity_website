import React, { useState, useRef } from 'react';
import { Button,Image, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import image from './Nasyamphoto.png';
import "./Image.css";

const src = image;

const Nasayeem = () => {

  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate("/ListofBloodDonation");
  };
  const onDownload = () => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };
  return (
    <div className="container">
      <h2>Nasayeem Hospital</h2>
    <Image
      width={900}
      src={src}
      preview={{
        toolbarRender: (
          _,
          {
            transform: { scale },
            actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
          },
        ) => (
          <Space size={12} className="toolbar-wrapper">
            <DownloadOutlined onClick={onDownload} />
            <SwapOutlined rotate={90} onClick={onFlipY} />
            <SwapOutlined onClick={onFlipX} />
            <RotateLeftOutlined onClick={onRotateLeft} />
            <RotateRightOutlined onClick={onRotateRight} />
            <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
            <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
            
          </Space>
          
        ),
      }}
    />
    <Button
    type="button"
    className="btn btn-lg mb-6 text-white w-20 d-flex justify-content-center align-items-center"
    style={{ background: "#9F8C76" }}
    onClick={handleBackButtonClick}
    align="center"
  >
    Back
  </Button>
    </div >
  );
};

export default Nasayeem;
