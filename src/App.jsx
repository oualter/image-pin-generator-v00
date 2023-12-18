import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import ImagePlaceHolder from './components/ImagePlaceHolder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Taguer des épingles sur une image</h1>
      <ImagePlaceHolder />
      <p className="read-the-docs">
        On verra ce que ça donne
      </p>
    </>
  )
}

export default App
