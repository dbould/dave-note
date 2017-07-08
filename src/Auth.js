import React, { Component } from 'react';

const Auth = {
  userId: '',
  email: '',
  password: '',
  token: '',
  isAuthenticated: false,

  authenticate(cb, email, password) {
    if (email === 'dbould@gmail.com' && password === 'password') {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    } else {
      alert('Incorrect username and password');
    }
  },

  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

export default Auth;
