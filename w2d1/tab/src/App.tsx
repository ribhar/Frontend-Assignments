import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Tab from './components/Tab'

function App() {
const data =[
  {title:"One",desc: "One!"},
  {title:"Two",desc: "Two!"},
  {title:"Three",desc: "Three!"}
]
  return (
    <div className="App">         
    <Tab data={data}/>
    </div>
  )
}

export default App
