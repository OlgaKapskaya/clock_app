import './App.css'
import { Clock } from '../features/clock/Clock'
import { useState } from 'react'
import { Header } from './header/Header'

function App() {
  const [value, setValue] = useState<number>(1)

  return (
    <div className="App">
      <Header value={value} onChange={setValue}/>
      <Clock count={value}/>
    </div>
  )
}

export default App
