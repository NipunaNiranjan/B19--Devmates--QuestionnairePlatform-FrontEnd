import React, { useState } from "react";
import "./form.css";

import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [redirect, setRedirect] = useState(false);
  // const [firstName, setFirstName] = useState("");

  const [msg, setMsg] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const SignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/signin", {
        username: username,
        password: password,
      });

      console.log(res);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("userRole", res.data.roles[0]);
      localStorage.setItem("userID", res.data.id);

      console.log(res.data.roles[0]);
      if (res.data.roles[0] === "ROLE_ADMIN") {
        navigate("/dashboard/admin");
      } else if (res.data.roles[0] === "ROLE_STUDENT") {
        navigate("/dashboard/student");
      } else if (res.data.roles[0] === "ROLE_TEACHER") {
        navigate("/dashboard/teacher");
      } else {
        alert("something went wrong");
      }
      //   setUser(res.data);
      //   console.log(user) ;
      //   localStorage.setItem("accessToken", user.accessToken);
      //   const token = localStorage.getItem("accessToken");
      //   console.log(token);
      //  console.log(user.id);

      //  nav("/register") ;

      // await axios.get(`http://localhost:8080/api/v1/auth/codingChallenges`
      // // ,
      // //         { header: {Authorization: `Bearer ${token}` }},
      // //         { withCredentials: true}
      //         )

      //   .then((res) => {
      //       //setUsername(res.data.username);
      //       console.log(res) ;
      //   })
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
        console.log(error.response.data);
        alert("enter correct username or password");
      }
    }
  };

  //   const SignIn = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const loginResponse = await axios.post(`http://localhost:8080/api/v1/auth/signin`, {
  //         Username,
  //         password
  //       }) //, { withCredentials: true }

  //     //   console.log(loginResponse)
  //     alert("User added..");

  //       if (loginResponse) {
  //         localStorage.setItem("auth-token", loginResponse.data.accessToken);
  //         const e = jwtDecode(loginResponse.data.accessToken);
  //         localStorage.setItem("id", e.id);

  //        const token = localStorage.getItem("auth-token");
  //         await axios.get(`http://localhost:8080/api/v1/auth/`, { headers: { Authorization: `Bearer ${token}` } }) // , { withCredentials: true }
  //           .then((res) => {
  //             setFirstName(res.data.username);
  //             localStorage.setItem('name', res.data.username)
  //             localStorage.setItem('role', res.data.roles)
  //              alert("User added..");
  //           })
  //           .catch((err) => {
  //             // console.log(err)
  //              alert("User added..");
  //             console.log("this is GET error" + err)
  //           })
  //       }
  //     setRedirect(true)

  //     }
  //     catch (err) {
  //       console.log(err);
  //       setRedirect(false)
  //     }

  //   }

  //   if (redirect) {
  //     return <Navigate to="/register" />;
  //   }

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
              <li className="signin-active" style={{ color: "white" }}>
                Log In here
              </li>
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
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />

              <input
                className="form-styling"
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <div className="btn-animate">
                <a className="btn-signin" href type="button" onClick={SignIn}>
                  Login
                </a>
              </div>
              <br />
              <div className="span-or" style={{ color: "white" }}>
                or
              </div>
              <div className="span" style={{ color: "white" }}>
                New to Questionnaire Platform?
              </div>
              <div className="btn-animate">
                <a className="btn-signin" type="button" href="/">
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

      {/* <div className="span">
        New to miniBell?
      </div> */}
      {/* <div className="btn1">
        <div className="btn-animate">
          <a className="btn-signin" type="button" href="/signup">Create you miniBell acount</a>
        </div>
      </div> */}
    </div>
  );
}
