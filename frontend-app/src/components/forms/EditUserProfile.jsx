import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function EditUserProfile() {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  //const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     refreshUsers();
  //   }, []);

  //   function refreshUsers() {
  //     axios
  //       .get("api/v1/users/allUsers")
  //       .then((res) => {
  //         setUsers(res.data);
  //         console.log(res.data);

  //         users.map((item) => {
  //           users.map(
  //             (item) => (
  //               setusername(item.username),
  //               setEmail(item.email),
  //               setPhoneNo(item.phoneNo)
  //             )
  //           );
  //         });
  //       })
  //       .catch((err) => console.log(err));
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("api/v1/users/editProfile", {
        id: localStorage.getItem("userID"),
        username: username,
        password: password,
        email: email,
        phone: phoneNo,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <h4 className="mt-5">Edit profile</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Edit Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter class name"
            onChange={(e) => setusername(e.target.value)}
          />
          {/* <p className="text-danger">{errorName}</p> */}
        </div>
        <div className="mb-3">
          <label>Edit Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter no. of students"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <p className="text-danger">{errorNoOfStudents}</p> */}
        </div>

        <div className="mb-3">
          <label>Edit Phone number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter no. of students"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          {/* <p className="text-danger">{errorNoOfStudents}</p> */}
        </div>

        <div class="row">
          <div class="col-lg">
            <div className="mb-3">
              <label>Enter new Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <p className="text-danger">{errorFromDate}</p> */}
            </div>
          </div>
          <div class="col-lg">
            <div className="mb-3">
              <label>Confirm new password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* <p className="text-danger">{errorTodate}</p> */}
            </div>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
        {/* <p className="forgot-password text-right">
    Already registered <a href="/sign-in">sign in?</a>
  </p> */}
      </form>
    </>
  );
}

export default EditUserProfile;
