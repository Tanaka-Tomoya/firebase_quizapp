import React, { Component } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import {theme} from '../../ults/theme.js'
import AnswerField from './AnswerField'
import AnswerResultModal from './AnswerResultModal'

export default class Question extends Component {

	state = {
		open: false,
    selectedValue: 'A',
    activeStep: 1
	}

  handleChange = event => {
  	this.setState({ selectedValue: event.target.value });
  };

	handleOpen = () => {
	  this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false});
	}

	componentWillMount() {
		const { questionId } = this.props.match.params
		const { questionNumber } = this.props.match.params
		this.props.fetchQuestionContents(questionId, questionNumber)
	}
	render() {
		if (this.props.question.isLoading) {
			return (
				<info>ロード中</info>
			)
		} else if(this.props.question.hasError) {
			return (
				<div>エラー</div>
			)
		} else {
			const { items } = this.props.question
			const { length } = this.props.question
			const { questionNumber } = this.props.match.params
			const { questionId } = this.props.match.params
			return (
				<Container theme={theme} >
					<AnswerResultModal
						open={this.state.open}
						userAnswer={this.state.selectedValue}
						questionAnswer={items.answer}
						questionId={questionId}
						questionNumber={questionNumber}
						handleClose={() => this.handleClose()}
						/>
					<QuestionContainer>
						<Stepper
							variant="dots"
							steps={length}
							position="static"
							activeStep={this.state.activeStep}
						/>
					<QuestionTypography variant="h2">Q.{questionNumber}  {items.question_title}</QuestionTypography>
						<AnswerField
							handleOpen={() => this.handleOpen()}
							handleChange={event => this.handleChange(event)}
							selectedValue={this.state.selectedValue}
							option={items.option}
							/>
					</QuestionContainer>
				</Container>
			)
		}
	}
}

const Container = withStyles({
  root: {
    width: '80%',
    margin: '0 auto'
  }
})(MuiThemeProvider)

const info = styled.div`
	background-color: black;
`


const QuestionTypography = withStyles({
  root: {
    margin: '0 auto',
    // marginLeft: '250px',
    // marginBottom: '120px',
    color: 'rgba(0,0,0,0.87)'
  },
  h2: {

  }
})(Typography)


const Stepper = withStyles({
  root: {
    background: 'white',
    width: '100px',
    height: '50px',
    margin: '0 auto'
  },
  dot: {
    height: '12px',
    width: '12px'
  }

})(MobileStepper);

const QuestionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform : translate(-50%,-50%);
	margin-top: 80px;
	display: block;
	width: 55%;
	height: 900px;

`
