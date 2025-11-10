import { useState } from 'react'
import './App.css'
import Count from "./Components/Count"

function App() {
  const [count, setCount] = useState(0)  // alerede funker

  return (
    <div>
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />
      <Count count={count} setCount={setCount} />
    </div>
  )
}

export default App
