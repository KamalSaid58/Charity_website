import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="container p-3 my-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-lg btn-primary d-block w-100"
              onClick={()=>navigate("/RegisterDonor")}
            >
              Register Donor
            </button>
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-lg btn-primary d-block w-100"
              onClick={()=>navigate("/RegisterOrgan")}
            >
              Register Organization
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
