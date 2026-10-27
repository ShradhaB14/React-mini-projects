import { useState } from "react";

const ConditionalRender = () => {
  
  const [login, setLogin] = useState(false)
  
  return(
  <>
  <h1>Conditional Rendering</h1>
  <div>
    <button onClick={()=>{setLogin(!login)}}>Click Me</button>
    {login ? <h2>Welcome Shradha, you have been logged in </h2> : <h2>Please login</h2>}
  </div>
  </>
  )
}

export default ConditionalRender;