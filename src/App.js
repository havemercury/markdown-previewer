import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
// import { render } from '@testing-library/react';
import DOMPurify from 'dompurify';
import marked from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '# Hello'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const clean = DOMPurify.sanitize(this.state.value);
    return (
      <div className='App grid'>
        <div className='col-1 heading'>Editor</div>
        <div className='col-2 heading'>Preview</div>

        <div className='grid-item col-1'>
          <Editor value={this.state.value} changed={this.handleChange} />
        </div>

        <div className='grid-item col-2'>
          <div className='preview-container'>
            <Preview inner={marked(clean)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
