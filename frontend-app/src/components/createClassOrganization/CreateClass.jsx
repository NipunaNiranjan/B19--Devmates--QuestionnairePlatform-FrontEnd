import { toBeEmptyDOMElement } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import React from "react";
import { useState } from "react";

function CreateClass() {
  const [className, setClassName] = useState("");
  const [noOfStudents, setNoOfStudents] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  //const [createdAt, setCreatedAt] = useState();

  //validation error messsages
  const [errorName, seterrorName] = useState();
  const [errorNoOfStudents, seterrorNoOfStudents] = useState();
  const [errorFromDate, seterrorFromDate] = useState();
  const [errorTodate, seterrorToDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNotValid()) {
      return;
    }

    const temp = new Date().toLocaleString();
    //setCreatedAt(temp);

    const postData = { className, noOfStudents, fromDate, toDate };

    axios
      .post("http://localhost:8080/createClass", postData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const isNotValid = () => {
    var temp = false;
    if (className === "") {
      seterrorName("Please enter name for  the class");
      temp = true;
    } else {
      seterrorName("");
    }

    if (noOfStudents === "") {
      seterrorNoOfStudents("Please enter no of students");
      temp = true;
    } else {
      seterrorNoOfStudents("");
    }

    if (fromDate === "") {
      seterrorFromDate("Please enter date");
      temp = true;
    } else {
      seterrorFromDate("");
    }

    if (toDate === "") {
      seterrorToDate("Please enter date");
      temp = true;
    } else {
      seterrorToDate("");
    }

    return temp;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Name of the class</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter class name"
          onChange={(e) => setClassName(e.target.value)}
        />
        <p className="text-danger">{errorName}</p>
      </div>
      <div className="mb-3">
        <label>No of Students</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter no. of students"
          onChange={(e) => setNoOfStudents(e.target.value)}
        />
        <p className="text-danger">{errorNoOfStudents}</p>
      </div>

      <div class="row">
        <div class="col">
          <div className="mb-3">
            <label>From</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => setFromDate(e.target.value)}
            />
            <p className="text-danger">{errorFromDate}</p>
          </div>
        </div>
        <div class="col">
          <div className="mb-3">
            <label>To</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => setToDate(e.target.value)}
            />
            <p className="text-danger">{errorTodate}</p>
          </div>
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          create class
        </button>
      </div>
      {/* <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p> */}
    </form>
  );
}

export default CreateClass;
