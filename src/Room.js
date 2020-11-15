//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import './Room.css'




function Room() {
  const [isLit, setLit] = useState(false);
  let [age, setAge] = useState(23)
  let [temp, setTemp] = useState(73)
    

//BACKTICK is enclosing `room` in classname
  return (
    <div className ={`room ${isLit? "lit":"dark"}`}>  
        This is Room component: {isLit? 'lit':'dark'}
        <br/>
        Age: {age}
        <br/>
        Temperature: {temp}
        <br/>
        <button style = {{color : 'red'}} onClick = {() =>setLit(!isLit) } >
          Toggle Light</button>
        <br/>
        
        <button style = {{color : 'green'}} onClick = {() =>setLit(true) } >
          ON Light</button>
        <br/>

        <button style = {{color : 'black'}} onClick = {() =>setLit(false) } >
          OFF Light</button>
        <br/>

        <button style= {{color : 'blue'}}  onClick = {() =>{
                                  console.log('Increase Age Button Clicked')
                                  setAge(++age)
                                }}>
          Add Age</button>
        <br/>
        <button onClick = {() =>{
                                  console.log('Increase Temp Button Clicked')
                                  setTemp(++temp)
                                }}>
          +</button>
          <button onClick = {() =>{
                                  console.log('Increase Temp Button Clicked')
                                  setTemp(--temp)
                                }}>
          -</button>
    </div>
  );
}

export default Room;
