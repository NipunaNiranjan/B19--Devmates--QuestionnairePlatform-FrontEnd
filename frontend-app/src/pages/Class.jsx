import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Sidebar from "../components/sidebar/Sidebar";
import "./Class.css";

function Class() {
  const [activities, setActivities] = useState([]);

  let params = useParams();

  useEffect(() => {
    refreshActivities();
  }, []);

  function refreshActivities() {
    axios
      .get(`api/v1/questionnaires/class/${params.classId}`)
      .then((res) => {
        setActivities(res.data.body);
        console.log(res.data.body);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {console.log(params.className)}
      <NavbarComponent />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />

        {/* content */}
        <div className="container cont_style p-5 mb-5  text-dark ">
          <div className="col-12 justify-content-left align-items-left">
            <h1 className="text-md-left justify-content-left  mt-3 align">
              {params.className}
            </h1>
          </div>

          {activities.map((item) => (
            <div className="row col-12 ">
              <div className=" card_style mt-5 ">
                <div className="card-body  d-flex r  not-found-container">
                  <div className="card_icon_div_style "></div>
                  <div className="card_text_div_style">
                    <h4 className="d-flex  not-found-container paddingLeft: 5px text-black ">
                      {item.name}
                    </h4>
                    <h6>{item.description}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Class;
