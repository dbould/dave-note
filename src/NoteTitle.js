import React, { Component } from 'react';
import '../styles/note-title.css';

class NoteTitle extends Component {
  constructor(props) {
      super(props);
      this.state = {noteTitle: ''};
      this.handleChange = this.handleChange.bind(this);
      this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  handleChange(event) {
    var noteTitle = event.target.value;
    this.setState({noteTitle: noteTitle});
  }

  componentWillReceiveProps(props) {
    if (props.noteTitle !== this.state.noteTitle) {
      this.setState({noteTitle: props.noteTitle});
      this.forceUpdate();
    }
  }

  render() {

    return (
      <div id="note-title">
        <input id="note-title-input" type="text" value={this.state.noteTitle} ></input>
      </div>
    );
  }
}

export default NoteTitle;
