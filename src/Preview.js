import React, { Component } from 'react';
import Markdown from 'react-remarkable';
import '../styles/preview.css';

class Preview extends Component {
  constructor(props) {
      super(props);
      this.state = {noteText: ''};
      this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.noteText !== this.state.noteText) {
      this.setState({noteText: props.noteText});
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className={"preview"}>
        <Markdown source={this.state.noteText}>
        </Markdown>
      </div>
    );
  }
}

export default Preview;
