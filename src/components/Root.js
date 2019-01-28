import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import { Route } from 'react-router'
import styled from 'styled-components'
import List from '../containers/List'
import Question from '../containers/question'
import Home from '../components/Home/Home'
import MenuBar from '../containers/Appbar'
import Signup from '../containers/Signup'
import Signin from '../containers/Signin'
import SignupSuccess from '../containers/SignupSuccess'
import Welcome from './welcome/welcome'
import Result from '../components/questionResult/questionResult'
import { firebaseApp } from '../firebase/config'


export default class Root extends Component {

	componentDidMount() {
		this.props.loginConfirm()
	}

	componentWillUpdate(nextProps) {
	}

	render() {
		const { isLoading } = this.props.root
		const { hasError } = this.props.root
		const { isUser } = this.props.root
		const { url } = this.props.match
		console.log(this.props.match.url)
		console.log(this.props.match)
		if(isLoading) {
			return(
				<Info>aaa</Info>
			)
		}else if(isUser){
			return(
				<AppDiv>
					<MenuBar/>
					<Switch>
						<Route exact path={`${url}`} component={Home} />
						<Route path={`${url}question/:questionId/:questionNumber`} component={Question} />
						<Route path={`${url}result`} component={Result}  />
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
