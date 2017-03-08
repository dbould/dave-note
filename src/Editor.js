import React, { Component } from 'react';
import Preview from './Preview.js';
import styles from '../styles/editor.css';

class Editor extends Component {
  constructor(props) {
      super(props);
      this.state = {noteText: null};

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var noteText = event.target.value;
    this.setState({noteText: noteText});
  }

  render() {
    return (
      <div>
        <div className={"editor"}>
          <textarea onChange={this.handleChange}>
          </textarea>
        </div>
        <div>
          <Preview noteText={this.state.noteText} />
        </div>
      </div>
    );
  }
}

export default Editor;