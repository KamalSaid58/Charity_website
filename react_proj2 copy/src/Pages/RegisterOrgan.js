import React from 'react';
import { useNavigate } from "react-router-dom";
import UploadFile from "../Components/UploadFile"
import "../Styles/RegisterOrgan.css"

function RegisterOrgan() {
  function checkNavigateTo() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    let isEmpty = false;
  
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isEmpty = true;
        return;
      }
    });
    const fileInput = document.getElementById('file-upload');
    if (!fileInput.files.length) {
      isEmpty = true;
    }
  
    if (isEmpty) {
      alert("One of the inputs are empty");
    } else {
      alert("You have been accepted");
      navigate("/LoginTrial");
    }
  }
  

    const navigate = useNavigate();
  return (
    <div className="container p-3 my-1">
      <div className="row">
        <div className="col-4 col-md-6">
          <div className="mb-3">
            <input type="text" className="form-control form-control-sm" id="FirstName" placeholder="FirstName" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control form-control-sm" id="LastName" placeholder="LastName" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control form-control-sm" id="Gender" placeholder="Gender" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control form-control-sm" id="Email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="Password" className="form-control form-control-sm" id="Password" placeholder="Password" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control form-control-sm" id="Number" placeholder="Number" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control form-control-sm" id="OrganizationName" placeholder="OrganizationName" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control form-control-sm" id="OrganizationType" placeholder="OrganizationType" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control form-control-sm" id="OrganizationAddress" placeholder="OrganizationAddress" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control form-control-sm" id="Area" placeholder="Area" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control form-control-sm" id="Governate" placeholder="Governate" />
          </div>

          <div className="mb-3">
          <input type="file" id="file-upload" hidden />
            <label for="file-upload" className="upload-link">
              <UploadFile></UploadFile>
            </label>
          </div>
          

          


          <div className="divider d-flex align-items-center my-4">
            <button type="button" className="btn btn-lg mb-4 text-white" style={{background:"#9F8C76", marginRight: '10px'}} onClick={()=>navigate("/Register")}>Back</button>
            <button type="button" className="btn btn-lg mb-4 text-white" style={{background:"#9F8C76"}} onClick={()=>checkNavigateTo()}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterOrgan;