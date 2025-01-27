import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      const response = await axios.get('/api/products');
      console.log(response);
      setProducts(response.data)
    })()

  }, [])


  return (
    <>
      <h1>API Handling</h1>
      <h2>Number of products are : {products.length}</h2>
    </>
  )
}

export default App
