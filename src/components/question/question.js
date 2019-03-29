import React, { Component } from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import { theme } from "../../ults/theme.js";
import AnswerField from "./AnswerField";
import AnswerResultModal from "./AnswerResultModal";
import QuestionResult from "./questionResult";

export default class Question extends Component {
  state = {
    open: false,
    userAnswer: "A",
    activeStep: 0,
    questionNumber: 0,
    result: {},
    isVisible: false,
    correctAnswerCount: 0
  };

  handleChange = event => {
    this.setState({
      userAnswer: event.target.value
    });
  };
  handleOpen = () => {
    this.setState({ open: true });
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 100);
    console.log(this.state.result);
    console.log(typeof this.state.result);
  };

  correctAnswer = () => {
    this.setState(prev => {
      return {
        open: false,
        activeStep: prev.activeStep + 1,
        questionNumber: prev.questionNumber + 1,
        isVisible: !this.state.isVisible,
        correctAnswerCount: prev.correctAnswerCount + 1,
        result: Object.assign(
          {
            [`${prev.questionNumber}`]: true
          },
          prev.result
        )
      };
    });
  };
  incorrectAnswer = () => {
    this.setState(prev => {
      return {
        open: false,
        activeStep: prev.activeStep + 1,
        questionNumber: prev.questionNumber + 1,
        isVisible: !this.state.isVisible,
        result: Object.assign(
          {
            [`${prev.questionNumber}`]: false
          },
          prev.result
        )
      };
    });
  };

  componentDidMount() {
    const { questionId } = this.props.match.params;
    console.log(questionId);
    this.props.fetchQuestionContents(questionId);
  }
  render() {
    const { isLoading } = this.props.question;
    const { questionLength } = this.props.question;
    const { questionNumber } = this.state;
    const { correctAnswerCount } = this.state;
    if (isLoading) {
      return <info>ロード中</info>;
    } else if (this.props.question.hasError) {
      return <div>エラー</div>;
    } else if (questionNumber === questionLength) {
      //const { questionNumber } = this.state
      const { result } = this.state;
      console.log(result);
      return (
        <QuestionResult
          result={result}
          questionLength={questionLength}
          correctAnswerCount={correctAnswerCount}
        />
      );
    } else {
      const { items } = this.props.question;
      const { questionId } = this.props.match.params;
      const { activeStep } = this.state;
      const { result } = this.state;
      const item = items[questionNumber];

      return (
        <MuiContainer theme={theme}>
          <Container>
            <AnswerResultModal
              open={this.state.open}
              userAnswer={this.state.userAnswer}
              questionAnswer={item.answer}
              questionNumber={1}
              questionLength={questionLength}
              correctAnswer={() => this.correctAnswer()}
              incorrectAnswer={() => this.incorrectAnswer()}
              isVisible={this.state.isVisible}
            />
            <QuestionContainer>
              <Stepper
                variant="dots"
                steps={questionLength}
                position="static"
                activeStep={activeStep}
              />
              <QuestionTypography variant="h2">
                Q. {item.question_title}
              </QuestionTypography>
              <AnswerField
                handleOpen={() => this.handleOpen()}
                handleChange={event => this.handleChange(event)}
                userAnswer={this.state.userAnswer}
                option={item.option}
              />
            </QuestionContainer>
          </Container>
        </MuiContainer>
      );
    }
  }
}

const MuiContainer = withStyles({
  root: {}
})(MuiThemeProvider);

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background-color: white;
`;

const QuestionTypography = withStyles({
  root: {
    margin: "0 auto",
    // marginLeft: '250px',
    // marginBottom: '120px',
    color: "rgba(0,0,0,0.87)",
    fontWeight: 800
  },
  h2: {}
})(Typography);

const Stepper = withStyles({
  root: {
    background: "white",
    width: "100px",
    height: "50px",
    margin: "0 auto"
  },
  dot: {
    height: "12px",
    width: "12px"
  }
})(MobileStepper);

const QuestionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 80px;
  display: block;
  width: 55%;
  height: 900px;
`;
