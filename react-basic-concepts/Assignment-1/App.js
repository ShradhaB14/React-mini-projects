import React from "react"
import ReactDOM from "react-dom/client"


const heading  = React.createElement("h1", {className: "header", key: "h1"}, "Hello from React")
const heading2 = React.createElement("h2", {className: "header", key: "h2"}, "Hello from React")
const heading3 = React.createElement("h3", {className: "header", key: "h3"}, "Hello from React")

const parent = React.createElement("div", {}, [heading,heading2,heading3]);

const Heading1jsx = (props) => <h1 className="header">Hello {props.name} from React</h1>


const Heading2jsx = () => <h2>Hello from React</h2>

const Heading3jsx = () => <h3>Hello from React</h3>


const Parentjsx = () =>{
  return(
    <div>
  <Heading1jsx name="shradha"/>
  <Heading2jsx/>
  <Heading3jsx/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Parentjsx></Parentjsx>)