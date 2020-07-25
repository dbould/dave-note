import React, { Component } from 'react';
import '../styles/App.css';
import Notebook from './Notebook.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Routes from './routes.js';
import PrivateRoute from './PrivateRoute.js';
import fakeAuth from './FakeAuth.js';

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        userId: 0
      };
  }

  render() {

    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
