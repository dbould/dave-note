import React, { Component } from 'react';
import '../styles/notebook.css';
import NoteTitle from './NoteTitle.js';
import Editor from './Editor.js';

class Notebook extends Component {
  constructor(props) {
      super(props);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.state = {notes: [], selectedNoteId: 0, selectedNoteTitle: '', selectedNoteText: ''};
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes() {
    fetch('http://dave-note-api.dev/api/notes')
      .then(response => response.json())
      .then(json => {
        this.setState({
          notes: json
        });
      });
  }

  getNote(id) {
    fetch('http://dave-note-api.dev/api/note/' + id)
      .then(response => response.json())
      .then(json => {
        this.setState({
          selectedNoteId: json.id,
          selectedNoteTitle: json.title,
          selectedNoteText: json.note
        });
      });
  }

  handleTitleChange(noteTitle) {
    this.setState({selectedNoteTitle: noteTitle});
  }

  handleTextChange(noteText) {
    this.setState({selectedNoteText: noteText});
  }

  createNote() {
    this.setState({noteId: 0, selectedNoteTitle: '', selectedNoteText: ''});

    fetch('http://dave-note-api.dev/api/note/create/', {
      method: 'post',
      body: JSON.stringify({
        title: this.state.selectedNoteTitle,
        note: this.state.selectedNoteText
      })
    });
  }

  updateNote() {
    fetch('http://dave-note-api.dev/api/note/update/' + this.state.selectedNoteId, {
      method: 'post',
      body: JSON.stringify({
        title: this.state.selectedNoteTitle,
        note: this.state.selectedNoteText
      })
    });
  }

  render() {
    var notes = this.state.notes.map((note, key) => {
      return (<div className="noteSelect" key={key}>
                <a href="#" onClick={()=>this.getNote(note.id)}>
                  {note.title}
                </a>
              </div>);
    });

    return (
      <div>
        <div id="header">
          <div id="title">
            <h1>Dave Note</h1>
          </div>
          <div id="toolbar">
            <div>
              <div><a href="#" onClick={()=>this.createNote()}>Create New</a></div>
              <div><a href="#" onClick={()=>this.updateNote()}>Update</a></div>
              <div><a href="#">Delete</a></div>
            </div>
          </div>
        </div>
      <div id="main-container">
        <div className={"notebook"}>
          <div>{ notes }</div>
        </div>
        <NoteTitle noteTitle={this.state.selectedNoteTitle} handleTitleChange={this.handleTitleChange} />
        <Editor noteText={this.state.selectedNoteText} handleTextChange={this.handleTextChange} />
      </div>
      </div>
    );
  }
}

export default Notebook;