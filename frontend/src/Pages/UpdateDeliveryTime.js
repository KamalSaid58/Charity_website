import React from "react";
import { Calendar, theme } from "antd";
import { TimePicker } from "antd";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
const UpdateDeliveryTime = () => {
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

      <TimePicker.RangePicker use12Hours format="h:mm a" />
    </div>
  );
};
export default UpdateDeliveryTime;
