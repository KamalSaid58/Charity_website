import React from 'react';
import Buttonstyle from 'react-bootstrap/Button';
import "../App.css";
import { useNavigate } from "react-router-dom";



function Donor(){
const navigate = useNavigate();
const ViewBloodButton = () => {
    return(
    <button
    type="button"
    className="btn btn-lg mb-4 text-white w-1"
    style={{background:"#9F8C76"}}
    onClick={()=>navigate("/ListofBloodDonation")}
  >
    View Blood Donations
  </button>);
  };
    return <ViewBloodButton/>;
}

export default Donor;