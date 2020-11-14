//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';




function Room() {
  const [isLit, setLit] = useState(false);
  let [age, setAge] = useState(23)
    


  return (
    <div>
        This is Room component: Lit = {isLit? 'lit':'dark'}
        <br/>
        Age: {age}
        <br/>
        <button onClick = {() =>setLit(!isLit) } >
          Toggle Light</button>
        <br/>
        
        <button onClick = {() =>{
                                  console.log('Increase Age Button Clicked')
                                  setAge(++age)
                                }}>
          Add Age</button>
    </div>
  );
}

export default Room;
