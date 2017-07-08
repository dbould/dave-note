import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Auth from './Auth.js';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  login() {
    Auth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    }, this.state.email, this.state.password)
  }

  handleEmailChange(event) {
    var email = event.target.value;
    this.setState({email: email});
  }

  handlePasswordChange(event) {
    var password = event.target.value;
    this.setState({password: password});
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
        <h2 className = "card-heading">Login</h2>

        <div className = "field-line">
          Email:
          <input
            name = "email"
            onChange = {this.handleEmailChange}
          />
        </div>

        <div className = "field-line">
          Password:
          <input
            type = "password"
            name = "password"
            onChange = {this.handlePasswordChange}
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
