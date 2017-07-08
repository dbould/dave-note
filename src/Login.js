import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import fakeAuth from './FakeAuth.js';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <h2 className="card-heading">Login</h2>

        <div className="field-line">
          <input
            floatingLabelText="Email"
            name="email"
            value='email'
          />
        </div>

        <div className="field-line">
          <input
            floatingLabelText="Password"
            type="password"
            name="password"
            value='password'
          />
        </div>

        <div className="button-line">
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={this.login}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
