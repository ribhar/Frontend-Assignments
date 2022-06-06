import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PinBox from './components/PinBox'

function App() {
  const [value, setValue] = useState("")
  const handleChange = (pin: string)=>{
    setValue(pin)
  }

  return (
    <>
    <div className="App">
      <PinBox length={5} onChange={handleChange} />
    </div>
    <h3>{value}</h3>
    </>
    
  )
}

export default App
