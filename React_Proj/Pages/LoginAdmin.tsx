import Button from "react-bootstrap/Button";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const navigate = useNavigate();

  return (
    <Home>
      <head>
        <link rel="stylesheet" href="Login.css" />
      </head>
      <h1>LOGIN</h1>
      <div className="input-group flex-nowrap">
        <div className="input-group-prepend">
          <span className="input-group-text" id="addon-wrapping">
            Username
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        ></input>
      </div>
      <div className="input-group flex-nowrap">
        <div className="input-group-prepend">
          <span className="input-group-text" id="addon-wrapping">
            Password
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="addon-wrapping"
        ></input>
      </div>
      <Button
        variant="primary"
        size="sm"
        active
        onClick={() => navigate("/home")}
      >
        Login
      </Button>
      <Button
        variant="secondary"
        size="sm"
        active
        onClick={() => navigate("/home")}
      >
        Back
      </Button>
    </Home>
  );
}
export default LoginAdmin;
