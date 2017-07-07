import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Notebook from './Notebook.js';
import Login from './Login.js';
import PrivateRoute from './PrivateRoute.js';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/notebook">Protected Page</Link></li>
      </ul>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/notebook" component={Notebook}/>
    </div>
  </Router>
);

export default Routes;
