import React, {useState, useEffect} from 'react';

import InputTextArea from './components/InputTextArea';
import OutputTextArea from './components/OutputTextArea';
import marked from 'marked';

import {initialText} from './initial_text';

function App() {

  const [inputText, setInputText] = useState(null);
  const [outputText, setOutputText] = useState(null);

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
    <div className="App">
      <h1>Write here</h1>
      <textarea onChange={handleInputText} id="editor" cols="100" rows="20" value={inputText}/>

      <h2>Preview it</h2>
      {outputText?<div dangerouslySetInnerHTML={{__html: outputText}} id="preview"></div>: <div id="preview"></div>}
    </div>
  );
}

export default App;
