import React from 'react';

const Editor = props => {
  function createMarkup() {
    return { __html: props.inner };
  }

  return <div id='preview' dangerouslySetInnerHTML={createMarkup()}></div>;
};

export default Editor;
