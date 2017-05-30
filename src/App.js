import React, { Component } from 'react';
import '../styles/App.css';
import Notebook from './Notebook.js';
import NoteTitle from './NoteTitle.js';
import Editor from './Editor.js';

class App extends Component {
  render() {
    return (
      <div id="main-container">
        <Notebook />
        <NoteTitle />
        <Editor />
      </div>
    );
  }

}

export default App;
