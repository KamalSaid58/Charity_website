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
              className="btn btn-lg mb-4 text-white w-100" 
              style={{background:"#9F8C76"}}
              onClick={()=>navigate("/RegisterDonor")}
            >
              Register Donor
            </button>
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-lg mb-4 text-white w-100" 
              style={{background:"#9F8C76"}}
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
