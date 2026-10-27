import { useState } from "react";

const CheckBoxRadio =()=>{

  const [skills, setSkills] = useState<string[]>([]);

  const [gender, setGender] = useState("");

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setSkills((prev)=>e.target.checked ? [...prev, e.target.value] : prev.filter((s)=> s!== e.target.value))
  }

  const handleRadioChange=(e: React.ChangeEvent<HTMLInputElement>)=> {
    setGender(e.target.value);
  }
return(<>
    <div>
      React<input type="checkbox" id="react" value='react' onChange={handleChange} checked={skills.includes('react')}/>
      Node<input type="checkbox" id="node" value='node' onChange={handleChange} checked={skills.includes('node')}/>
      Angular<input type="checkbox" id="angular" value='angular' onChange={handleChange} checked={skills.includes('angular')}/>
    </div>

    <div>Selected Skills are : {skills.join(',')}</div>
    <hr />
    <h4>Radio Button</h4>
    <div>
      Male <input type="radio" name="gender" onChange={handleRadioChange} value="male"></input>
      Female <input type="radio" name="gender" onChange={handleRadioChange} value="female"></input>
    </div>
    <div>You have selected : {gender}</div>
</>)

}
export default CheckBoxRadio;



