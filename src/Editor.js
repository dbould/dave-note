import React, { Component } from 'react';
import Preview from './Preview.js';
import '../styles/editor.css';

class Editor extends Component {
  constructor(props) {
      super(props);
      this.state = {noteText: ''};
      this.handleChange = this.handleChange.bind(this);
      this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  handleChange(event) {
    var noteText = event.target.value;
    this.setState({noteText: noteText});
  }

  componentWillReceiveProps(props) {
    if (props.noteText !== this.state.noteText) {
      this.setState({noteText: props.noteText});
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        <div className={"editor"}>
          <textarea onChange={this.handleChange} value={this.state.noteText}>

          </textarea>
        </div>
        <Preview noteText={this.state.noteText} />
      </div>
    );
  }
}

export default Editor;
