import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    axios
      .post(`api/v1/auth/signin`, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("userRole", res.data.roles[0]);
        localStorage.setItem("userID", res.data.id);

        console.log(res.data.roles[0]);
        //navigate
        if (res.data.roles[0] === "ROLE_ADMIN") {
          navigate("/dashboard/admin");
        } else if (res.data.roles[0] === "ROLE_STUDENT") {
          navigate("/dashboard/student");
        } else if (res.data.roles[0] === "ROLE_TEACHER") {
          navigate("/dashboard/teacher");
        } else {
          alert("something went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("enter correct username or password");
      });
  };

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="body">
      {/* <img className="img" src={Img} alt="" /> */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,700"
        rel="stylesheet"
        type="text/css"
      />
      <div className="container1">
        <div className="frame">
          <div className="nav">
            <ul className="links">
              <br />
              <br />
              <li className="signin-active">Log In here</li>
            </ul>
          </div>
          <div>
            <form className="form-signin" action method="post" name="form">
              <input
                className="form-styling"
                type="text"
                name="username"
                placeholder="User Name"
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />

              <input
                className="form-styling"
                type="password"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="btn-animate">
                <a className="btn-signin" type="submit" onClick={handleSubmit}>
                  Login
                </a>
              </div>
              <br />
              <div className="span-or">or</div>
              <div className="span">New to Questionnaire Platform?</div>
              <div className="btn-animate">
                <a className="btn-signin" type="button" href="/register">
                  Register Now
                </a>
              </div>
            </form>
          </div>
          <br />
          <br />
          {/* <div className="forgot">
            <Link to="/signin/checkmail" style={{ textDecoration: 'none', color: '#6C757D', fontWeight: '500' }}><a href type="button">Forgot your password?</a></Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
