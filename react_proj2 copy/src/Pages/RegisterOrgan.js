import React from 'react';
import { useNavigate } from "react-router-dom";

function RegisterOrgan() {

    let input="";
    const navigate = useNavigate();
  return (
    <div className="container p-3 my-1">
      <div className="row">
        <div className="col-4 col-md-6">
          <div className="mb-3">
            <input type="FirstName" className="form-control form-control-sm" id="Username" placeholder="FirstName" />
          </div>
          <div className="mb-3">
            <input type="LastName" className="form-control form-control-sm" id="password" placeholder="LastName" />
          </div>
          <div className="mb-3">
            <input type="Gender" className="form-control form-control-sm" id="Username" placeholder="Gender" />
          </div>
          <div className="mb-3">
            <input type="Email" className="form-control form-control-sm" id="password" placeholder="Email" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control form-control-sm" id="password" placeholder="Password" />
          </div>
          <div className="mb-3">
            <input type="Number" className="form-control form-control-sm" id="Username" placeholder="Number" />
          </div>
          <div className="mb-3">
            <input type="OrganizationName" className="form-control form-control-sm" id="Username" placeholder="OrganizationName" />
          </div>
          <div className="mb-3">
            <input type="OrganizationType" className="form-control form-control-sm" id="password" placeholder="OrganizationType" />
          </div>
          <div className="mb-3">
            <input type="OrganizationAddress" className="form-control form-control-sm" id="password" placeholder="OrganizationAddress" />
          </div>
          <div className="mb-3">
            <input type="Area" className="form-control form-control-sm" id="Username" placeholder="Area" />
          </div>
          <div className="mb-3">
            <input type="Governate" className="form-control form-control-sm" id="password" placeholder="Governate" />
          </div>
          <button type="button" className="btn btn-lg mb-4 text-white" style={{background:"#9F8C76"}} onClick={()=>navigate("/LoginTrial")}>Register</button>
          <div className="divider d-flex align-items-center my-4">
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterOrgan;