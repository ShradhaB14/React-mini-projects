import { useState } from "react";

const MultipleCheckBox =()=>{
const [fruit, setFruits] = useState<string[]>([])

const [veggie, setVeggies] = useState<string[]>([])



const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
 
   setFruits(prev => e.target.checked ? [...prev, e.target.value] : prev.filter((item)=>item !== e.target.value))
}

const handleVeggie =(e: React.ChangeEvent<HTMLInputElement>)=>{
  setVeggies(prev=> e.target.checked ? [...prev, e.target.value] : prev.filter((item)=> item!==e.target.value))
}
 

return(
  <>
    Mango<input type="checkbox" value='mango' onChange={handleChange}/>
    Apple<input type="checkbox" value='apple' onChange={handleChange}/>
    Banana<input type="checkbox" value='banana' onChange={handleChange}/>
    Kiwi<input type="checkbox" value='kiwi' onChange={handleChange}/>

    <div>Selected Fruit : {fruit.join(',')}</div>
    <hr />
    Tomato <input type="checkbox" value="tomato" onChange={handleVeggie}/>
    Onion <input type="checkbox" value="onion" onChange={handleVeggie}/>
    Potato <input type="checkbox" value="potato" onChange={handleVeggie}/>
    Carrot <input type="checkbox" value="carrot" onChange={handleVeggie}/>

    <div>Selected Veggie is : {veggie.join(',')}</div>
  </>
)

}
export default MultipleCheckBox;