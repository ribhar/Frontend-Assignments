import axios from "axios";

import { useEffect, useState } from "react";

import "./App.css";

function App() {

  const [form, setForm] = useState({});

  const [d, setD] = useState([]);

  const [error,setError] = useState(false);

  const handleChange = (e) => {

    const inputName = e.target.name;

    setForm({

      ...form,

      [inputName]: e.target.value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    sendData(form);

  };

  const getData = () => {

    axios.get("http://localhost:8080/form").then(({ data }) => setD(data));

  };

  const sendData = (payload) => {

    axios
    
      .post("http://localhost:8080/form", payload)
      .then(({ data }) => {

        setError(false);

        setD([...d, data])})
      .catch((err)=>setError(true))
  };

  useEffect(() => {

    getData();

  }, []);

  return (

    <div className="App">

      <form className="form" onSubmit={handleSubmit}>

        <label>Name: </label>{" "}

        <input onChange={handleChange} name="name" type="text" placeholder="Enter your name" className="input-name"/>
        <label>Age: </label>{" "}

        <input onChange={handleChange} name="age" type="number" placeholder="Enter your age" className="input-age"/>
        <input className="submit-btn" type="submit" value="Submit" />

      </form>

      <div className="error">{error && <h2 style={{color:"red"}}>Something went wrong</h2>}</div>

      <div className="items">

        {d.map((el, index) => {

          return (

            <div key={index}>

              <h3>

                {el.name}-{el.age}

              </h3>

            </div>

          );

        })}

      </div>

    </div>

  );
  
}

export default App;