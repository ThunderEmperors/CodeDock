import { useState } from 'react'
import './App.css'
import SnippetDeck from './components/snippetDeck/SnippetDeck'
import ProjectDeck from './components/projectDeck/ProjectDeck'
import EditorDeck from './components/editorDeck/EditorDeck'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main-container flex'>
      <SnippetDeck />
      <ProjectDeck />
      <EditorDeck />
    </div>
    </>
  )
}

export default App
