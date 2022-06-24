import { toBeEmptyDOMElement } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import React from "react";
import { useState } from "react";

function CreateClass() {
  const [className, setClassName] = useState("");
  const [noOfStudents, setNoOfStudents] = useState(0);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  //const [createdAt, setCreatedAt] = useState();

  //validation error messsages
  const [errorName, seterrorName] = useState();
  const [errorNoOfStudents, seterrorNoOfStudents] = useState();
  const [errorFromDate, seterrorFromDate] = useState();
  const [errorTodate, seterrorToDate] = useState();
  const [teacherId, setTeacherId] = useState(localStorage.getItem("userID"));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNotValid()) {
      return;
    }

    // const postData = { className, noOfStudents, fromDate, toDate };
    var todayDate = new Date().toISOString().slice(0, 10);

    axios
      .post("api/v1/class", {
        className: className,
        noOfStudents: noOfStudents,
        fromDate: fromDate,
        toDate: toDate,
        createdAt: todayDate,
        teacher: {
          id: teacherId,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const isNotValid = () => {
    var temp = false;
    var todayDate = new Date().toISOString().slice(0, 10);

    //class name
    if (className === "") {
      seterrorName("Please enter name for  the class");
      temp = true;
    } else if (className.length > 20) {
      seterrorName("name is too long,name should be less than 20 letters");
      temp = true;
    } else {
      seterrorName("");
    }

    //no of students
    if (noOfStudents == 0) {
      seterrorNoOfStudents("Please enter no of students");
      temp = true;
    } else if (noOfStudents < 1 || noOfStudents > 100) {
      seterrorNoOfStudents("input students between 1 & 100");
      temp = true;
    } else {
      seterrorNoOfStudents("");
    }

    if (fromDate === "") {
      seterrorFromDate("Please enter date");
      temp = true;
    } else if (fromDate < todayDate) {
      seterrorFromDate("invalid date");
    } else {
      seterrorFromDate("");
    }

    if (toDate === "") {
      seterrorToDate("Please enter date");
      temp = true;
    } else {
      seterrorToDate("");
    }

    if (fromDate > toDate) {
      seterrorFromDate("invalid date");
      seterrorToDate("invalid date");
      temp = true;
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
