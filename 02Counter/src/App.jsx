
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if (counter == 20)
      setCounter(counter)
    else
      // counter = counter + 1
      setCounter(counter + 1)

  }

  const removeValue = () => {
    if (counter == 1)
      setCounter(counter)
    else
      setCounter(counter - 1)
  }

  return (
    <>

      <h1> React with Vite</h1>
      <h2>Counter Value : {counter}</h2>
      <button
        onClick={addValue}>increase Value {counter} </button>
      <br />
      <button
        onClick={removeValue}
      >Decrese Value {counter} </button>

      <h3>Footer : {counter}</h3>
    </>
  )
}

export default App
