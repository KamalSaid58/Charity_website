import React from "react";
import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Admin(){
    const navigate = useNavigate();

    
    return (
    <>
        <div class="row">
            <div class="col-sm-3">
                <div class="card shadow p-3 mb-5 bg-white rounded">
                <h5>AdminDashboard</h5>
                <div class="card-body col-sm-6">
                    
                    <button type="button" className="btn btn-sm mb-2 text-white" style={{background:"#9F8C76"}} onClick={()=>navigate("/ChangePassword")}>Change Passwsord</button>
                    <button type="button" className="btn btn-sm mb-2 text-white" style={{background:"#9F8C76"}} onClick={()=>navigate("/OrganList")}>View Organizations</button>
                    <button type="button" className="btn btn-sm mb-2 text-white" style={{background:"#9F8C76"}} onClick={()=>navigate("/DonorList")}>View Donors</button>
                    <button type="button" className="btn btn-lg mb-4 text-white" style={{background:"#9F8C76", marginRight: '10px'}} onClick={()=>navigate("/LoginTrial")}>Back</button>
                </div>
                </div>
            </div>
        </div>    

    </>);
}

export default Admin;