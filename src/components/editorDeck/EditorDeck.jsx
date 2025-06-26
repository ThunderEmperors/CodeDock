import React, { useRef, useState } from 'react'
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import './editorDeck.css'

const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split("\n")
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n");

const EditorDeck = () => {

  const [code, setCode] = useState(
    "var message = 'Monaco Editor!' \nconsole.log(message);"
  );

  return (
    <>
      <div className='flex grow'>
      <Editor
      value={code}
      padding={10}
      onValueChange={(code) => setCode(code)}
      highlight={code => hightlightWithLineNumbers(code, languages.js)}
      
      style={{
        fontFamily: "monospace",
        fontSize: 17,
        border: "1px solid black",
        width: "50vw"        
      }}
      textareaId="codeArea"
      className='editor'
    />
      </div>
    </>
  )
}

export default EditorDeck