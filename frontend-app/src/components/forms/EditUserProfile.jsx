import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function EditUserProfile() {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhoneNo] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

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

    if (!isValid()) {
      return;
    }

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

  const isValid = () => {
    let valid = true;

    const regexPassword =
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
    const regexEmail =
      "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])";

    if (username !== "") {
      if (username.length < 6 || username > 20) {
        setErrorName("username should be inbetween 6 to 20 characters");
        valid = false;
      }
    }
    if (email !== "") {
      if (!email.toLowerCase().match(regexEmail)) {
        setErrorEmail("Email is not valid");
        valid = false;
      }
    }

    if (phoneNo !== "") {
      if (phoneNo.length != 10) {
        setErrorPhoneNo("phone number is not valid");
        valid = false;
      }
    }

    if (password !== "") {
      // if (!password.match(regexEmail)) {
      //   setErrorPassword(
      //     "Minimum eight characters, at least one letter, one number and one special character"
      //   );
      //   valid = false;
      // } else
      if (password !== confirmPassword) {
        setConfirmPass("confirm password dosen't match");
        valid = false;
      }
    }

    return valid;
  };

  return (
    <>
      <hr />
      <h4 className="mt-5">Edit profile</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Edit Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter new username"
            onChange={(e) => setusername(e.target.value)}
          />
          <p className="text-danger">{errorName}</p>
        </div>
        <div className="mb-3">
          <label>Edit Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter new email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-danger">{errorEmail}</p>
        </div>

        <div className="mb-3">
          <label>Edit Phone number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter new phone number"
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <p className="text-danger">{errorPhone}</p>
        </div>

        <div class="row">
          <hr />
          <h5>Change password</h5>
          <div class="col-lg">
            <div className="mb-3">
              <label>Enter new Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-danger">{errorPassword}</p>
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
              <p className="text-danger">{confirmPass}</p>
            </div>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Save changes
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
