import React, { Component } from 'react';
import styled from 'styled-components';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { reduxForm, Field, FieldArray } from 'redux-form'
import {theme} from '../../ults/theme.js'
import { connect } from 'react-redux'
import { compose } from 'redux'


const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  type='text',
  required = false,
  rootClass = 'width: 100%',
}) =>(
  <FormField
    required={required}
    classes={{root: rootClass}}
    error={!!(touched && error)}
    label={label}
    type={type}
    variant='outlined'
    helperText={touched && error}
    {...input}
		errorStyle={{color: '#FFA000'}}
  />
)

class Signin extends Component {

	constructor(props) {
		super(props)
	}

  submit = (values) => {
		this.props.login(values.email, values.password)
  }
  componentWillMount() {
  }

	render() {
		const { classes, handleSubmit, send } = this.props
		return(
			<MuiThemeProvider theme={theme}>
				<SignupContainer>
					<SignupContent onSubmit={handleSubmit(this.submit)}>
						<SignupTitle>
							<WhiteTypography variant="h3">Login</WhiteTypography>
						</SignupTitle>
						<FormContainer>
							<FormContent>
							 <Field name='email' label='メールアドレス' component={renderTextField} required />
 							 <Field name='password' type='password' label='パスワード' component={renderTextField} required />
 							 <SubmitButton type='submit' size='large' variant='outlined' color="secondary">登録する</SubmitButton>
							</FormContent>
						</FormContainer>
					</SignupContent>
				</SignupContainer>
			</MuiThemeProvider>
		)
	}
}

const WhiteTypography = withStyles({
	root: {
		color: 'white',
		paddingLeft: '20px'
	}
})(Typography)

const FormField = withStyles({
	root: {
		width: '80%',
		marginTop: '30px',
	}

})(TextField)

const SubmitButton = withStyles({
	root: {
		display: 'block',
		marginLeft: 'auto',
		marginRight: '80px',
		marginTop: '30px',
		height: '10%',
		width: '140px',
    minWidth: '140px',
		fontSize: '20px',
		fontWeight: '600',
	}
})(Button)

const SignupContainer = styled.div `
	height: 100%;
	width: 100%;
	position: relative;
`

const FormContent = styled.div `
	height: 100%;
	width: 100%;
	position: absolute;
	top: 65%;
	left: 50%;
	transform: translate( -50%, -50%);

`
const FormContainer = styled.div `
	text-align: center;
	position: relative;
	height: 100%;
	width: 100%;
`

const SignupContent = styled.form `
	height: 60%;
	width: 70%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50%);
	background-color: white;
  max-width: 800px;
  max-height: 600px;
`

const SignupTitle = styled.div `
	height: 10%;
	width: 100%;
	background-color: ${theme.palette.primary.main};
`


export default reduxForm({
    form: 'Signin',
  	validate: values => {
  	    const errors = {}
  			if (!values.email) {
  				errors.email = '必須項目です'
  			}
  	    if (!values.password) {
  	      errors.password = '必須項目です'
  	    }
  	    return errors
  	  }
  })(Signin)
