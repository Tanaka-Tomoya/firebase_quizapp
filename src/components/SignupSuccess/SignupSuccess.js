import React, { Component } from 'react'
import styled from 'styled-components'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {theme} from '../../ults/theme.js'

export default class SignupSuccess extends Component {
	render() {
		return(
			<MuiThemeProvider theme={theme}>
				<Container>
					<Background>
						<Content>
							<WhiteTypography component="h2" variant="h1">登録に成功しました!</WhiteTypography>
							<WhiteTypography component="h2" variant="display1">早速体験しましょう!</WhiteTypography>
							<ToHome to="/">
								<SubmitButton color="secondary" variant="contained">
									早速体験する！
								</SubmitButton>
							</ToHome>
						</Content>
					</Background>
				</Container>
			</MuiThemeProvider>
		)
	}
}

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background: url(./welcome.jpg) no-repeat center center;
	background-size: cover;
`
const Background = styled.div`
	height: 100%;
	background: rgba(102, 180, 206, 0.9);
	position: relative;
	text-align: center
`

const Content = styled.div`
	width: 80%;
	height: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50%);
`

const ToHome = styled(Link)`
	text-decoration: none;
`

const WhiteTypography = withStyles({
	root: {
		color: 'white',
		marginTop:'20px'
	}
})(Typography)

const SubmitButton = withStyles({
  root: {
    background: `${theme.palette.secondary.main}`,
    fontSize: '30px',
    color: 'white',
    width: '265px',
    height: '55px',
		marginTop: '40px',
		textDecoration: 'none'
}

})(Button)
