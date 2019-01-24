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
	loginConfirmIfNeeded() {
	}

	componentDidMount() {
		//this.loginConfirmIfNeeded()
		firebaseApp.auth().onAuthStateChanged(function(user) {
		  if (user) {
		    // User is signed in.
				console.log(user)
		  } else {
		    // No user is signed in.
				console.log('user not found')
		  }
		});
	}

	componentWillUpdate(nextProps) {
		this.loginConfirmIfNeeded()
	}

	render() {
		const { uid } = this.props.root
		return (
			<AppDiv>
					{localStorage.getItem('uid') &&
						<React.Fragment>
							<MenuBar/>
							<Switch>
								<Route exact path='/' render={() => <Home />} />
								<Route exact path='/welcome' render={() => <Welcome />} />
								<Route exact path='/question/:questionId/:questionNumber' component={Question} />
								<Route exact path='/result' render={() => <Result/> }  />
								<Route exact path='/list' render={() => <List/> } />
							</Switch>
						</React.Fragment>
					}
					{!localStorage.getItem('uid') &&
						<Route exact path='/' component={Signup} />
					}
			</AppDiv>
		)
	}
}

const AppDiv = styled.div`
  width: 100%;
  height: 1000px;
`
