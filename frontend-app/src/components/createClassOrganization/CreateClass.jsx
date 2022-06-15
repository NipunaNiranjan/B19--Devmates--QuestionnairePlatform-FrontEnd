import axios from "axios";
import React from "react";
import { useState } from "react";

function CreateClass() {
  const [className, setClassName] = useState("");
  const [noOfStudents, setNoOfStudents] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [createdAt, setCreatedAt] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(className);
    console.log(noOfStudents);
    console.log(fromDate);
    console.log(toDate);
    console.log(new Date().toLocaleString());

    const temp = new Date().toLocaleString();
    setCreatedAt(temp);

    const postData = { className, noOfStudents, fromDate, toDate, temp };

    axios
      .post("http://localhost:8080/createClass", postData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
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
      </div>
      <div className="mb-3">
        <label>No of Students</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter no. of students"
          onChange={(e) => setNoOfStudents(e.target.value)}
        />
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
