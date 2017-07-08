import React, { Component } from 'react';
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import Auth from './Auth.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute;
