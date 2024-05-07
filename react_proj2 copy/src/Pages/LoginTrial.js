import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginTrial.css';

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

  const handleLogin = () => {
    if (password !== '123') {
      alert('Incorrect password. Please try again.');
    } else {
      switch (username) {
        case 'Admin':
          navigate('/Admin');
          break;
        case 'Donor':
          navigate('/Donor');
          break;
        case 'Organ':
          navigate('/Organ');
          break;
        default:
          navigate('/');
      }
    }
  };

  const handleBack = () => {
    navigate('/Options'); // Redirect to the home page ("/")
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Welcome Back!</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="Username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-check mb-4">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-lg btn-primary"
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <div className="text-center mt-3"> {/* Added Bootstrap class text-center and mt-3 for margin top */}
        <button
  type="button"
  className="btn btn-sm btn-secondary"
  onClick={handleBack}
  style={{ backgroundColor: '#007bff', color: '#fff' }}
>
  Back
</button>




        </div>
      </div>
    </div>
  );
}

export default LoginTrial;
