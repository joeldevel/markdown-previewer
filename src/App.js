import React, {useState, useEffect} from 'react';

import marked from 'marked';

import {initialText} from './initial_text';

function App() {

  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const  handleInputText = (e) => {
      setInputText(e.target.value);
  };

  useEffect( () => {
      marked.setOptions({breaks:true});
      const o = inputText? marked(inputText): "";
      setOutputText(o);
  });

  useEffect(()=>{
      setInputText(initialText);
  },[]);

  return (
    <div className="app">
        <div className="panel">
            <h2 className="panel-title">source</h2>
            <textarea
                onChange={handleInputText}
                id="editor"
                value={inputText}
                className="editor"
            />
        </div>
        <div className="panel">
            <h2 className="panel-title">preview</h2>
            {outputText?<div className="preview-panel" dangerouslySetInnerHTML={{__html: outputText}} id="preview"></div>: <div id="preview"></div>}
        </div>
    </div>
  );
}

export default App;
