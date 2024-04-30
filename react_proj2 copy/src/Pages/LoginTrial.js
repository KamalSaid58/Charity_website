import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function LoginTrial() {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function check(username,password){
    if(password!=="123"){
        alert("Incorrect password.Try again");
    }else
    {
        if(username==="Admin"){
            navigate("/Admin");
        }else if(username==="Donor"){
            navigate("/Donor");
        }else if(username==="Organ")
            navigate("/Organ");
        else{
            navigate("/");
        }
    }
  }
  
  return (
    
    <div className="container p-3 my-3">
      <div className="row">
        <div className="col-4 col-md-6">
          <div className="mb-3">
            <input type="text" className="form-control form-control-sm" id="Username" placeholder="Username" value={username} onChange={handleUsernameChange} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control form-control-sm" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <a href="!#">Forgot password?</a>
          </div>
          <button type="button" className="btn btn-lg mb-4 text-white" style={{background:"#9F8C76"}} onClick={()=>check(username,password)}>Log in</button>
          <div className="divider d-flex align-items-center my-4">
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginTrial;