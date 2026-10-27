import { useState } from "react"

const InputBox = () =>{

  const [formData, setFormData] = useState({fname: '', lname: '', email:'' })

  const getFormDetails =()=> {
    console.log("hello")
    return (
      <>
        <h1>Hello {formData.fname+ formData.lname} your email Id is {formData.email}</h1>
      </>
    )
  }
  return(
    <>
      <div>
        <input type="text" placeholder="First Name" value={formData.fname} 
        onChange={(e)=>{setFormData({...formData, fname: e.target.value})}}/>
      </div>
      <div>
        <input type="text" placeholder="Last Name" value={formData.lname}
        onChange={(e)=>{ setFormData({...formData, lname: e.target.value}) }}/>
      </div>
      <div>
        <input type="text" placeholder="Email" value={formData.email}
        onChange={(e)=>{ setFormData({...formData, email: e.target.value}) }}/>
      </div>
      <button onClick={getFormDetails}>Submit</button>
    </>
  )

}
export default InputBox