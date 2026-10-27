import { useState } from "react"

const AddTasks =()=>{

  const [tasks, setTasks] = useState<string[]> ([]);
  const [input, setInput] = useState<string>("");
  
  const addTask =()=>{
    setTasks([...tasks, input]);
    setInput("")
  }

  return (
    <>
      <h1>Forms Action</h1>
      <div>
        <input type="text" onChange={(e)=>{ setInput(e.target.value) }} value={input}/>
        <button onClick={addTask}>Add Tasks</button>
      </div>
      <ul>
        {tasks.map((item, index)=><li key={index}> {item} </li>)}
      </ul>
    </>
  )

}

export default AddTasks;