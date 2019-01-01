import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import configureStore from '../store';
import Result from '../components/questionResult/questionResult'
import List from '../components/questionsList/questionsList'
import Question from '../components/question/question'
import MenuBar from '../components/general/appbar'
import config from './firebase_config';

let store = configureStore();



export default class App extends Component {



  //firebaseという変数は使えないよ
  ComponentWillMount() {
  }

  render() {
    return (
        <Root store={store}>
          <BrowserRouter>
            <AppDiv>
              <MenuBar/>
              <Switch>
                <Route path='/question' render={() => <Question/>}  />
                <Route path='/result' render={() => <Result/> }  />
                <Route path='/list' render={() => <List/ > } />
              </Switch>
            </AppDiv>
          </BrowserRouter>
        </Root>
    );
  }
}

const AppDiv = styled.div`
  width: 100%;
  height: 500px;
`
const Root = styled(Provider) `
  width: 100%;
  height: 1000px;
`
