import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import { Route } from 'react-router'
import { history, configureStore } from '../store/index'
import { firebaseApp } from '../firebase/config'
import Root from '../containers/Root'


const store = configureStore()



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin : false
    }
  }

  componentWillMount() {
  }

  render() {
    const { isLogin } = this.props
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Root/>
          </ConnectedRouter>
        </Provider>
    );
  }
}
