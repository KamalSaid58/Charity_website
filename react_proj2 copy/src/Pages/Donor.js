// Donor.js
import React from 'react';
import { useNavigate } from "react-router-dom";

function Donor() {
  const navigate = useNavigate();

  const handleViewOrganizationsClick = () => {
    navigate("/ViewOrganizationDonor");
  };

  const handleViewPendingDonationsClick = () => {
    navigate("/ViewPendingDonations");
  };

  const handleUpdateDeliveryClick = () => {
    navigate("/ViewDeliveryDetails");
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-lg mb-4 text-white w-1"
        style={{ background: "#9F8C76" }}
        onClick={handleViewOrganizationsClick}
      >
        View Organizations
      </button>

      <button
        type="button"
        className="btn btn-lg mb-4 text-white w-1"
        style={{ background: "#9F8C76" }}
        onClick={handleViewPendingDonationsClick}
      >
        View Pending Donations
      </button>
     
      <button
        type="button"
        className="btn btn-lg mb-4 text-white w-1"
        style={{ background: "#9F8C76" }}
        onClick={handleUpdateDeliveryClick}
      >
        Update Delivery Options
      </button>
      
      
    </div>
  );
}

export default Donor;
