import React from "react";
import EditUserProfile from "../components/forms/EditUserProfile";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from "../components/sidebar/Sidebar";

function UserProfile() {
  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        <div className="m-lg-5 container-fluid">
          <h1>My Profile</h1>
          <EditUserProfile />

          <hr />
        </div>
      </div>
    </>
  );
}

export default UserProfile;
