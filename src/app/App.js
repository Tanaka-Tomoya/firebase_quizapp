import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import configureStore from '../store';
import Result from '../components/questions_list/questions_list'
import Question from '../components/question/question'
import Bar from '../components/general/appbar'
import config from './firebase_config';

let store = configureStore();



export default class App extends Component {



  //firebaseという変数は使えないよ
  ComponentWillMount() {
  }

  render() {
    console.log(this.state)
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <AppDiv>
              <AppBar/>
              <Switch>
                <Route path='/question' render={() => <Question/>}  />
                <Route path='/result' render={() => <Result/> }  />
              </Switch>
            </AppDiv>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

const AppDiv = styled.div`
  width: 100%;
  height: 500px;
`

const AppBar = styled(Bar)`
  width:100%
  height: 50px;
`
