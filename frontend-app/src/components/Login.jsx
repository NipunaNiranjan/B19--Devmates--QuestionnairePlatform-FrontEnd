import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    axios.post(`http://localhost:8080/api/v1/auth/signin`, data).then((res) => {
      console.log(res);
      console.log(res.data);
      localStorage.setItem("token", res.data.accessToken);
    });
  };

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="col-8 offset-2 " onClick={handleSubmit}>
      <h3>Login</h3>

      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter username"
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Login
      </button>
      <p className="forgot-password text-right">
        Not registered <Link to="/register">Register?</Link>
      </p>
    </form>
  );
}

export default Login;
