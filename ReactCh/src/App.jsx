import { useState } from 'react'

import './App.css'

function App() {

  const[buttonState, setButtonState] = useState(false)

  const handleClick = e => {
    e.preventDefault()

  }

  return (
    <>
        <button
          onClick={() => handleClick(setButtonState(!buttonState))}
        >
          Show/Hide
        </button>

        <div>
        { buttonState ? 'Welcome to react challenges' : '' }
        </div>

    </>
  )
}

export default App
