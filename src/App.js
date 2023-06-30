import "./styles.css";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  const [count, setCount] = useState(10);
  const [score, setScore] = useState(0);
  useEffect(()=>{
    setTimeout(()=>setCount(count-1),1000);
    }
  ,[count>0?count:null]);

  const increment = ()=>{
    setScore(score+1);
  }
  return (
    <div className="App">
      <h1>score : {score}</h1>
      <h1>Time Left :{count>0?count:" 0"} seconds </h1>
      {count>0?<button onClick = {increment}>+</button>:null}
      
    </div>
  );
}
