import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Button from '@material-ui/core/Button';
import Share from '@material-ui/icons/Share'
import {theme} from '../../ults/theme.js'
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom'


function getSteps() {
  return ['#1', '#2','#3'];
}

const SubmitButton = withStyles({
  root: {
    background: `${theme.palette.primary.main}`,
    color: 'white'
  }

})(Button)

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


export default class question extends Component {

	state = {
		open: false,
	}

	handleOpen = () => {
	  this.setState({ open: true });
	};

  handleClose = () => {
	  this.setState({ open: false });
  };

	ComponentWillMount() {
	}
	render() {
    console.log(SubmitButton.root)
    console.log(theme.palette.primary.main)
		const steps = getSteps();
		return (
		<Container theme={theme} >

		<Modal
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
			open={this.state.open}
			onClose={this.handleClose}
		>
			<ModalDiv style={getModalStyle()}>
				<Circle style={{ fontSize: '350px',textAlign: 'center'}}></Circle>
				<Typography variant="display2">正解です！</Typography>
				<Typography variant="display1">この調子でがんばりましょう！</Typography>
				<Link to='/result'>
					<Forward style={{ fontSize: '100px',textAlign: 'center'}}></Forward>
				</Link>

			</ModalDiv>
		</Modal>

			<QuestionContainer class="QuestionContainer">
				<Stepper activeStep='0'>
						{steps.map((label, index) => {
							return (
								<Step key="1">
									<StepLabel>a</StepLabel>
								</Step>
							);
						})}
				</Stepper>
			</QuestionContainer>
			<QuestionTitle  variant="display2">Q.TestTest</QuestionTitle>
			<FormContainer style={{marginTop: '80px'}}>
				<RadioContainer>
					<FormLabel
						value="A"
						control={<RadioButton color="primary" style={{fontSize: '30px'}}/>}
						label={<span style={{ fontSize: '30px' }}>A</span>}
						icon={<Share style={{ fontSize: 50 }} />}

						/>
					<FormLabel
            value="B"
            control={<RadioButton color="primary" />}
            label={<span style={{fontSize: '30px'}}>B</span>}
          />
					<FormLabel
            value="C"
            control={<RadioButton color="primary" />}
            label={<span style={{fontSize: '30px'}}>C</span>}
          />
					<FormLabel
            value="D"
            control={<RadioButton color="primary" />}
            label={<span style={{fontSize: '30px'}}>D</span>}
          />
				</RadioContainer>
				<SubmitButton color="secondary" variant="contained" onClick={this.handleOpen}>答える！！</SubmitButton>
			</FormContainer>
		</Container>
		)
	}
}

const QuestionContainer = styled.div`
	margin-top: 80px;
	display: block;
	width: 100%;
	height: 100px;
`

const Container = styled(MuiThemeProvider)`
	width: 80%;
	margin: 0 auto;
`

const QuestionTitle = styled(Typography) `
	padding-left: 25px;
	color: black;
`
const FormContainer = styled(FormControl) `
	width: 880px;
	height: 500px;
`
const RadioContainer = styled(RadioGroup) `
	width: 70%;
	height: 100%;
	margin-left: 25px;
`
const FormLabel = styled(FormControlLabel) `
`
const RadioButton = styled(Radio) `

`

const ModalDiv = styled.div `
	text-align: center;
	position: absolute;
	width: 75%;
	height: 75%;
	background: white;
`

const Circle = styled(CheckCircleOutline)`
	text-align: center;
	color: #FFA000;
`

const Forward = styled(ArrowForward)`
	color: #00B8D4;
	margin-top: 200px;
`


const SubmitButtonWord = styled.p `
  font-size: 30px;
  color: white;
`
