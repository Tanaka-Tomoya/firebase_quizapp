import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {theme} from '../../ults/theme.js'
import { Link } from 'react-router-dom'

const Welcome = () => {
	return(
		<MuiThemeProvider theme={theme}>
			<WelcomeContainer>
				<TypographyField>
					<Content>
						<WhiteTypography component="h2" variant="h1">ようこそ</WhiteTypography>
						<WhiteTypography component="h2" variant="display1">早速体験してみましょう！</WhiteTypography>
						<ButtonContainer>
							<LinkTo to="/signup">
								<SignupButton color="primary" variant="contained">
									新規登録
								</SignupButton>
							</LinkTo>
							<LinkTo to="/signin">
								<SigninButton color="secondary" variant="contained">
									ログイン
								</SigninButton>
							</LinkTo>
						</ButtonContainer>
					</Content>
				</TypographyField>
			</WelcomeContainer>
		</MuiThemeProvider>
	)
}

const WelcomeContainer = styled.div `
	width: 100%;
	height: 100%;
	background: url(./welcome.jpg) no-repeat center center;
	background-size: cover;
`

const ButtonContainer = styled.div `
	width: 100%;
	height: 150px;
	display: flex;
	justify-content: center;
`

const TypographyField = styled.div `
	width: 100%;
	height: 1200px;
	background-color: rgba(102,180,206,0.9);
	text-align: center;
	position: relative;
`
const Content = styled.div `
	width: 80%;
	height: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50%);
	text-align: center;
`

const WhiteTypography = withStyles({
	root: {
		color: 'white',
		marginTop:'20px'
	}
})(Typography)

const SignupButton = withStyles({
  root: {
    background: `${theme.palette.primary.main}`,
    fontSize: '30px',
    color: 'white',
    width: '200px',
    height: '55px',
		marginTop: '40px',
		textDecoration: 'none',
		marginRight: '5px'
}

})(Button)

const SigninButton = withStyles({
  root: {
    background: `${theme.palette.secondary.main}`,
    fontSize: '30px',
    color: 'white',
    width: '200px',
    height: '55px',
		marginTop: '40px',
		textDecoration: 'none',
		marginLeft: '5px'
}

})(Button)

const LinkTo = styled(Link)`
	text-decoration: none;
`

export default Welcome
