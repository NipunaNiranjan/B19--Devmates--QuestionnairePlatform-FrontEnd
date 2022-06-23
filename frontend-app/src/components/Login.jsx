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
      .catch(
        (err) => console.log(err)
        //alert("Wrong user name or password\n please re-enter the values")
      );
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
          <div ng-app ng-init="checked = false">
            <form className="form-signin" action method="post" name="form">
              <input
                className="form-styling"
                type="text"
                name="username"
                placeholder="User Name"
                required
              />

              <input
                className="form-styling"
                type="password"
                name="password"
                placeholder="Password"
                required
              />

              <div className="btn-animate">
                <a className="btn-signin" href type="button">
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
    // <form className="col-8 offset-2 " onClick={handleSubmit}>
    //   <h3>Login</h3>

    //   <div className="form-group">
    //     <label>Email</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Enter username"
    //       id="username"
    //       value={username}
    //       onChange={(e) => setUserName(e.target.value)}
    //     />
    //   </div>

    //   <div className="form-group">
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       className="form-control"
    //       placeholder="Enter password"
    //       id="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </div>

    //   <button type="submit" className="btn btn-dark btn-lg btn-block">
    //     Login
    //   </button>
    //   <p className="forgot-password text-right">
    //     Not registered <Link to="/register">Register?</Link>
    //   </p>
    // </form>
  );
}

export default Login;
