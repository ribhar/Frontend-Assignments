import './App.css';

import Slider from './Component/Slider';

function App() {

  const data = [

    {
      id:1,
      question:"This is question",
      answer: "This is answer"
    },
    {
      id:2,
      question:"This is question2",
      answer: "This is answer2"
    },
    {
      id:3,
      question:"This is question3",
      answer: "This is answer3"
    }
  ]
  return (

    <div className="App">

        <Slider data={data}/>

    </div>

  );
  
}

export default App;