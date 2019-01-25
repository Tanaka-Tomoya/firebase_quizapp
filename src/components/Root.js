import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import { Route } from 'react-router'
import styled from 'styled-components'
import List from '../containers/List'
import Question from '../containers/question'
import Home from '../components/home/home'
import MenuBar from '../containers/Appbar'
import Welcome from '../components/welcome/welcome'
import Signup from '../containers/Signup'
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
		if(isLoading) {
			return(
				<Info>aaa</Info>
			)
		}else if(isUser){
			return(
				<AppDiv>
					<MenuBar/>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/welcome' render={() => <Welcome />} />
						<Route exact path='/question/:questionId/:questionNumber' component={Question} />
						<Route exact path='/result' render={() => <Result/> }  />
						<Route exact path='/list' render={() => <List/> } />
					</Switch>
				</AppDiv>
			)
		}else if(!isUser) {
			return(
				<AppDiv>
					<Route exact path='/' component={Signup} />
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
