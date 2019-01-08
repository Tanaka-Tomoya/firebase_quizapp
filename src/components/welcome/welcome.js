import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'



const Welcome = () => {
	return(
		<WelcomeContainer>
			<TypographyField></TypographyField>
		</WelcomeContainer>
	)
}

const WelcomeContainer = styled.div `
	width: 100%;
	height: 1067px;
	background: url(${process.env.PUBLIC_URL + '/welcome.jpg'})　;
	background-size:cover;
`
const BackgroundImg = styled.img `
	width: 100%;
	height: 1000px;
	padding-top: 64px;
`

const TypographyField = styled.div `
	width: 100%;
	height: 1067px;
	background-color: rgba(102,180,206,0.9);
	text-align: center;
`

export default Welcome
