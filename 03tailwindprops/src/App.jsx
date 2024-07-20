
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  let myobj = {
    username: 'vijay',
    age: 22
  }

  let newArr = [1, 2, 3]

  return (
    <>

      <h1 className='bg-green-400 text-bold p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="chaiaurcode" btnText="Click me" />
      <Card username="Vijay" btnText="visit me" />

    </>
  )
}

export default App
