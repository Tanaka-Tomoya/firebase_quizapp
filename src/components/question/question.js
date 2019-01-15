import React, { Component } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Button from '@material-ui/core/Button';
import {theme} from '../../ults/theme.js'
import AnswerField from './AnswerField'
import AnswerResultModal from './AnswerResultModal'




export default class question extends Component {

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


	ComponentWillMount() {
	}
	render() {
    const { questionId } = this.props.match.params
    console.log(questionId)
		return (
		<Container theme={theme} >
      <AnswerResultModal open={this.state.open}/>
			<QuestionContainer>
        <Stepper
          variant="dots"
          steps={6}
          position="static"
          activeStep={this.state.activeStep}
        />
  			<QuestionTypography variant="h2">Q.TestTest</QuestionTypography>
        <AnswerField
          handleOpen={() => this.handleOpen()}
          handleChange={event => this.handleChange(event)}
          selectedValue={this.state.selectedValue}
          />
    	</QuestionContainer>
		</Container>
		)
	}
}

const Container = withStyles({
  root: {
    width: '80%',
    margin: '0 auto'
  }
})(MuiThemeProvider)



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
