import { useState } from 'react'

import './App.css'

function App() {

  const [number, setNumber] = useState(0)
  const [inputNumber, setInputNumber] = useState(0)

  const handleOperation = (operation) => {

    let result;
    
    if( operation === 'add'){
      result  = number + 1 
    } else {
      result = number - 1 
    }
    setNumber(result)

  }

  const handleSum = (num) => {
    const intNum = parseInt(num)
    const newNum = number + intNum
    
    setNumber(newNum)
  }

  return (
    <> 
      <div className='div1'>
          <button
            onClick={() => handleOperation('substract')}
          >
            remove
          </button>
          <div className='numero'>
            {number}
          </div>
          <button
            onClick={() => handleOperation('add')}
          >
            add
          </button>

      </div>
      <div className='div2'>
        <form >
          <input
          type="number"
          placeholder='0'
          onChange={e => setInputNumber(e.target.value)}
          />
        </form>
        <button
          onClick={() => handleSum(inputNumber)}
        >
          add
        </button>
      </div>
    </>
  )
}

export default App
