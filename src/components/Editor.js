import React from 'react';

const Editor = props => (
  <textarea id='editor' className='markdown-code' onChange={props.changed}>
    {props.value}
  </textarea>
);

export default Editor;
