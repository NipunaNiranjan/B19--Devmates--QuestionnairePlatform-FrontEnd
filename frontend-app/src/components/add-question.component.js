import React, { Component } from "react";
import QuestionDataService from "../service/question.service";
export default class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeDescriptiveName.bind(this);
    this.onChangeDescription = this.onChangeQuestionContent.bind(this);
    this.saveQuestion = this.saveQuestion.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.state = {
      id: null,
      descriptiveName: "",
      questionContent: "", 
      submitted: false
    };
  }
  onChangeDescriptiveName(e) {
    this.setState({
        descriptiveName: e.target.value
    });
  }
  onChangeQuestionContent(e) {
    this.setState({
        questionContent: e.target.value
    });
  }
  saveQuestion() {
    var data = {
      descriptiveName: this.state.descriptiveName,
      questionContent: this.state.questionContent
    };
    QuestionDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          descriptiveName: response.data.descriptiveName,
          questionContent: response.data.questionContent,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newQuestion() {
    this.setState({
      id: null,
      descriptiveName: "",
      questionContent: "",
      submitted: false
    });
  }
  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newQuestion}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="descriptiveName">Descriptive Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="descriptiveName"
                  required
                  value={this.state.title}
                  onChange={this.onChangeDescriptiveName}
                  name="descriptiveName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="questionContent">Question Content</label>
                <input
                  type="text"
                  className="form-control"
                  id="questionContent"
                  required
                  value={this.state.questionContent}
                  onChange={this.onChangeQuestionContent}
                  name="questionContent"
                />
              </div>
              <button onClick={this.saveQuestion} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
  }
}