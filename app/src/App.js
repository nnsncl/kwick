import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ProvideAuth } from './hooks/use-auth';

import { Signup } from './pages';

function App() {

  return (
    <ProvideAuth>
      <Router>
          <Switch>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
