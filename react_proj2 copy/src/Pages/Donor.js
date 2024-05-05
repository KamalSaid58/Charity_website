// Donor.js
import React from 'react';
import { useNavigate } from "react-router-dom";

function Donor() {
  const navigate = useNavigate();

  const handleViewRequestedItemsClick = () => {
    navigate("/ViewReqDon");
  };

  const handleViewListOfClothReq= () => {
    navigate("/ViewListOfClothReq");
  };
  const handleViewSchoolSupp= () => {
    navigate("/SchoolSupp");
  };

  

  return (
    <div>
      <button
        type="button"
        className="btn btn-lg mb-4 text-white w-1"
        style={{ background: "#9F8C76" }}
        onClick={handleViewRequestedItemsClick}
      >
        View Requested Donation Items
      </button>
      <button
        type="button"
        className="btn btn-lg mb-4 text-white w-1"
        style={{ background: "#9F8C76", marginLeft: "10px" }} // Add margin-left for spacing
        onClick={handleViewListOfClothReq}
      >
         View ListOf Cloth Req
      </button>
      <button
        type="button"
        className="btn btn-lg mb-4 text-white w-1"
        style={{ background: "#9F8C76", marginLeft: "10px" }} // Add margin-left for spacing
        onClick={handleViewSchoolSupp}
      >
         View School Supp
      </button>
      
      
    </div>
  );
}

export default Donor;
