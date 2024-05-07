import React from 'react';
import { Calendar, theme } from 'antd';
import { TimePicker } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const items = [
    {
      label: 'Truck',
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'Car',
      key: '2',
      icon: <UserOutlined />,
    },
    {
      label: 'Motorcycle',
      key: '3',
      icon: <UserOutlined />,
      danger: true,
    },
  ];
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };


const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
const ViewDeliveryDetails = () => {
    
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  // TODO add error message for inserting wrong time
  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />

  <TimePicker.RangePicker use12Hours format="h:mm a"/>
  <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Choose delivery option
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>

    <h1>feeh ETA fe el mawdoo3</h1>
    </div>
  );
};
export default ViewDeliveryDetails;
