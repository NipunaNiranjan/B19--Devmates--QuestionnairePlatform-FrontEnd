import React, { Component } from "react";
import QuestionDataService from "../service/question.service";
import { Link } from "react-router-dom";
export default class QuestionsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchDescriptiveName = this.onChangeSearchDescriptiveName.bind(this);
    this.retrieveQuestions = this.retrieveQuestions.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveQuestion = this.setActiveQuestion.bind(this);
    this.removeAllQuestions = this.removeAllQuestions.bind(this);
    this.searchDescriptiveName = this.searchDescriptiveName.bind(this);
    this.state = {
      questions: [],
      currentQuestion: null,
      currentIndex: -1,
      searchDescriptiveName: ""
    };
  }
  componentDidMount() {
    this.retrieveQuestions();
  }
  onChangeSearchDescriptiveName(e) {
    const searchDescriptiveName = e.target.value;
    this.setState({
      searchDescriptiveName: searchDescriptiveName
    });
  }
  retrieveQuestions() {
    QuestionDataService.getAll()
      .then(response => {
        this.setState({
          questions: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveQuestions();
    this.setState({
      currentQuestion: null,
      currentIndex: -1
    });
  }
  setActiveQuestion(question, index) {
    this.setState({
      currentQuestion: question,
      currentIndex: index
    });
  }
  removeAllQuestions() {
    QuestionDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchDescriptiveName() {
    QuestionDataService.findByDescriptiveName(this.state.searchDescriptiveName)
      .then(response => {
        this.setState({
          questions: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { searchDescriptiveName, questions, currentQuestion, currentIndex } = this.state;
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by descriptiveName"
              value={searchDescriptiveName}
              onChange={this.onChangeSearchDescriptiveName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchDescriptiveName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Questions List</h4>
          <ul className="list-group">
            {questions &&
              questions.map((question, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveQuestion(question, index)}
                  key={index}
                >
                  {question.descriptiveName}
                </li>
              ))}
          </ul>
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllQuestions}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentQuestion ? (
            <div>
              <h4>Question</h4>
              <div>
                <label>
                  <strong>descriptiveName:</strong>
                </label>{" "}
                {currentQuestion.descriptiveName}
              </div>
              <div>
                <label>
                  <strong>Question Content:</strong>
                </label>{" "}
                {currentQuestion.questionContent}
              </div>
              
              <Link
                to={"/question/" + currentQuestion.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Question...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}