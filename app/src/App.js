import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Signup } from './pages';


function App() {

  return (
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
