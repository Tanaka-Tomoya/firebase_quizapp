import React, { Component } from 'react';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked'
import {theme} from '../../ults/theme.js'


export default class AnswerField extends Component {
	render(){
		return (
			<FormContainer>
				<RadioContainer>
					<FormControlLabel
						label={<RadioButtonValue>A</RadioButtonValue>}
						control={<Radio
										 checked={this.props.selectedValue === 'A'}
										 onChange={this.props.handleChange}
										 value="A"
										 control={<RadioButton color="primary" />}
										 icon={<UncheckedButton color="primary"  />}
										 checkedIcon={<CheckedButton />}
									/>}
						/>
					<FormControlLabel
						label={<RadioButtonValue>B</RadioButtonValue>}
						control={<Radio
										 checked={this.props.selectedValue === 'B'}
										 onChange={this.props.handleChange}
										 value="B"
										 control={<RadioButton color="primary" />}
										 icon={<UncheckedButton color="primary" />}
										 checkedIcon={<CheckedButton />}
									/>}
						/>
					<FormControlLabel
						label={<RadioButtonValue>C</RadioButtonValue>}
						control={<Radio
										 checked={this.props.selectedValue === 'C'}
										 onChange={this.props.handleChange}
										 value="C"
										 control={<RadioButton color="primary" />}
										 icon={<UncheckedButton color="primary"  />}
										 checkedIcon={<CheckedButton />}
									/>}
						/>
						<FormControlLabel
							label={<RadioButtonValue>D</RadioButtonValue>}
							control={<Radio
											 checked={this.props.selectedValue === 'D'}
											 onChange={this.props.handleChange}
											 value="D"
											 control={<RadioButton color="primary" />}
											 icon={<UncheckedButton  color="primary" />}
											 checkedIcon={<CheckedButton />}
										/>}
							/>
				</RadioContainer>
				<SubmitButton color="secondary" variant="contained" onClick={() => this.props.handleOpen()}><span>答える！</span></SubmitButton>
			</FormContainer>
		)
	}
}

const FormContainer = withStyles({
  root: {
    width: '100%',
    marginTop: '60px'
  }
})(FormControl)

const RadioContainer = withStyles({
  root: {
    	width: '70%',
    	height: '100%',
  }

})(RadioGroup)

const RadioButton = withStyles({
  root: {
    fontSize: '30px'
  }
})(Radio)

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

const SubmitButton = withStyles({
  root: {
    background: `${theme.palette.secondary.main}`,
    fontSize: '30px',
    color: 'white',
    width: '160px',
    height: '50px',
    marginLeft: 'auto',
  }

})(Button)

const RadioButtonValue = styled.span `
  font-size: 30px;
`
