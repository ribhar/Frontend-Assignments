import { useState } from 'react'

import './App.css'
import { Button } from './components/Button'

function App() {
  const [theme,setTheme]= useState("light")

  return (
    <div className="App">
      <h3>Theme is {theme}</h3>
      
      <Button onClick={()=>{
        setTheme(theme === "light" ? "dark" : "light" )
      }}>Red Ghost</Button>
    </div>
  )
}

export default App
