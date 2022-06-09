import React from "react";

function CreateClass() {
  return (
    <form>
      <div className="mb-3">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>
      <div className="mb-3">
        <label>Name of the class</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter class name"
        />
      </div>
      <div className="mb-3">
        <label>No of Students</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter no. of students"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          create class
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  );
}

export default CreateClass;
