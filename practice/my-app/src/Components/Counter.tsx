import { useState } from "react";

const Counter=()=>{
const [count, setCount] = useState(0)


return (<><h1>Hello from shradha your count is {count}</h1>
  <button onClick={()=> setCount(count+1)}>Add</button>
  <button onClick={()=> setCount(count-1)}>Decrement</button>
  <button onClick={()=> setCount(0)}>Reset</button></>)
}

export default Counter;


