import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import { Route } from 'react-router'
import { history, configureStore } from '../store/index'
import { firebaseApp } from '../firebase/config'
import Root from '../containers/Root'
import SignupSuccess from '../containers/SignupSuccess'
import { Switch } from 'react-router-dom'

const store = configureStore()



export default class App extends Component {

  componentWillMount() {
  }

  render() {
    const { isLogin } = this.props
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route path='/SignupSuccess' component={SignupSuccess}/>
              <Route path='/' component={Root}/>
            </Switch>
          </ConnectedRouter>
        </Provider>
    );
  }
}
