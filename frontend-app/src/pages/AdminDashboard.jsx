import React from "react";

function AdminDashboard() {
  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
      </div>
    </>
  );
}

export default AdminDashboard;
