import React, { Component } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router";
import { history, configureStore } from "../store/index";
import Root from "../containers/Root";
import SignupSuccess from "../containers/SignupSuccess";
import { Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const store = configureStore();
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=M+PLUS+1p');
body html {
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 800;
}
`;

export default class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/SignupSuccess" component={SignupSuccess} />
            <Route path="/" component={Root} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}
