import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './components/Button'

function App() {
  const [theme,setTheme]= useState("light")

  return (
    <div className="App">
      <h3>Theme is {theme}</h3>
      
      <Button onClick={()=>{
        setTheme()
      }}>Red Ghost</Button>
    </div>
  )
}

export default App
