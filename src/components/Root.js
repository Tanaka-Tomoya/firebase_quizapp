import React, { Component } from 'react';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { Switch } from 'react-router-dom'
import { Route } from 'react-router'
import styled from 'styled-components'
import List from '../containers/List'
import Question from '../containers/question'
import Home from '../components/Home/Home'
import MenuBar from '../containers/Appbar'
import Signup from '../containers/Signup'
import Signin from '../containers/Signin'
import Welcome from './welcome/welcome'
import CircularProgress from '@material-ui/core/CircularProgress';
import { theme } from '../ults/theme'



export default class Root extends Component {

	componentDidMount() {
		this.props.loginConfirm()
	}

	render() {
		const { isLoading } = this.props.root
		const { isUser } = this.props.root
		const { url } = this.props.match
		if(isLoading) {
			return(
				<MuiThemeProvider theme={theme}>
					<Container>
						<Progress color="primary"/>
					</Container>
				</MuiThemeProvider>
			)
		}else if(isUser){
			return(
				<AppDiv>
					<MenuBar/>
					<Switch>
						<Route exact path={`${url}`} component={Home} />
						<Route path={`${url}question/:questionId`} component={Question} />
						<Route exact path={`${url}list`} component={List} />
					</Switch>
				</AppDiv>
			)
		}else if(!isUser) {
			return(
				<AppDiv>
					<Switch>
						<Route  exact path='/' component={Welcome} />
						<Route  path='/signup' component={Signup} />
						<Route  path='/signin' component={Signin} />
					</Switch>
				</AppDiv>
			)
		}
	}
}

const AppDiv = styled.div`
  width: 100%;
  height: 1000px;
`
const Info = styled.div`
	margin-top: 200px;
`

const Container = styled.div`
	height: 1000px;
	width: 100%;
	position: relative;
	text-align: center
`

const Progress = withStyles({
	root: {
		top: '30%',
		left: '50%',
		position: 'absolute',
		width: '100%',
		height: '100%'

	}
})(CircularProgress)
