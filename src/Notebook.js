import React, { Component } from 'react';
import '../styles/notebook.css';
import NoteTitle from './NoteTitle.js';
import Editor from './Editor.js';
import Toolbar from './Toolbar';

class Notebook extends Component {
  constructor(props) {
      super(props);
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.createNote = this.createNote.bind(this);
      this.updateNote = this.updateNote.bind(this);
      this.deleteNote = this.deleteNote.bind(this);
      this.state = {
        notes: [],
        selectedNoteId: 0,
        selectedNoteTitle: '',
        selectedNoteText: '',
        notebook: "notebook-hidden"
      };
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount() {
    this.getNotes();
  }

  handleNavClick() {
    if(this.state.notebook === 'notebook-hidden') {
      this.setState({notebook: 'notebook-visible'});
    } else {
      this.setState({notebook: 'notebook-hidden'});
    }
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
    this.setState({noteId: 0,
                   selectedNoteTitle: '',
                   selectedNoteText: ''}, function() {
                     fetch('http://dave-note-api.dev/api/note/create/', {
                       method: 'post',
                       body: JSON.stringify({
                         title: this.state.selectedNoteTitle,
                         note: this.state.selectedNoteText
                       })}).then(response => response.json())
                           .then(json => {
                           this.setState({
                             selectedNoteId: json
                           });
                       });
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

  deleteNote() {
    fetch('http://dave-note-api.dev/api/note/delete/' + this.state.selectedNoteId, {
      method: 'post',
      body: JSON.stringify({
      })
    });

    this.setState({
      selectedNoteId: 0,
      selectedNoteTitle: '',
      selectedNoteText: ''
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

    if (this.state.selectedNoteId === 0) {
      this.getNote(this.state.selectedNoteId);
    }

    return (
      <div>
        <div id="header">

          <div id="notebook-nav">
            <img src={require("../images/notebook.png")}
                 alt="Notebook Menu"
                 onClick={()=>this.handleNavClick()} />
          </div>

          <div id="title">
            <h1>DaveNote</h1>
          </div>

          <Toolbar createNote={this.createNote}
                   updateNote={this.updateNote}
                   deleteNote={this.deleteNote}
                   history={this.history} />
        </div>

        <div id="main-container">
          <div className={(this.state.notebook)}>
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
