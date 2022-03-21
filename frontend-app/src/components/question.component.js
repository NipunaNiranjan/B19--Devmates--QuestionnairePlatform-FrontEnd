import React, { Component } from "react";
import QuestionDataService from "../service/question.service";
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescriptiveName = this.onChangeDescriptiveName.bind(this);
    this.onChangeQuestionContent = this.onChangeQuestionContent.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.state = {
      currentQuestion: {
        id: null,
        descriptiveName: "",
        questionContent: ""
      },
      message: ""
    };
  }
  componentDidMount() {
    this.getQuestion(this.props.match.params.id);
  }
  onChangeDescriptiveName(e) {
    const descriptiveName = e.target.value;
    this.setState(function(prevState) {
      return {
        currentQuestion: {
          ...prevState.currentQuestion,
          descriptiveName: descriptiveName
        }
      };
    });
  }
  onChangeQuestionContent(e) {
    const questionContent = e.target.value;
    
    this.setState(prevState => ({
      currentQuestion: {
        ...prevState.currentQuestion,
        questionContent: questionContent
      }
    }));
  }
  getQuestion(id) {
    QuestionDataService.get(id)
      .then(response => {
        this.setState({
          currentQuestion: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  /*
  updatePublished(status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      published: status
    };
    TutorialDataService.update(this.state.currentTutorial.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }*/
  updateQuestion() {
    QuestionDataService.update(
      this.state.currentQuestion.id,
      this.state.currentQuestion
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The question was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  deleteQuestion() {    
    QuestionDataService.delete(this.state.currentQuestion.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/question')
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { currentQuestion } = this.state;
    return (
      <div>
        {currentQuestion ? (
          <div className="edit-form">
            <h4>Question</h4>
            <form>
              <div className="form-group">
                <label htmlFor="descriptiveName">descriptive Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="descriptiveName"
                  value={currentQuestion.descriptiveName}
                  onChange={this.onChangeDescriptiveName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="questionContent">Question Content</label>
                <input
                  type="text"
                  className="form-control"
                  id="questionContent"
                  value={currentQuestion.questionContent}
                  onChange={this.onChangeQuestionContent}
                />
              </div>
              
            </form>

            
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteQuestion}
            >
              Delete
            </button>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateQuestion}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Question...</p>
          </div>
        )}
      </div>
    );
  }
}