import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useTimeout } from './hooks/useTimeout';

function App():any {

  const toshow = useTimeout(5);

  if(!toshow){
    return "waiting for timer"
  }
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <h1 style={{color:"red"}}>Hello</h1>
    </div>
  );
}

export default App;
