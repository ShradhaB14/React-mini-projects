import { useState } from "react"
import './Registration.css'

const Registration =()=>{

  
type FormDataType = {
  fname: string;
  lname: string;
  age: string;
  gender: string;
  address: string;
  state: string;
  country: string;
  email: string;
  password: string;
  confirmPaswd: string;
  techstack: string[];
};


  const [formData, setFormData] = useState<FormDataType>({
    fname: '',
    lname:'',
    age: '',
    gender: '', 
    address: '',   
    state: '',
    country:'',
    email:'',
    password: '',
    confirmPaswd: '',
    techstack: []
  })

  const handleTechStackChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setFormData((prev)=>({
      ...prev,
      techstack: e.target.checked ? [...prev.techstack, e.target.value]: prev.techstack.filter((item)=> item !== e.target.value)
    }))
  }

  const onSubmit =()=> {
    console.log(formData)
  }

  return(
    <>
      <div>
          <div>
            First Name<input type="text" value={formData.fname} onChange={(e)=> setFormData({...formData, fname:e.target.value})}/>
            Last Name<input type="text" value={formData.lname} onChange={(e)=>setFormData({...formData, lname:e.target.value})}/>
            Profile Picture <input type="text" />
          </div>
          <div>
            Age <input type="calendar" />
            Gender: Male <input type="radio" value={formData.gender} onChange={(e)=>setFormData({...formData, gender:e.target.value})}/> 
            Female <input type="radio" value={formData.gender} onChange={(e)=>setFormData({...formData, gender:e.target.value})}/>
          </div>
          <div>
            <textarea name="" id="" value={formData.address} onChange={(e)=>setFormData({...formData, address:e.target.value})}>Address</textarea>
            State <span>Dropdown</span>
          </div>
          <div>
            Email<input type="text" value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
            Password<input type="password" value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})}/>
            Confirm Password <input type="text" value={formData.confirmPaswd} onChange={(e)=>setFormData({...formData, confirmPaswd:e.target.value})}/>
          </div>
          <div>
            Techstack: 
            React<input type="checkbox" name="" id="" value="React" onChange={handleTechStackChange}/>
            Node<input type="checkbox" name="" id="" value="Node" onChange={handleTechStackChange}/>
            Angular<input type="checkbox" name="" id="" value="Angular" onChange={handleTechStackChange}/>
          </div>
          <button onClick={onSubmit}>Submit</button>

      </div>
    </>
  )
}
export default Registration 
// fname,lname, (input box), profile picture(file)
// age (calendar), // gender(radio), 
// address (textarea), 
// state(dropdown), country(dropdown).
// email(input), password(input), confirm paswd(input)
// techstack(checkbox)
// button
