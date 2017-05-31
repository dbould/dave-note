import React, { Component } from 'react';
import '../styles/notebook.css';
import NoteTitle from './NoteTitle.js';
import Editor from './Editor.js';

class Notebook extends Component {
  constructor(props) {
      super(props);
      this.state = {notes: [], selectedNoteTitle: '', selectedNoteText: ''};
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
          selectedNoteTitle: json.title,
          selectedNoteText: json.note
        });
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
      <div id="main-container">
        <div className={"notebook"}>
          <div>{ notes }</div>
        </div>
        <NoteTitle noteTitle={this.state.selectedNoteTitle} />
        <Editor noteText={this.state.selectedNoteText} />
      </div>
    );
  }
}

export default Notebook;
