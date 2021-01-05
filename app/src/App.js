import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProvideAuth } from './hooks/use-auth';

import { Signup, Signin, Chat } from './pages';

function App() {

  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
