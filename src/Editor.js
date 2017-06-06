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
    this.props.handleTextChange(noteText);
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
          <textarea onChange={this.handleChange} value={this.props.noteText}>

          </textarea>
        </div>
        <Preview noteText={this.props.noteText} />
      </div>
    );
  }
}

export default Editor;
