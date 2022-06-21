import React from "react";

function AdminDashboardMain() {
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

export default AdminDashboardMain;
