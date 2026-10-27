import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./store/counterSlice";
import { concate } from "./store/greetSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  console.log(count)
  const dispatch = useDispatch();
  const greetString = useSelector((state)=>{console.log(state); state.greet.value})
  return (
    <>
      <h1>Helloooo</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <div>Count: {count}</div>
      <button onClick={()=> dispatch(concate())}>Greet Me</button>
      <div>Greet: {greetString}</div>
    </>
  );
}

export default App;
