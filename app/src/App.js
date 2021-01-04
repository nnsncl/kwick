import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ProvideAuth } from './hooks/use-auth';

import { Signup, Signin, Chat } from './pages';

function App() {

  return (
    <ProvideAuth>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/signup">
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
