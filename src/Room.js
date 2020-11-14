//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';




function Room() {
  const [isLit, setLit] = useState(false);
    
  function butt(){
    console.log('On Click')
    setLit(!isLit) 
  }
  
  return (
    <div>
        This is Room component: Lit = {isLit? 'lit':'dark'}
        <br/>
        <button onClick = {butt}>Toggle Light</button>
    </div>
  );
}

export default Room;
