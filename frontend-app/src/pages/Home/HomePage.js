import React from "react";
import {Link } from 'react-router-dom';

import "./HomePage.css";
import homewallpaper from "../../assests/images/homewallpaper.png" ;
import Button from "react-bootstrap/Button";
import logo from "../../assests/images/logo.png";
export const HomePage = () => {

    const role = {teacher : 0 , student: 1} ;
  return (
    //   <div className='HomePage'>
    //       <div className='header-section'>
    //           <Navbar bg="light" variant="light">
    //   <Container>
    //   <Navbar.Brand href="#home">Questionnaire Platform</Navbar.Brand>
    //   <Nav className="me-auto">
    //     <Nav.Link href="#home">About Us</Nav.Link>

    //   </Nav>
    //   <Button className='button-log' variant="dark" href="#">Login Here</Button>
    //   </Container>
    // </Navbar >
    //       </div>
    //       <div className='register-section'>
    //                   <div className='register-student-section'>
    //                           hello
    //                   </div>
    //                   <div className='register-teacher-section'>
    //                           world
    //                   </div>
    //       </div>
    //       <div className='footer-section'>

    //       </div>

    //   </div>
    <div
      className="containerh"
      style={{ background: "white", display: "flex", flexDirection: "column",overflow:"hidden" }}
    >
      <div
        className="navbarh"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="nav-left">
          <img src={logo} alt="home image" />
        </div>
        <div className="nav-right">
         <Link to ="/login"> <Button variant="outline-primary">Login</Button>{" "}</Link>
        </div>
      </div>
      <div className="bodyh" style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="body-lefth"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="body-header">
            <h1 style={{ textAlign: "left", color: "#738f93" }}>
              Matching developers with great companies.
            </h1>
          </div>
          <div
            className="body-contenth"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="body-content-left">
              <h2>For Teachers</h2>
              <p style={{ textAlign: "justify", color: "#738f93",minHeight:"100px" }}>
                We are the market-leading technical interview platform to
                identify and hire developers whereever they are.
              </p>
             <Link to={`/register/${0}`}> <Button variant="outline-primary">Register As a Teacher</Button>{' '}</Link>
            </div>
            <div className="body-content-righth">
              <h2>For Students</h2>
              <p style={{ textAlign: "justify", color: "#738f93",minHeight:"100px" }}>
                We are the market-leading technical interview platform to
                identify and hire developers whereever they are.
              </p>
              <Link to={`/register/${1}`}><Button variant="outline-primary">Register As a Student</Button>{' '}</Link>
            </div>
          </div>
          <div className="footer" style={{marginTop:"60px"}}>Copyright &copy; 2022 | Questionnaire  Platform</div>
        </div>
        <div className="body-righth">
        <img src={homewallpaper} alt="home image"style={{width:"900px"}} />
        </div>
      </div>
    </div>
  );
};
