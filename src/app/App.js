import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Result from '../components/questionResult/questionResult'
import List from '../containers/List'
import Question from '../components/question/question'
import Home from '../components/home/home'
import MenuBar from '../components/general/appbar'
import Welcome from '../components/welcome/welcome'
import configureStore from '../store/index'

const store = configureStore()


export default class App extends Component {



  //firebaseという変数は使えないよ
  ComponentWillMount() {
  }

  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <AppDiv>
              <MenuBar/>
              <Switch>
                <Route exact path='/' render={() => <Home />} />
                <Route exact path='/welcome' render={() => <Welcome />} />
                <Route exact path='/question/:questionId' component={Question} />
                <Route exact path='/result' render={() => <Result/> }  />
                <Route exact path='/list' render={() => <List/> } />
              </Switch>
            </AppDiv>
          </BrowserRouter>
        </Provider>
    );
  }
}

const AppDiv = styled.div`
  width: 100%;
  height: 1000px;
`
