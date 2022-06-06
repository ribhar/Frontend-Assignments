import {SyntheticEvent} from 'react';
import './App.css';
import useMergeState from './hooks/useMerge';

// type formType = {
//   username: string;
//   email: string;
//   password: string;
// }

function App() {

const state  = useMergeState() 
  const handleSubmit = (e:SyntheticEvent)=>{
    e.preventDefault()
    console.log(state)
  }
  return (
    <div className="App">
     <form onSubmit={handleSubmit} >
       <input name='username' type="text" placeholder='Enter Username' />
       <input name='email' type="email" placeholder='Enter Email' />
       <input name='password' type="password" placeholder='Enter Password' />
       <input type="submit" value="submit" />
     </form>
    </div>
  );
}
