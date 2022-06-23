import React from "react";

function Class() {
  return (
    <>
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        class
      </div>
    </>
  );
}

export default Class;
