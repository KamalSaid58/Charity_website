import React from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css"

function RegisterDonor() {
  function navigateTo(){
    alert("you have been accepted");
    navigate("/Home");
  }

    const navigate = useNavigate();
  return (
    <div className="container p-3 my-1">
      <div className="row">
        <div className="col-4 col-md-6">
          <div className="mb-3">
            <input type="FirstName" className="form-control form-control-sm" id="FirstName" placeholder="FirstName" />
          </div>
          <div className="mb-3">
            <input type="LastName" className="form-control form-control-sm" id="LastName" placeholder="LastName" />
          </div>
          <div className="mb-3">
            <input type="Gender" className="form-control form-control-sm" id="Gender" placeholder="Gender" />
          </div>
          <div className="mb-3">
            <input type="Email" className="form-control form-control-sm" id="Email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="Password" className="form-control form-control-sm" id="Password" placeholder="Password" />
          </div>
          <div className="mb-3">
            <input type="Number2" className="form-control form-control-sm" id="Number" placeholder="Number" />
          </div>
          <div className="mb-3">
            <input type="Address" className="form-control form-control-sm" id="Address" placeholder="Address" />
          </div>
          <div className="mb-3">
            <input type="Area" className="form-control form-control-sm" id="Area" placeholder="Area" />
          </div>
          <div className="mb-3">
            <input type="Governate" className="form-control form-control-sm" id="Governate" placeholder="Governate" />
          </div>

          <div className="mb-3">
          <div className="input-group">
            <select className="form-control form-control-sm" id="Donortype" placeholder="Donor type" defaultValue="Donor type">
              <option value="option1">Regular donor</option>
              <option value="option2">Teacher</option>
              <option value="option3">Doctor</option>
            </select>
            <span className="input-group-text fa-caret-down"></span>
            </div>
          </div>
          <div className="mb-3">
          <input type="file" id="file-upload" hidden />
            <label for="file-upload" class="upload-link">
              Upload Documents
            </label>
          </div>


          

          <button type="button" className="btn btn-lg mb-4 text-white" style={{background:"#9F8C76"}} onClick={()=>navigateTo()}>Register</button>
          <div className="divider d-flex align-items-center my-4">
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterDonor;