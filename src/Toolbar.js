import React, { Component } from 'react';
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import Auth from './Auth.js';

class Toolbar extends Component {
  constructor(props) {
      super(props);
      this.createNote = this.createNote.bind(this);
      this.updateNote = this.updateNote.bind(this);
      this.deleteNote = this.deleteNote.bind(this);
  }

  createNote() {
    this.props.createNote();
  }

  updateNote() {
    this.props.updateNote();
  }

  deleteNote() {
    this.prop.deleteNote();
  }

  render() {
    return(
      <div id="toolbar">
        <div>
          <div className="toolbar-button">
            <a href="#" onClick={this.createNote}>Create New</a>
          </div>
          <div className="toolbar-button">
            <a href="#" onClick={this.updateNote}>Update</a>
          </div>
          <div className="toolbar-button">
            <a href="#" onClick={this.deleteNote}>Delete</a>
          </div>
          <div className="toolbar-button">
            <a href="#" onClick={() => {
              Auth.signout()
            }}>Logout</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
