import { useState } from 'react'
import './App.css'
import ElementBuilder from './components/snippetDeck/ElementBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='main-container flex'>
      <ElementBuilder />
    </div>
    </>
  )
}

export default App
