import React, { useState } from "react";
import { ReactNode } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function ChangePassword(){
    const navigate = useNavigate();

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handlePassword1Change = (event) => {
        setPassword1(event.target.value);
      };

    const handlePassword2Change = (event) => {
        setPassword2(event.target.value);
    };


    function navigateTo(password1,password2){
        if(password1===password2){
            alert("your password has been updated");
            navigate("/Admin ");
        }else{
            alert("Confirm password correctly.Try again");
            navigate("/ChangePassword ");
        }
        
      }
      let pass1="";
      let pass2="";
    return (
    <>
        <div className="container p-3 my-1">
            <div className="row">
                <div className="col-4 col-md-6">
                    <h2>Change Password</h2>
                    <div className="mb-3">
                        <input type="Password" className="form-control form-control-sm" id="Pass1" placeholder="Password" value={password1} onChange={handlePassword1Change} />
                    </div>
                    <div className="mb-3">
                        <input type="Password" className="form-control form-control-sm" id="Pass1" placeholder="Confirm password" value={password2} onChange={handlePassword2Change}/>
                    </div>

                    <div className="divider d-flex align-items-center my-4">
                    <button type="button" className="btn btn-lg mb-4 text-white" style={{background:"#9F8C76", marginRight: '10px'}} onClick={()=>navigate("/Admin")}>Back</button>
                    <button type="button" className="btn btn-lg mb-4 text-white" style={{background:"#9F8C76"}} onClick={()=>navigateTo(password1,password2)}>Confirm</button>




                    </div>
                </div>   
            </div> 
        </div>  


    </>);
}

export default ChangePassword;