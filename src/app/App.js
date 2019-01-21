import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components'
import { Switch } from 'react-router-dom'
import Result from '../components/questionResult/questionResult'
import List from '../containers/List'
import Question from '../containers/question'
import Home from '../components/home/home'
import MenuBar from '../components/general/appbar'
import Welcome from '../components/welcome/welcome'
import Signup from '../containers/Signup'
import { ConnectedRouter,syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import { Router, Route, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';


const history = createHistory()

const loggerMiddleware = createLogger();

const middlewares = routerMiddleware(history)


function configureStore() {
	return createStore(
		rootReducer,
		applyMiddleware(
			thunk,
			loggerMiddleware,
			middlewares
		)
	)
}

const store = configureStore()



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin : false
    }
  }


  //firebaseという変数は使えないよ
  ComponentWillMount() {
  }

  render() {
    const { isLogin } = this.props
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <AppDiv>
              {isLogin &&
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
              {!isLogin &&
                <React.Fragment>
                  <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/signup' component={Signup} />
                  </Switch>
                </React.Fragment>
              }
            </AppDiv>
          </ConnectedRouter>
        </Provider>
    );
  }
}

const AppDiv = styled.div`
  width: 100%;
  height: 1000px;
`
