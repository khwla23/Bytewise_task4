import { useId, useState } from 'react'
import Greet from './Greet';
import Message from './Message';
import './App.css'
//props are the arguments pass to the function, (handled outside of a component)(parent to child pass ==> immutable = value can not be change)
//state are like the variable in the function, (handled inside of a component)(can be changed)
function App() {
  return(
    <div className='App'>
      <h3 className='div1'>--Using Props--</h3>
      <Greet fname = "khwla" lname = "Akbar"> <p>"Come To The Party" </p></Greet>
      <Greet fname = "sheza" lname = "Akbar"> <button>Invite</button></Greet>
      <Greet fname = "zarar" lname = "Khan"> <a href = "#">click the invite</a></Greet>
      <Message/>
    </div>
  );
}

export default App
