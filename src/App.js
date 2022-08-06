import React,{useState} from 'react';
import './App.css';



function App() {

  const [text,setText]= useState("");
  const [count ,setCount] = useState(0);

  const onChangeHandler=(event)=>{
    setText(event.target.value);
 }
  const onClickHandler =()=>{
    setCount(count=>count+1);
  }
  const onClickHandlerRemove =()=>{
    setCount(count=>count-1);
  }

  return (
    <div className="App">
    <h3>Enter your text</h3>
      <input onChange={onChangeHandler} type="text"/>
    <h1>{text}</h1>
    <div className="count">
    <h2>count: {count}</h2>
    <button onClick={onClickHandler}>+ </button> 
    <button onClick={onClickHandlerRemove}> -</button>


    </div>
    </div>
  );
}

export default App;
