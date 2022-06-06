
   
import React, { useState } from "react";

import Button from "./Button";


const Slider = ({ data }) => {

  const [value, setValue] = useState(0);

  return (

    <div data-testid="slider">

      {data.map((el, ind) => {

        if (ind === value) {

          return (

            <div key={ind}>
                
              <h3 data-testid='question'>{el.question}</h3>

              <p data-testid='answer'>{el.answer}</p>

            </div>

          );

        }

        return false

      })}
      <div>

        <Button data-testid='next_btn' disabled={value===data.length-1?true:false} onClick={()=>setValue(value+1)}>Next</Button>
        
        <Button data-testid='prev_btn' disabled={value===0?true:false} onClick={()=>setValue(value-1)}>Prev</Button>
      </div>
    </div>
  );
};

export default Slider;
