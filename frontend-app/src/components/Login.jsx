import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    axios
      .post(`http://localhost:8080/api/v1/auth/signin`, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.accessToken);

        console.log(res.data.roles[0]);
        //navigate
        if (res.data.roles[0] === "ROLE_ADMIN") {
          navigate("/dashboard/admin/viewusers");
        } else if (res.data.roles[0] === "ROLE_STUDENT") {
          //navigate("/dashboard/admin/viewusers");
        } else if (res.data.roles[0] === "ROLE_TEACHER") {
          //navigate("/dashboard/admin/viewusers");
        } else {
          alert("something went wrong");
        }
      })
      .catch(
        (err) => console.log(err)
        //alert("Wrong user name or password\n please re-enter the values")
      );
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
