import React from "react";

function CreateOrganization() {
  return (
    <form className="p-10">
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default CreateOrganization;
