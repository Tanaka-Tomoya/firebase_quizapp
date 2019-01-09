import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Result from '../components/questionResult/questionResult'
import QuestionsList from '../containers/questionsList'
import Question from '../components/question/question'
import Home from '../components/home/home'
import MenuBar from '../components/general/appbar'
import Welcome from '../components/welcome/welcome'
import { compose } from 'redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import rootReducer from '../reducers/index'
import firebaseConfig from '../firebase/config'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
firebase.initializeApp(firebaseConfig);  // #2


const createStoreWithFirebase = compose(
  applyMiddleware(
    thunk.withExtraArgument({getFirebase}),
    loggerMiddleware
  ),
  reactReduxFirebase(firebase, {})
)(createStore);



const store = createStoreWithFirebase(rootReducer);


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
                <Route exact path='/question' render={() => <Question/>}  />
                <Route exact path='/result' render={() => <Result/> }  />
                <Route exact path='/list' render={() => <QuestionsList/> } />
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
