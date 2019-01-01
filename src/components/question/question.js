import React, { Component } from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
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
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked'
import {theme} from '../../ults/theme.js'
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom'
import { MainTypography } from '../../ults/theme';



const Container = withStyles({
  root: {
    width: '80%',
    margin: '0 auto'
  }
})(MuiThemeProvider)

const SubmitButton = withStyles({
  root: {
    background: `${theme.palette.secondary.main}`,
    fontSize: '30px',
    color: 'white',
    width: '190px',
    height: '50px',
    marginLeft: 'auto',
    marginRight: '100px'
  }

})(Button)


const QuestionTypography = withStyles({
  root: {
    height: 'auto',
    marginLeft: '250px',
    marginBottom: '120px',
    color: 'rgba(0,0,0,0.87)'
  },
  h2: {

  }
})(Typography)

const RadioButton = withStyles({
  root: {
    fontSize: '30px'
  }
})(Radio)

const ModalTypography = withStyles({
  root: {

  }
})(MainTypography)

const UncheckedButton = withStyles({
  root: {
    fontSize: '50px'
  }
})(RadioButtonUnchecked)

const CheckedButton = withStyles({
  root: {
    fontSize: '50px'
  }
})(RadioButtonChecked)

const RadioContainer = withStyles({
  root: {
    	width: '70%',
    	height: '100%',
    	marginLeft: '25px',
  }

})(RadioGroup)

const FormContainer = withStyles({
  root: {
    width: '80%',
    marginLeft: '225px',
    marginTop: '30px'
  }
})(FormControl)

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

const Forward = withStyles({
  root: {
    color: '#00B8D4',
    marginTop: '200px',
    fontSize: '100px',
    textAlign: 'center'
  }
})(ArrowForward)

const Circle = withStyles({
  root: {
    textAlign: 'center',
    color: '#FFA000',
    fontSize: '350px'
  }
})(CheckCircleOutline)

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
	  this.setState({ open: false });
  };

	ComponentWillMount() {
	}
	render() {
    console.log(SubmitButton.root)
    console.log(theme.palette.secondary.main)
		return (
		<Container theme={theme} >

  		<Modal
  			aria-labelledby="simple-modal-title"
  			aria-describedby="simple-modal-description"
  			open={this.state.open}
  			onClose={this.handleClose}
  		>

  			<ModalDiv style={getModalStyle()}>
  				<Circle></Circle>
  				<Typography variant="h2">正解です！</Typography>
  				<Typography variant="display1" gutterBottom>この調子でがんばりましょう！</Typography>
  				<Link to='/result'>
  					<Forward/>
  				</Link>
  			</ModalDiv>
  		</Modal>

			<QuestionContainer>
        <Stepper
          variant="dots"
          steps={6}
          position="static"
          activeStep={this.state.activeStep}
        />

  			<QuestionTypography variant="h2">Q.TestTest</QuestionTypography>

  			<FormContainer>
  				<RadioContainer>
            <FormControlLabel
              label={<RadioButtonValue>A</RadioButtonValue>}
              control={<Radio
                       checked={this.state.selectedValue === 'A'}
                       onChange={this.handleChange}
        						   value="A"
        						   control={<RadioButton color="primary" />}
                       icon={<UncheckedButton color="primary"  />}
                       checkedIcon={<CheckedButton />}
        						/>}
              />
            <FormControlLabel
              label={<RadioButtonValue>B</RadioButtonValue>}
              control={<Radio
                       checked={this.state.selectedValue === 'B'}
                       onChange={this.handleChange}
        						   value="B"
        						   control={<RadioButton color="primary" />}
                       icon={<UncheckedButton color="primary" />}
                       checkedIcon={<CheckedButton />}
        						/>}
              />
            <FormControlLabel
              label={<RadioButtonValue>C</RadioButtonValue>}
              control={<Radio
                       checked={this.state.selectedValue === 'C'}
                       onChange={this.handleChange}
        						   value="C"
        						   control={<RadioButton color="primary" />}
                       icon={<UncheckedButton color="primary"  />}
                       checkedIcon={<CheckedButton />}
        						/>}
              />
              <FormControlLabel
                label={<RadioButtonValue>D</RadioButtonValue>}
                control={<Radio
                         checked={this.state.selectedValue === 'D'}
                         onChange={this.handleChange}
          						   value="D"
          						   control={<RadioButton color="primary" />}
                         icon={<UncheckedButton  color="primary" />}
                         checkedIcon={<CheckedButton />}
          						/>}
                />
  				</RadioContainer>
  				<SubmitButton color="secondary" variant="contained" onClick={this.handleOpen}><span>答える！</span></SubmitButton>
  			</FormContainer>
    	</QuestionContainer>
		</Container>
		)
	}
}

const QuestionContainer = styled.div`
	margin-top: 80px;
	display: block;
	width: 100%;
	height: 1000px;
`

const RadioButtonValue = styled.span `
  font-size: 30px;
`

const ModalDiv = styled.div `
	text-align: center;
	position: absolute;
	width: 75%;
	height: 75%;
	background: white;
`

const SubmitButtonWord = styled.p `
  font-size: 50px;
  color: white;
`
