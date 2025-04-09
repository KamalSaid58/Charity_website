import React from "react";
import { Button, message } from "antd";

const OrganizationLocationGoogle = () => {
  const handleSetLocation = () => {
    message.success("Location has been saved");
  };

  return (
    <div className="container text-center p-3 my-1">
      <h2>Organization Location</h2>
      <div className="map-container d-flex justify-content-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.4828374247077!2d31.235299574158766!3d30.02300281958881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458474801f2136f%3A0x5b7e6b7cbf39dd15!2sChildren%E2%80%99s%20Cancer%20Hospital%20Egypt%2057357!5e0!3m2!1sen!2seg!4v1715428882002!5m2!1sen!2seg"
          width="700"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Button type="primary" onClick={handleSetLocation}>
        Set Location
      </Button>
    </div>
  );
};

export default OrganizationLocationGoogle;
