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
      <Redirect to={{
        pathname: '/notebook'
      }}/>
      <Route path="/login" component={Login}/>
      <Route path="/notebook" component={Notebook}/>
    </div>
  </Router>
);

export default Routes;
