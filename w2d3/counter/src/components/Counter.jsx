import React, { useState } from 'react'

const Counter = () => {

    const [counter,setCounter] = useState(0);

  return (
    <div>

      <h2 data-testid="counter">Counter {counter}</h2>

      <button data-testid="addBtn" onClick={()=>setCounter(counter+5)}>Add</button>

      <button data-testid="reduceBtn" onClick={()=>setCounter(counter-5)}>Reduce</button>

    </div>

  )
  
}

export default Counter