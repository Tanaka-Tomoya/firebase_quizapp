import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import { Route } from 'react-router'
import styled from 'styled-components'
import List from '../containers/List'
import Question from '../containers/question'
import Home from '../components/home/home'
import MenuBar from '../components/general/appbar'
import Welcome from '../components/welcome/welcome'
import Signup from '../containers/Signup'
import Result from '../components/questionResult/questionResult'


export default class Root extends Component {
	loginConfirmIfNeeded() {
		if(!localStorage.getItem('uid')){
			this.props.loginConfirm()
		} else {

		}
	}

	componentDidMount() {
		this.loginConfirmIfNeeded()
	}

	componentWillUpdate(nextProps) {
		this.loginConfirmIfNeeded()
	}

	render() {
		const { uid } = this.props.root
		console.log(this.props.root)
		console.log(localStorage.getItem('uid'))
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

// <React.Fragment>
// 	<Switch>
// 		<Route exact path='/' component={Home}/>
// 		<Route exact path='/signup' component={Signup} />
// 	</Switch>
// </React.Fragment>
