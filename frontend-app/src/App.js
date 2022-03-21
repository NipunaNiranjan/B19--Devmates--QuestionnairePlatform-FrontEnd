import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Outlet,
  Switch
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddQuestion from "./components/add-question.component"; 
import Question from "./components/question.component"; 
import QuestionsList from "./components/questions-list.component"; 

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Quizy
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                View Questionnaire
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Question
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
        <Switch>
        <Route exact path="/" component={QuestionsList} />
        <Route exact path="/add" component={AddQuestion} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
