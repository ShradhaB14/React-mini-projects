import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Counter from '../src/counter'
// import AddTasks from './Components/AddTasks'
// import ConditionalRender from './Components/ConditionalRender'
// import Counter from './Components/Counter'
// import CheckBoxRadio from './Components/Forms/CheckBoxRadio'
// import InputBox from './Components/Forms/InputBox'
// import MultipleCheckBox from './Components/Forms/MultipleCheckBox'
// import Registration from './Components/Forms/RegistrationForm'
// import User from './Components/User'
// import List from './Components/List'

function App() {
 return (<>
 <Header/>
 <Outlet/>
 <Counter></Counter>
  {/* <Counter></Counter>
  <ConditionalRender></ConditionalRender>
  <List></List>
  <AddTasks></AddTasks>
  <InputBox></InputBox>
  <CheckBoxRadio></CheckBoxRadio>
  <MultipleCheckBox></MultipleCheckBox> */}
  {/* <Registration></Registration>
  <User></User> */}
 </>)
}

export default App
